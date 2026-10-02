import type { Metadata, Viewport } from 'next';
import { Vazirmatn } from 'next/font/google';
import { keywords } from '@/lib/content';
import { absoluteUrl, asset, site } from '@/lib/site';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

const title = `طلاکوب ${site.name} | چاپ طلاکوب روی کارتن، جعبه، لیبل و کارت ویزیت`;
const description = `${site.name}، تخصص طلاکوبی روی کارتن، جعبه، لیبل، ساک دستی و کارت ویزیت با فویل طلایی، نقره‌ای، رزگلد و هولوگرام. ساخت کلیشه طلاکوب، طلاکوب برجسته و بج طلایی برند در ${site.city} و ارسال به سراسر ایران.`;

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: { default: title, template: `%s | طلاکوب ${site.name}` },
  description,
  keywords: [...keywords],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: 'printing',
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: absoluteUrl('/'),
    siteName: `طلاکوب ${site.name}`,
    title,
    description,
    images: [{ url: absoluteUrl('/og.png'), width: 1200, height: 630, alt: `طلاکوب ${site.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [absoluteUrl('/og.png')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: asset('/icon.svg'), type: 'image/svg+xml' }, { url: asset('/icon-192.png'), sizes: '192x192' }],
    apple: asset('/apple-touch-icon.png'),
  },
  formatDetection: { telephone: true },
  ...(site.googleSiteVerification ? { verification: { google: site.googleSiteVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: '#0b0906',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa-IR" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
