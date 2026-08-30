import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wardflame',
    short_name: 'Wardflame',
    description: 'Top-down survival crafting for iPhone, iPad and Mac.',
    start_url: '/',
    display: 'standalone',
    background_color: '#121411',
    theme_color: '#121411',
    icons: [{ src: '/icon.png', sizes: '128x128', type: 'image/png' }],
  };
}
