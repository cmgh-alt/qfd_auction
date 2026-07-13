#!/bin/bash

# Compress all JPG images in src/assets to 75% quality
# Saves as originalname_downscale.jpg

ASSETS_DIR="./src/assets"
QUALITY=75

echo "Compressing JPG files in $ASSETS_DIR to ${QUALITY}% quality..."
echo ""

count=0
for file in "$ASSETS_DIR"/*.{jpg,jpeg,JPG,JPEG}; do
  # Skip if no files match
  [ -e "$file" ] || continue
  
  # Get filename without extension
  filename=$(basename "$file")
  name="${filename%.*}"
  ext="${filename##*.}"
  
  # Create output filename
  output="$ASSETS_DIR/${name}_downscale.${ext}"
  
  # Get original size
  original_size=$(du -h "$file" | cut -f1)
  
  # Compress with ImageMagick
  convert "$file" -quality $QUALITY "$output"
  
  # Get compressed size
  compressed_size=$(du -h "$output" | cut -f1)
  
  echo "✓ $filename"
  echo "  $original_size → $compressed_size (saved as ${name}_downscale.${ext})"
  echo ""
  
  ((count++))
done

echo "Compressed $count files!"
