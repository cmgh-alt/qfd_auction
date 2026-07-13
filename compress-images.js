import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, parse } from 'path';

const ASSETS_DIR = './src/assets';
const QUALITY = 75;

async function compressImages() {
  try {
    const files = await readdir(ASSETS_DIR);
    
    // Filter for JPG files only
    const jpgFiles = files.filter(file => 
      /\.(jpg|jpeg|JPG|JPEG)$/.test(file)
    );

    console.log(`Found ${jpgFiles.length} JPG files to compress...\n`);

    for (const file of jpgFiles) {
      const inputPath = join(ASSETS_DIR, file);
      const { name, ext } = parse(file);
      const outputPath = join(ASSETS_DIR, `${name}_downscale${ext}`);

      try {
        const info = await sharp(inputPath)
          .jpeg({ quality: QUALITY })
          .toFile(outputPath);

        console.log(`✓ ${file}`);
        console.log(`  Original: ${(info.size / 1024 / 1024).toFixed(2)}MB → Compressed: saved to ${name}_downscale${ext}\n`);
      } catch (err) {
        console.error(`✗ Failed to compress ${file}:`, err.message);
      }
    }

    console.log('Compression complete!');
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

compressImages();
