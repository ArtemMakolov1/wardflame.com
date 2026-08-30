import { InfoPage } from '@/components/InfoPage';
import { localizedMetadata } from '@/lib/metadata';

const SUPPORT_EMAIL = 'support@wardflame.com';

export const metadata = localizedMetadata({
  title: 'Support',
  description: 'Wardflame support, release status, device requirements, purchase restoration help, and bug reporting.',
  section: 'support',
  locale: 'en',
});

export default function SupportPage() {
  return (
    <InfoPage locale="en" section="support" index="Support / Wardflame" title="Support" intro="Get help with Wardflame, report a problem, or ask a question.">
      <a className="primary-link" href={`mailto:${SUPPORT_EMAIL}`}>Email {SUPPORT_EMAIL} <span aria-hidden="true">↗</span></a>
      <p className="support-note">Email is the official support channel and does not require an account. Do not send payment card details or other sensitive information.</p>

      <h2>What to include</h2>
      <ul>
        <li>Your iPhone, iPad, or Mac model and operating-system version.</li>
        <li>The Wardflame version shown in the app.</li>
        <li>What you did, what happened, and what you expected.</li>
        <li>A screenshot or short screen recording when it helps explain the problem.</li>
      </ul>

      <h2>Supported devices</h2>
      <p>Wardflame supports iPhone and iPad running iOS or iPadOS 17.0 or later, as well as Mac. The mobile version plays in landscape. The game and this website are available in English, Russian, German, French, Spanish, and Turkish.</p>

      <h2>Purchases and restoration</h2>
      <p>The first in-game day and night are free. A single non-consumable purchase unlocks the full game. To restore it, use Restore Purchase on the unlock screen while signed in with the Apple Account that made the purchase.</p>
      <p>Apple processes payments. Never include card information in a support request. For billing or refund questions, contact Apple Support.</p>

      <h2>Privacy</h2>
      <p>Wardflame stores progress and settings locally and does not operate an analytics or advertising backend. See the Privacy page for the full policy.</p>
    </InfoPage>
  );
}
