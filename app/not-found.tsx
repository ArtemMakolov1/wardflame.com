import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';

export default function NotFound() {
  return (
    <div>
      <SiteHeader locale="en" />
      <main className="not-found">
        <p className="section-index">404 / Outside the map</p>
        <h1>Nothing here.</h1>
        <Link className="primary-link" href="/">Return to Wardflame</Link>
      </main>
      <SiteFooter locale="en" />
    </div>
  );
}
