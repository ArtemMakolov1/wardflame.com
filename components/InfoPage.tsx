import type { ReactNode } from 'react';
import type { Locale, PageSection } from '@/lib/locales';
import { SiteFooter, SiteHeader } from './SiteChrome';

export function InfoPage({
  locale,
  index,
  title,
  intro,
  section,
  children,
}: {
  locale: Locale;
  index: string;
  title: string;
  intro: string;
  section: Exclude<PageSection, 'home'>;
  children: ReactNode;
}) {
  return (
    <div lang={locale}>
      <SiteHeader locale={locale} section={section} />
      <main className="info-page">
        <header className="info-hero">
          <p className="section-index">{index}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        <article className="info-copy">{children}</article>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
