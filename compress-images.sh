#!/bin/bash

# Compress all JPG images in a directory
# Usage: ./compress-images.sh [directory] [quality]
# Default: ./compress-images.sh ./src/assets 75

DIR="${1:-./src/assets}"
QUALITY="${2:-75}"

echo "Compressing JPG files in $DIR to ${QUALITY}% quality..."
echo ""

count=0
for file in "$DIR"/*.{jpg,jpeg,JPG,JPEG}; do
  # Skip if no files match
  [ -e "$file" ] || continue
  
  # Skip if already compressed
  [[ "$file" == *"_compressed"* ]] && continue
  
  # Get filename without extension
  filename=$(basename "$file")
  name="${filename%.*}"
  ext="${filename##*.}"
  
  # Create output filename
  output="$DIR/${name}_compressed.${ext}"
  
  # Get original size
  original_size=$(du -h "$file" | cut -f1)
  
  # Compress with ImageMagick
  convert "$file" -quality $QUALITY "$output"
  
  # Get compressed size
  compressed_size=$(du -h "$output" | cut -f1)
  
  echo "✓ $filename"
  echo "  $original_size → $compressed_size"
  echo ""
  
  ((count++))
done

echo "Compressed $count files!"
