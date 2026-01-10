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

// Helper to generate hreflang links for a URL
// Format required by @astrojs/sitemap: { lang: string, url: string }
function generateHreflangLinks(urlString) {
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
  integrations: [
    sitemap({
      serialize(item) {
        // Add hreflang links to all pages
        item.links = generateHreflangLinks(item.url);
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