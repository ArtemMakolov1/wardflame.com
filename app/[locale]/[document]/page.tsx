import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocalizedDocument } from '@/components/LocalizedDocument';
import { DOCUMENT_KINDS, extraDocuments, isDocumentKind } from '@/lib/extra-documents';
import { EXTRA_LOCALES, isExtraLocale } from '@/lib/locales';
import { localizedMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string; document: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return EXTRA_LOCALES.flatMap((locale) => (
    DOCUMENT_KINDS.map((document) => ({ locale, document }))
  ));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, document } = await params;
  if (!isExtraLocale(locale) || !isDocumentKind(document)) return {};
  const copy = extraDocuments[locale][document];

  return localizedMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    section: document,
    locale,
  });
}

export default async function LocalizedInfoPage({ params }: Props) {
  const { locale, document } = await params;
  if (!isExtraLocale(locale) || !isDocumentKind(document)) notFound();

  return <LocalizedDocument locale={locale} kind={document} copy={extraDocuments[locale][document]} />;
}
