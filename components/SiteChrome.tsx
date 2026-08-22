import Link from 'next/link';
import { LOCALES, Locale, localeInfo, localizedPath, PageSection } from '@/lib/locales';

const labels = {
  en: { game: 'Game', support: 'Support', language: 'Choose language', home: 'Wardflame home', nav: 'Primary navigation', legal: 'Legal links' },
  ru: { game: 'Игра', support: 'Поддержка', language: 'Выбрать язык', home: 'Главная Wardflame', nav: 'Основная навигация', legal: 'Юридические ссылки' },
  de: { game: 'Spiel', support: 'Support', language: 'Sprache wählen', home: 'Wardflame-Startseite', nav: 'Hauptnavigation', legal: 'Rechtliche Hinweise' },
  fr: { game: 'Jeu', support: 'Assistance', language: 'Choisir la langue', home: 'Accueil de Wardflame', nav: 'Navigation principale', legal: 'Liens juridiques' },
  es: { game: 'Juego', support: 'Soporte', language: 'Elegir idioma', home: 'Página de inicio de Wardflame', nav: 'Navegación principal', legal: 'Enlaces legales' },
  tr: { game: 'Oyun', support: 'Destek', language: 'Dil seçin', home: 'Wardflame ana sayfası', nav: 'Ana gezinme', legal: 'Yasal bağlantılar' },
};

export function SiteHeader({ locale, section = 'home' }: { locale: Locale; section?: PageSection }) {
  const home = localizedPath(locale, 'home');
  const t = labels[locale];

  return (
    <header className="site-header">
      <Link className="wordmark" href={home} aria-label={t.home}>
        Wardflame
      </Link>
      <nav aria-label={t.nav}>
        <Link href={`${home}#game`}>{t.game}</Link>
        <Link href={localizedPath(locale, 'support')}>{t.support}</Link>
        <details className="language-menu">
          <summary title={t.language}>{localeInfo[locale].short}</summary>
          <div className="language-options">
            {LOCALES.map((option) => option === locale ? (
              <span key={option} lang={option} aria-current="page">{localeInfo[option].name}</span>
            ) : (
              <Link key={option} href={localizedPath(option, section)} hrefLang={localeInfo[option].hrefLang} lang={option}>
                {localeInfo[option].name}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = {
    en: { line: 'An independent game for iPhone and iPad', privacy: 'Privacy', support: 'Support', terms: 'Terms' },
    ru: { line: 'Независимая игра для iPhone и iPad', privacy: 'Конфиденциальность', support: 'Поддержка', terms: 'Условия' },
    de: { line: 'Ein unabhängiges Spiel für iPhone und iPad', privacy: 'Datenschutz', support: 'Support', terms: 'Bedingungen' },
    fr: { line: 'Un jeu indépendant pour iPhone et iPad', privacy: 'Confidentialité', support: 'Assistance', terms: 'Conditions' },
    es: { line: 'Un juego independiente para iPhone y iPad', privacy: 'Privacidad', support: 'Soporte', terms: 'Condiciones' },
    tr: { line: 'iPhone ve iPad için bağımsız bir oyun', privacy: 'Gizlilik', support: 'Destek', terms: 'Koşullar' },
  }[locale];

  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-mark" href={localizedPath(locale, 'home')}>Wardflame</Link>
        <p>{copy.line}</p>
      </div>
      <nav aria-label={labels[locale].legal}>
        <Link href={localizedPath(locale, 'privacy')}>{copy.privacy}</Link>
        <Link href={localizedPath(locale, 'support')}>{copy.support}</Link>
        <Link href={localizedPath(locale, 'terms')}>{copy.terms}</Link>
      </nav>
      <p className="copyright">© 2026 Wardflame</p>
    </footer>
  );
}
