import { Landing } from '@/components/Landing';
import { localizedMetadata } from '@/lib/metadata';

export const metadata = localizedMetadata({
  title: 'Wardflame — Survival crafting for iPhone, iPad and Mac',
  description: 'Build a base by day and defend the obelisk after dark in Wardflame, a top-down survival crafting game for iPhone, iPad and Mac with Game Center co-op.',
  section: 'home',
  locale: 'en',
});

export default function Home() {
  return <Landing locale="en" />;
}
