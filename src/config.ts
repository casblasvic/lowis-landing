/**
 * Configuración centralizada del sitio
 * Cambiar estos valores actualizará todas las referencias en la landing
 */

/**
 * Feature flags para activar/desactivar funcionalidades
 */
export const FEATURES = {
  // Banner promocional para el agente de voz Fabian
  fabianBanner: true,
} as const;

export const SITE_CONFIG = {
  // Dominio de la landing page
  domain: 'https://lowis.app',

  // Dominio de la aplicación
  appDomain: 'https://app.lowis.app',

  // URL de registro/signup
  signupUrl: 'https://app.lowis.app/signup/welcome',

  // URL de login
  loginUrl: 'https://app.lowis.app/login',

  // Precio actual
  pricing: {
    trial: 0,
    amount: 1500,
    currency: 'DH',
    period: '6 semaines',
    trialDays: 7
  }
} as const;

// Helper para obtener la URL de signup
export function getSignupUrl(): string {
  return SITE_CONFIG.signupUrl;
}

// Helper para obtener la URL de signup con idioma
export function getSignupUrlWithLang(lang: string): string {
  return `${SITE_CONFIG.signupUrl}?lang=${lang}`;
}

// Helper para obtener la URL de login con idioma
export function getLoginUrlWithLang(lang: string): string {
  return `${SITE_CONFIG.loginUrl}?lang=${lang}`;
}

// Helper para obtener el dominio base
export function getSiteDomain(): string {
  return SITE_CONFIG.domain;
}
