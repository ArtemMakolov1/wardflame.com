export const LOCALES = ['en', 'ru', 'de', 'fr', 'es', 'tr'] as const;

export type Locale = (typeof LOCALES)[number];
export type PageSection = 'home' | 'privacy' | 'support' | 'terms';

export const localeInfo: Record<Locale, {
  short: string;
  name: string;
  hrefLang: string;
  openGraphLocale: string;
}> = {
  en: { short: 'EN', name: 'English', hrefLang: 'en-US', openGraphLocale: 'en_US' },
  ru: { short: 'RU', name: 'Русский', hrefLang: 'ru-RU', openGraphLocale: 'ru_RU' },
  de: { short: 'DE', name: 'Deutsch', hrefLang: 'de-DE', openGraphLocale: 'de_DE' },
  fr: { short: 'FR', name: 'Français', hrefLang: 'fr-FR', openGraphLocale: 'fr_FR' },
  es: { short: 'ES', name: 'Español', hrefLang: 'es-ES', openGraphLocale: 'es_ES' },
  tr: { short: 'TR', name: 'Türkçe', hrefLang: 'tr-TR', openGraphLocale: 'tr_TR' },
};

export const EXTRA_LOCALES = ['de', 'fr', 'es', 'tr'] as const;
export type ExtraLocale = (typeof EXTRA_LOCALES)[number];

export function isExtraLocale(value: string): value is ExtraLocale {
  return EXTRA_LOCALES.includes(value as ExtraLocale);
}

export function localizedPath(locale: Locale, section: PageSection): string {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return section === 'home' ? prefix || '/' : `${prefix}/${section}`;
}

export function languageAlternates(section: PageSection): Record<string, string> {
  return Object.fromEntries(
    LOCALES.map((locale) => [localeInfo[locale].hrefLang, localizedPath(locale, section)]),
  );
}
