// Single place to edit business details. Everything on the page, the JSON-LD
// structured data, sitemap and manifest read from here.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const site = {
  name: 'زرنقش',
  nameEn: 'Zarnaghsh',
  tagline: 'چاپ طلاکوب روی کارتن، جعبه و بسته‌بندی',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mrghamari.github.io/zarnaghsh').replace(/\/$/, ''),
  basePath,
  locale: 'fa_IR',

  // TODO: replace with the real contact details before promoting the site.
  phone: '+989120000000',
  phoneDisplay: '۰۹۱۲ ۰۰۰ ۰۰۰۰',
  whatsapp: '989120000000',
  telegram: 'zarnaghsh',
  instagram: 'zarnaghsh',
  email: 'info@zarnaghsh.ir',
  city: 'تهران',
  region: 'تهران',
  address: 'تهران، ایران',
  openingHours: 'شنبه تا پنجشنبه، ۹ صبح تا ۷ عصر',
  openingHoursSchema: ['Sa-Th 09:00-19:00'],

  // Paste the content value of the Google Search Console HTML-tag verification here.
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
} as const;

export const asset = (path: string) => `${basePath}${path}`;

export const absoluteUrl = (path = '/') => `${site.url}${path}`;
