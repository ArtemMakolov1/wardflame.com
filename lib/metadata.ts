import type { Metadata } from 'next';
import { languageAlternates, Locale, localeInfo, localizedPath, PageSection } from './locales';

export const SITE_URL = 'https://wardflame.com';

const ogImageAlt: Record<Locale, string> = {
  en: 'A fortified Wardflame base during a blood moon',
  ru: 'Укреплённая база Wardflame во время кровавой луны',
  de: 'Eine befestigte Wardflame-Basis während des Blutmonds',
  fr: 'Une base fortifiée de Wardflame pendant la lune de sang',
  es: 'Una base fortificada de Wardflame durante una luna de sangre',
  tr: 'Kanlı ay sırasında tahkim edilmiş bir Wardflame üssü',
};

export function localizedMetadata({
  title,
  description,
  section,
  locale,
}: {
  title: string;
  description: string;
  section: PageSection;
  locale: Locale;
}): Metadata {
  const path = localizedPath(locale, section);
  const canonical = `${SITE_URL}${path}`;
  const languages = Object.fromEntries(
    Object.entries(languageAlternates(section)).map(([language, route]) => [language, `${SITE_URL}${route}`]),
  );

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        'x-default': `${SITE_URL}${localizedPath('en', section)}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Wardflame',
      title,
      description,
      url: canonical,
      locale: localeInfo[locale].openGraphLocale,
      alternateLocale: LOCALE_OPEN_GRAPH.filter((candidate) => candidate !== localeInfo[locale].openGraphLocale),
      images: [
        {
          url: '/media/night.png',
          width: 2144,
          height: 1206,
          alt: ogImageAlt[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/media/night.png'],
    },
  };
}

const LOCALE_OPEN_GRAPH = Object.values(localeInfo).map(({ openGraphLocale }) => openGraphLocale);
