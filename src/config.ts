/**
 * Configuración centralizada del sitio
 * Cambiar estos valores actualizará todas las referencias en la landing
 */
export const SITE_CONFIG = {
  // Dominio de la landing page
  domain: 'https://lowis.app',

  // Dominio de la aplicación
  appDomain: 'https://app.lowis.app',

  // URL de registro/signup
  signupUrl: 'https://app.lowis.app/signup/welcome',

  // Precio actual
  pricing: {
    trial: 0,
    amount: 199,
    currency: 'DH',
    period: 'semaine', // semaine | mois
    trialDays: 7
  }
} as const;

// Helper para obtener la URL de signup
export function getSignupUrl(): string {
  return SITE_CONFIG.signupUrl;
}

// Helper para obtener el dominio base
export function getSiteDomain(): string {
  return SITE_CONFIG.domain;
}
