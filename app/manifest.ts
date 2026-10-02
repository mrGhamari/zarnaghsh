import type { MetadataRoute } from 'next';
import { asset, site } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `طلاکوب ${site.name}`,
    short_name: site.name,
    description: site.tagline,
    lang: 'fa-IR',
    dir: 'rtl',
    start_url: asset('/'),
    scope: asset('/'),
    display: 'standalone',
    background_color: '#0b0906',
    theme_color: '#0b0906',
    icons: [
      { src: asset('/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { src: asset('/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: asset('/icon-maskable-512.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
