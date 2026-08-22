import { RootDocument, rootMetadata } from '@/components/RootDocument';

export const metadata = rootMetadata;

export default function RussianRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="ru">{children}</RootDocument>;
}
