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
// region: 'MA' = Marruecos/Maghreb, 'FR' = Francia, 'INT' = Internacional
export const languageMetadata = {
  'fr': { name: 'Français', flag: '🇲🇦', country: 'Maroc', region: 'MA' },
  'fr-FR': { name: 'Français', flag: '🇫🇷', country: 'France', region: 'FR' },
  'en': { name: 'English', flag: '🇬🇧', country: undefined, region: 'INT' },
  'es': { name: 'Español', flag: '🇪🇸', country: undefined, region: 'INT' },
} as const;

// Nombres de idiomas traducidos para cada locale (sin país, más limpio)
export const translatedLanguageNames: Record<Language, Record<Language, string>> = {
  'fr': {
    'fr': 'Français',
    'fr-FR': 'Français',
    'en': 'Anglais',
    'es': 'Espagnol',
  },
  'fr-FR': {
    'fr': 'Français',
    'fr-FR': 'Français',
    'en': 'Anglais',
    'es': 'Espagnol',
  },
  'en': {
    'fr': 'French',
    'fr-FR': 'French',
    'en': 'English',
    'es': 'Spanish',
  },
  'es': {
    'fr': 'Francés',
    'fr-FR': 'Francés',
    'en': 'Inglés',
    'es': 'Español',
  },
};

// Obtener idiomas disponibles según región detectada
// CRÍTICO: Un usuario de Marruecos NO debe ver la opción de Francia (precios diferentes)
export function getAvailableLanguages(detectedRegion: 'MA' | 'FR' | 'INT' | null): Language[] {
  if (detectedRegion === 'MA') {
    // Usuarios de Marruecos/Maghreb: solo francés Marruecos + idiomas internacionales
    return ['fr', 'en', 'es'];
  }
  if (detectedRegion === 'FR') {
    // Usuarios de Francia: solo francés Francia + idiomas internacionales
    return ['fr-FR', 'en', 'es'];
  }
  // Internacional o no detectado: todos los idiomas internacionales
  return ['en', 'es', 'fr'];
}

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
