import { notFound } from 'next/navigation';
import { RootDocument, rootMetadata } from '@/components/RootDocument';
import { isExtraLocale } from '@/lib/locales';

export const metadata = rootMetadata;

export default async function LocalizedRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isExtraLocale(locale)) notFound();

  return <RootDocument locale={locale}>{children}</RootDocument>;
}
