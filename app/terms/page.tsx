import Link from 'next/link';
import { InfoPage } from '@/components/InfoPage';
import { localizedMetadata } from '@/lib/metadata';

export const metadata = localizedMetadata({
  title: 'Terms',
  description: 'Website terms, App Store licensing, purchases, intellectual property, and availability for Wardflame.',
  section: 'terms',
  locale: 'en',
});

export default function TermsPage() {
  return (
    <InfoPage locale="en" section="terms" index="Terms / 22 Aug 2026" title="Terms" intro="These terms cover the Wardflame website and support materials. The game is licensed through the App Store.">
      <h2>Website use</h2>
      <p>You may use wardflame.com to learn about Wardflame, view game screenshots, and reach support. Do not interfere with the site, attempt unauthorized access, or use its content in a misleading or unlawful way.</p>

      <h2>Game license</h2>
      <p>When Wardflame is distributed through the App Store, the license terms shown on its product page apply. Unless that page states otherwise, Apple&apos;s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">Standard End User License Agreement</a> governs the game license. This page is not a custom EULA.</p>

      <h2>Purchases</h2>
      <p>The current design offers the first in-game day and night without charge, followed by one non-consumable purchase for the full game. Price and currency are displayed by the App Store for your region. Apple processes payment, restoration, billing, and refund requests under its terms.</p>

      <h2>Intellectual property</h2>
      <p>Wardflame, its code, game art, audio, text, and website materials are protected by applicable intellectual-property laws. You may share links and unmodified screenshots for discussion, reviews, and gameplay coverage. No broader license is granted.</p>

      <h2>Availability</h2>
      <p>Wardflame is in development. Features, compatibility, release timing, and availability may change before release. The website is provided as available and may be updated or temporarily unavailable.</p>

      <h2>Contact and changes</h2>
      <p>Questions can be sent through <Link href="/support">Wardflame Support</Link>. Material changes to these terms will be published here with a new date.</p>
      <p className="document-date">Effective 22 August 2026</p>
    </InfoPage>
  );
}
