import fr from './fr.json';
import es from './es.json';
import en from './en.json';

export const languages = {
  fr: 'Français',
  es: 'Español',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'fr';

export const translations = { fr, es, en } as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as Language;
  }
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return translations[lang];
}

export function getPathWithLang(path: string, lang: Language): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

// Helper to get alternate language URLs for SEO
export function getAlternateUrls(currentPath: string, baseUrl: string) {
  const path = currentPath.replace(/^\/(fr|es|en)/, '') || '/';
  return Object.keys(languages).map((lang) => ({
    hreflang: lang,
    href: `${baseUrl}${lang === defaultLang ? '' : `/${lang}`}${path === '/' ? '' : path}`,
  }));
}
