import { Landing } from '@/components/Landing';
import { localizedMetadata } from '@/lib/metadata';

export const metadata = localizedMetadata({
  title: 'Wardflame — Выживание, крафт и оборона базы',
  description: 'Строй базу днём и защищай обелиск ночью в Wardflame — пиксельной выживалке с крафтом для iPhone, iPad и Mac с совместной игрой через Game Center.',
  section: 'home',
  locale: 'ru',
});

export default function RussianHome() {
  return <Landing locale="ru" />;
}
