import type { MetadataRoute } from 'next';
import { LOCALES, localizedPath, PageSection } from '@/lib/locales';

const sections: PageSection[] = ['home', 'privacy', 'support', 'terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) => sections.map((section) => ({
    url: `https://wardflame.com${localizedPath(locale, section)}`,
    lastModified: new Date('2026-08-22T00:00:00.000Z'),
    changeFrequency: section === 'home' ? 'weekly' as const : 'monthly' as const,
    priority: section === 'home' ? 1 : 0.6,
  })));
}
