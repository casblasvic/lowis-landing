import fr from './fr.json';
import frFR from './fr-FR.json';
import es from './es.json';
import en from './en.json';

// Languages disponibles con sus hreflang para SEO
export const languages = {
  fr: 'Français',      // Marruecos (default)
  'fr-FR': 'Français', // Francia
  es: 'Español',
  en: 'English',
} as const;

// Metadata para el selector de idioma con contexto de país
export const languageMetadata = {
  'fr': { name: 'Français', flag: '🇲🇦', country: 'Maroc' },
  'fr-FR': { name: 'Français', flag: '🇫🇷', country: 'France' },
  'en': { name: 'English', flag: '🌍' },
  'es': { name: 'Español', flag: '🌍' },
} as const;

// Rutas disponibles
export const routeLanguages = ['fr', 'es', 'en', 'fr-FR'] as const;

export type Language = 'fr' | 'es' | 'en' | 'fr-FR';
export type RouteLanguage = 'fr' | 'es' | 'en' | 'fr-FR';

export const defaultLang: Language = 'fr';

// Traducciones
export const translations = {
  fr,
  es,
  en,
  'fr-FR': frFR,
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');

  // Detectar /fr/ como Francia
  if (lang === 'fr') {
    return 'fr-FR';
  }

  if (lang && lang in languages) {
    return lang as Language;
  }
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return translations[lang] || translations.fr;
}

// Base path for GitHub Pages deployment
const BASE_PATH = import.meta.env.BASE_URL || '';

export function getPathWithLang(path: string, lang: Language): string {
  const basePath = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;

  if (lang === defaultLang) {
    return `${basePath}${path}`;
  }

  // fr-FR usa /fr/ como ruta
  if (lang === 'fr-FR') {
    return `${basePath}/fr${path}`;
  }

  return `${basePath}/${lang}${path}`;
}

// Helper to get alternate language URLs for SEO
export function getAlternateUrls(currentPath: string, baseUrl: string) {
  // Limpiar el path de prefijos de idioma
  const path = currentPath.replace(/^\/(fr|es|en)/, '') || '/';
  const cleanPath = path === '/' ? '' : path;

  return [
    // Marruecos (default) - fr-MA
    { hreflang: 'fr-MA', href: `${baseUrl}${cleanPath}` },
    // Francia - fr-FR
    { hreflang: 'fr-FR', href: `${baseUrl}/fr${cleanPath}` },
    // Francés genérico (fallback a Marruecos)
    { hreflang: 'fr', href: `${baseUrl}${cleanPath}` },
    // Inglés
    { hreflang: 'en', href: `${baseUrl}/en${cleanPath}` },
    // Español
    { hreflang: 'es', href: `${baseUrl}/es${cleanPath}` },
  ];
}
