import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Landing } from '@/components/Landing';
import { extraHomeMetadata } from '@/lib/extra-content';
import { EXTRA_LOCALES, isExtraLocale } from '@/lib/locales';
import { localizedMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return EXTRA_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isExtraLocale(locale)) return {};
  const copy = extraHomeMetadata[locale];

  return localizedMetadata({
    title: copy.title,
    description: copy.description,
    section: 'home',
    locale,
  });
}

export default async function LocalizedHome({ params }: Props) {
  const { locale } = await params;
  if (!isExtraLocale(locale)) notFound();

  return <Landing locale={locale} />;
}
