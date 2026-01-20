// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Helper to get the base path without locale prefix
function getBasePath(urlString) {
  try {
    const urlObj = new URL(urlString);
    let path = urlObj.pathname;
    // Remove locale prefixes (/fr/, /en/, /es/)
    path = path.replace(/^\/(fr|en|es)(\/|$)/, '/');
    // Ensure trailing slash
    if (!path.endsWith('/')) path += '/';
    return path;
  } catch {
    return '/';
  }
}

// Check if URL is an individual blog article (not blog index or category)
function isIndividualBlogPost(urlString) {
  try {
    const urlObj = new URL(urlString);
    const path = urlObj.pathname;
    // Match /blog/[slug]/ or /[lang]/blog/[slug]/ but NOT /blog/ or /blog/category/
    // Individual posts have a slug after /blog/ that's not a category name
    const blogPostPattern = /^\/(fr|en|es\/)?blog\/[^/]+\/$/;
    const categoryPattern = /\/blog\/(guides|comparatifs|astuces|recettes|temoignages|bien-etre|mindset|sante-femme)\//;
    return blogPostPattern.test(path) && !categoryPattern.test(path) && path !== '/blog/';
  } catch {
    return false;
  }
}

// Helper to generate hreflang links for a URL
// Format required by @astrojs/sitemap: { lang: string, url: string }
// IMPORTANT: Returns null for individual blog posts (they have correct hreflang in their HTML)
function generateHreflangLinks(urlString) {
  // Skip hreflang for individual blog posts - they have different slugs per language
  // and already have correct hreflang links in their HTML via BlogLayout
  if (isIndividualBlogPost(urlString)) {
    return null;
  }

  const basePath = getBasePath(urlString);
  const site = 'https://lowis.app';

  // For root path, don't double the slash
  const frPath = basePath === '/' ? '/fr/' : `/fr${basePath}`;
  const enPath = basePath === '/' ? '/en/' : `/en${basePath}`;
  const esPath = basePath === '/' ? '/es/' : `/es${basePath}`;

  return [
    { lang: 'fr-MA', url: `${site}${basePath}` },
    { lang: 'fr-FR', url: `${site}${frPath}` },
    { lang: 'fr', url: `${site}${basePath}` },
    { lang: 'en', url: `${site}${enPath}` },
    { lang: 'es', url: `${site}${esPath}` },
    { lang: 'x-default', url: `${site}${basePath}` },
  ];
}

// https://astro.build/config
export default defineConfig({
  site: 'https://lowis.app',
  trailingSlash: 'always',
  build: {
    // Use 'never' - external CSS can be preloaded and downloaded in parallel
    // This allows HTML parsing to start while CSS downloads
    inlineStylesheets: 'never',
  },
  // 301 redirects for old category URLs (removed /category/ from path)
  redirects: {
    // French Morocco (default)
    '/blog/category/guides/': '/blog/guides/',
    '/blog/category/comparatifs/': '/blog/comparatifs/',
    '/blog/category/astuces/': '/blog/astuces/',
    '/blog/category/recettes/': '/blog/recettes/',
    '/blog/category/temoignages/': '/blog/temoignages/',
    '/blog/category/bien-etre/': '/blog/bien-etre/',
    '/blog/category/mindset/': '/blog/mindset/',
    '/blog/category/sante-femme/': '/blog/sante-femme/',
    // Spanish
    '/es/blog/category/guides/': '/es/blog/guides/',
    '/es/blog/category/comparatifs/': '/es/blog/comparatifs/',
    '/es/blog/category/astuces/': '/es/blog/astuces/',
    '/es/blog/category/recettes/': '/es/blog/recettes/',
    '/es/blog/category/temoignages/': '/es/blog/temoignages/',
    '/es/blog/category/bien-etre/': '/es/blog/bien-etre/',
    '/es/blog/category/mindset/': '/es/blog/mindset/',
    '/es/blog/category/sante-femme/': '/es/blog/sante-femme/',
    // English
    '/en/blog/category/guides/': '/en/blog/guides/',
    '/en/blog/category/comparatifs/': '/en/blog/comparatifs/',
    '/en/blog/category/astuces/': '/en/blog/astuces/',
    '/en/blog/category/recettes/': '/en/blog/recettes/',
    '/en/blog/category/temoignages/': '/en/blog/temoignages/',
    '/en/blog/category/bien-etre/': '/en/blog/bien-etre/',
    '/en/blog/category/mindset/': '/en/blog/mindset/',
    '/en/blog/category/sante-femme/': '/en/blog/sante-femme/',
    // French France
    '/fr/blog/category/guides/': '/fr/blog/guides/',
    '/fr/blog/category/comparatifs/': '/fr/blog/comparatifs/',
    '/fr/blog/category/astuces/': '/fr/blog/astuces/',
    '/fr/blog/category/recettes/': '/fr/blog/recettes/',
    '/fr/blog/category/temoignages/': '/fr/blog/temoignages/',
    '/fr/blog/category/bien-etre/': '/fr/blog/bien-etre/',
    '/fr/blog/category/mindset/': '/fr/blog/mindset/',
    '/fr/blog/category/sante-femme/': '/fr/blog/sante-femme/',
  },
  integrations: [
    sitemap({
      serialize(item) {
        // Add hreflang links (skips individual blog posts - they have correct hreflang in HTML)
        const links = generateHreflangLinks(item.url);
        if (links) {
          item.links = links;
        }
        return item;
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});