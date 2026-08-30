import Link from 'next/link';
import { InfoPage } from '@/components/InfoPage';
import { localizedMetadata } from '@/lib/metadata';

export const metadata = localizedMetadata({
  title: 'Privacy Policy',
  description: 'How the Wardflame game and wardflame.com handle game data, purchases, website logs, cookies, and tracking.',
  section: 'privacy',
  locale: 'en',
});

export default function PrivacyPage() {
  return (
    <InfoPage locale="en" section="privacy" index="Privacy / 30 Aug 2026" title="Privacy Policy" intro="Wardflame does not collect game data for analytics, advertising, or tracking.">
      <h2>The game</h2>
      <p>Wardflame does not collect, sell, or use personal data for tracking or advertising. The game has no analytics or advertising backend.</p>
      <p>Game progress, settings, and local diagnostic reports stay on your device. Wardflame&apos;s Apple privacy manifest declares no collected data types and no tracking.</p>

      <h2>Game Center multiplayer</h2>
      <p>Game Center is used only when you choose Play with Friends, for sign-in, invitations, and matchmaking. Player identity, match roster, and gameplay data pass between participants through Apple&apos;s service. Wardflame has no accounts or game servers of its own. Apple processes Game Center data under its own privacy policy.</p>

      <h2>Purchases</h2>
      <p>Full-game purchases and purchase restoration are processed by Apple through StoreKit. Wardflame receives only the entitlement state required to unlock the game. It does not receive your payment-card details. Apple handles purchase data under its own privacy policy.</p>

      <h2>Deleting local data</h2>
      <p>Deleting Wardflame removes its locally stored data, subject to device and App Store backup mechanisms controlled by Apple. The game does not maintain its own remote player account or cloud profile.</p>

      <h2>This website</h2>
      <p>Wardflame.com uses Vercel Web Analytics and Speed Insights to measure anonymous page views and real-world performance. These services do not use cookies. Vercel processes aggregated information such as the timestamp, route or URL, filtered query parameters, referrer, approximate country or region, browser, operating system, device type, network speed, and Core Web Vitals. The data is not associated with an individual visitor or IP address.</p>
      <p>We do not send custom events, account information, payment details, or advertising identifiers. Wardflame.com has no advertising trackers and does not build advertising profiles.</p>
      <p>On the current Vercel Hobby plan, the reporting window is one month for Web Analytics and seven days for Speed Insights. Vercel may retain Web Analytics data beyond the visible reporting window. The temporary visitor hash used by Web Analytics expires after 24 hours. Removing these components and disabling the services stops future collection. Because the metrics are aggregated and cannot be tied to a particular visitor, there is no visitor-specific analytics record for us to retrieve or delete.</p>
      <p>The hosting and security provider may also process limited technical information such as IP address, user agent, requested URL, and timestamps in server logs to deliver and protect the site.</p>
      <p>If you email support, Wardflame receives the sender address, message, attachments, and ordinary email-routing metadata. Cloudflare Email Routing and Google process this information to deliver the message. It is used only to answer the request and diagnose the reported problem. Include only the information needed for support and never send payment-card details or other sensitive information.</p>
      <p>Support correspondence is retained for up to 12 months after the last reply and then deleted, unless a longer period is required by law or needed to prevent abuse. You may request earlier deletion by emailing support@wardflame.com from the address used in the correspondence. We require Cloudflare and Google to provide protection at least comparable to that described in this policy. Residual copies in their backup systems may remain temporarily under their documented deletion schedules.</p>

      <h2>Changes and contact</h2>
      <p>This policy will be updated before any release that introduces new data collection or non-essential website tracking. For questions, use the <Link href="/support">Wardflame support page</Link>.</p>
      <p className="document-date">Updated 30 August 2026</p>
    </InfoPage>
  );
}
