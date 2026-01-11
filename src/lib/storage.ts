/**
 * Supabase Storage configuration for Landing blog images
 *
 * Bucket structure:
 * public_nutri_app_bucket/
 *   └── Landing/
 *       └── blog/
 *           └── {article-slug}/
 *               ├── hero.webp       (1200x630 - og:image compatible)
 *               ├── content-1.webp  (800x600 - inline images)
 *               └── ...
 *
 * Usage in markdown frontmatter:
 *   image: lowis-vs-cal-ai/hero.webp
 *
 * The full URL will be constructed automatically.
 */

// Supabase project configuration
const SUPABASE_URL = 'https://yjxnyjcaxehosndbyepg.supabase.co';
const PUBLIC_BUCKET = 'public_nutri_app_bucket';
const BLOG_PATH = 'Landing/blog';

/**
 * Get the full public URL for a blog image
 * @param imagePath - Relative path from Landing/blog/ (e.g., "lowis-vs-cal-ai/hero.webp")
 * @returns Full public URL to the image
 */
export function getBlogImageUrl(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${SUPABASE_URL}/storage/v1/object/public/${PUBLIC_BUCKET}/${BLOG_PATH}/${cleanPath}`;
}

/**
 * Get the base URL for blog images (useful for constructing URLs manually)
 */
export function getBlogImageBaseUrl(): string {
  return `${SUPABASE_URL}/storage/v1/object/public/${PUBLIC_BUCKET}/${BLOG_PATH}`;
}

/**
 * Image paths helper for common blog image types
 */
export const blogImages = {
  /**
   * Get hero image URL for an article
   * @param slug - Article slug (e.g., "lowis-vs-cal-ai")
   * @param extension - File extension (default: "webp")
   */
  hero: (slug: string, extension = 'webp') => getBlogImageUrl(`${slug}/hero.${extension}`),

  /**
   * Get content image URL for an article
   * @param slug - Article slug
   * @param imageName - Image filename without extension
   * @param extension - File extension (default: "webp")
   */
  content: (slug: string, imageName: string, extension = 'webp') =>
    getBlogImageUrl(`${slug}/${imageName}.${extension}`),

  /**
   * Get og:image URL for social sharing
   * Same as hero but explicitly for meta tags
   */
  ogImage: (slug: string, extension = 'webp') => getBlogImageUrl(`${slug}/og.${extension}`),
};

/**
 * Recommended image dimensions for blog
 */
export const blogImageDimensions = {
  hero: { width: 1200, height: 630 },      // og:image compatible, 1.91:1 ratio
  content: { width: 800, height: 600 },    // 4:3 ratio for inline images
  thumbnail: { width: 400, height: 300 },  // 4:3 ratio for cards
  ogImage: { width: 1200, height: 630 },   // Required for social sharing
} as const;
