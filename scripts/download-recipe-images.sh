#!/bin/bash
# Download and optimize recipe images for the landing page carousel
# Images are downloaded from Unsplash with proper WebP format and dimensions

OUTPUT_DIR="/Users/vicen/lowis-landing-temp/public/images/recipes"
mkdir -p "$OUTPUT_DIR"

echo "Downloading optimized recipe images..."

# International recipes (200x200 for carousel)
declare -A INTERNATIONAL=(
  ["caesar-salad"]="photo-1546069901-ba9599a7e63c"
  ["salmon-lemon"]="photo-1467003909585-2f8a72700288"
  ["quinoa-bowl"]="photo-1512621776951-a57141f2eefd"
  ["tofu-teriyaki"]="photo-1546069901-d5bfd2cbfb1f"
  ["green-smoothie"]="photo-1610970881699-44a5587cabec"
  ["acai-bowl"]="photo-1590301157890-4810ed352733"
)

# Moroccan recipes (200x200 for carousel)
declare -A MOROCCAN=(
  ["tajine-chicken"]="photo-1511690743698-d9d85f2fbf38"
  ["couscous-lamb"]="photo-1585937421612-70a008356fbe"
  ["kefta-meatballs"]="photo-1529042410759-befb1204b468"
  ["harira-soup"]="photo-1547592166-23ac45744acd"
  ["grilled-fish"]="photo-1519708227418-c8fd9a32b7a2"
  ["vegetable-tajine"]="photo-1540914124281-342587941389"
)

# Download function with Unsplash optimization parameters
download_image() {
  local name=$1
  local photo_id=$2
  local size=$3
  local output_file="$OUTPUT_DIR/${name}.webp"

  # Unsplash URL with WebP format, proper dimensions, crop, and quality
  local url="https://images.unsplash.com/${photo_id}?w=${size}&h=${size}&fit=crop&fm=webp&q=80"

  echo "  Downloading ${name} (${size}x${size})..."
  curl -sL "$url" -o "$output_file"

  if [ -f "$output_file" ]; then
    local file_size=$(ls -la "$output_file" | awk '{print $5}')
    echo "    -> ${output_file} (${file_size} bytes)"
  else
    echo "    -> ERROR: Failed to download ${name}"
  fi
}

echo ""
echo "=== International Recipes (carousel) ==="
for name in "${!INTERNATIONAL[@]}"; do
  download_image "$name" "${INTERNATIONAL[$name]}" 200
done

echo ""
echo "=== Moroccan Recipes (carousel) ==="
for name in "${!MOROCCAN[@]}"; do
  download_image "$name" "${MOROCCAN[$name]}" 200
done

echo ""
echo "=== Thumbnails for PhoneMockup (100x100) ==="
# Download smaller versions for the phone mockup
for name in "caesar-salad" "salmon-lemon" "quinoa-bowl"; do
  download_image "${name}-thumb" "${INTERNATIONAL[$name]}" 100
done
for name in "tajine-chicken" "kefta-meatballs" "grilled-fish"; do
  download_image "${name}-thumb" "${MOROCCAN[$name]}" 100
done

echo ""
echo "Done! Images saved to $OUTPUT_DIR"
ls -la "$OUTPUT_DIR"
