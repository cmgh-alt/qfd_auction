import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const COMPRESSED_DIR = './src/assets/compressed';
const QUALITY = 75;
const MAX_SIZE = 1200;

async function compressImages() {
  try {
    const files = await readdir(COMPRESSED_DIR);
    const jpgFiles = files.filter(file => /\.(jpg|jpeg)$/i.test(file));

    console.log(`Compressing ${jpgFiles.length} images...\n`);

    for (const file of jpgFiles) {
      const filePath = join(COMPRESSED_DIR, file);
      
      try {
        const metadata = await sharp(filePath).metadata();
        const originalSize = (metadata.size || 0) / 1024 / 1024;

        await sharp(filePath)
          .resize(MAX_SIZE, MAX_SIZE, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .jpeg({ quality: QUALITY })
          .toFile(filePath + '.tmp');

        // Replace original with compressed
        await sharp(filePath + '.tmp').toFile(filePath);
        
        const newMetadata = await sharp(filePath).metadata();
        const newSize = (newMetadata.size || 0) / 1024 / 1024;

        console.log(`✓ ${file}`);
        console.log(`  ${originalSize.toFixed(2)}MB → ${newSize.toFixed(2)}MB\n`);

        // Clean up temp file
        await import('fs/promises').then(fs => fs.unlink(filePath + '.tmp'));
      } catch (err) {
        console.error(`✗ Failed: ${file}`, err.message);
      }
    }

    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}

compressImages();
