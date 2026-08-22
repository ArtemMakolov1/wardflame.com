import Link from 'next/link';
import { InfoPage } from './InfoPage';
import { Locale, localizedPath, PageSection } from '@/lib/locales';

export type LinkedParagraph = {
  before: string;
  label: string;
  after?: string;
  href?: string;
  section?: Exclude<PageSection, 'home'>;
};

export type DocumentCopy = {
  metadataTitle: string;
  metadataDescription: string;
  index: string;
  title: string;
  intro: string;
  cta?: string;
  note?: string;
  sections: Array<{
    title: string;
    paragraphs?: Array<string | LinkedParagraph>;
    items?: string[];
  }>;
  date?: string;
};

const SUPPORT_URL = 'https://github.com/ArtemMakolov1/wardflame.com/issues/new?template=support.yml';

function Paragraph({ locale, value }: { locale: Locale; value: string | LinkedParagraph }) {
  if (typeof value === 'string') return <p>{value}</p>;

  const href = value.section ? localizedPath(locale, value.section) : value.href ?? '/';
  const external = Boolean(value.href);

  return (
    <p>
      {value.before}
      {external ? (
        <a href={href} target="_blank" rel="noreferrer">{value.label}</a>
      ) : (
        <Link href={href}>{value.label}</Link>
      )}
      {value.after ?? ''}
    </p>
  );
}

export function LocalizedDocument({
  locale,
  kind,
  copy,
}: {
  locale: Locale;
  kind: Exclude<PageSection, 'home'>;
  copy: DocumentCopy;
}) {
  return (
    <InfoPage locale={locale} section={kind} index={copy.index} title={copy.title} intro={copy.intro}>
      {copy.cta ? (
        <a className="primary-link" href={SUPPORT_URL} target="_blank" rel="noreferrer">
          {copy.cta} <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      {copy.note ? <p className="support-note">{copy.note}</p> : null}
      {copy.sections.map((section) => (
        <section className="document-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map((paragraph, index) => (
            <Paragraph key={index} locale={locale} value={paragraph} />
          ))}
          {section.items ? (
            <ul>
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : null}
        </section>
      ))}
      {copy.date ? <p className="document-date">{copy.date}</p> : null}
    </InfoPage>
  );
}
