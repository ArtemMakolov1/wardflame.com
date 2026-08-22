import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { languageAlternates } from '@/lib/locales';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wardflame.com'),
  title: {
    default: 'Wardflame — Survival crafting for iPhone and iPad',
    template: '%s · Wardflame',
  },
  description: 'Build a base by day and defend the obelisk after dark in Wardflame, a top-down survival crafting game for iPhone and iPad.',
  applicationName: 'Wardflame',
  category: 'game',
  alternates: {
    canonical: '/',
    languages: {
      ...languageAlternates('home'),
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Wardflame',
    url: '/',
    title: 'Wardflame — Survival crafting for iPhone and iPad',
    description: 'Build a base by day and defend the obelisk after dark in Wardflame, a top-down survival crafting game for iPhone and iPad.',
    images: [
      {
        url: '/media/night.png',
        width: 2144,
        height: 1206,
        alt: 'A fortified Wardflame base defending against a blood moon wave',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wardflame — Survival crafting for iPhone and iPad',
    description: 'Build a base by day and defend the obelisk after dark in Wardflame, a top-down survival crafting game for iPhone and iPad.',
    images: ['/media/night.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
