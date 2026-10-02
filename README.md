# طلاکوب زرنقش — Zarnaghsh

لندینگ پیج سئو‌شده‌ی **زرنقش**، خدمات طلاکوب روی کارتن، جعبه، لیبل، کارت ویزیت و ساک دستی.

- **Next.js 16** (App Router, `output: 'export'`) + **React 19** + **Tailwind CSS 4** + TypeScript
- کاملاً استاتیک، فارسی و راست‌به‌چپ (`lang="fa-IR" dir="rtl"`)، فونت وزیرمتن با `next/font`
- دیپلوی خودکار روی **GitHub Pages** با GitHub Actions (`.github/workflows/deploy.yml`)

## سئو

- عنوان، توضیحات، کلمات کلیدی، canonical، Open Graph و Twitter Card (`app/layout.tsx`)
- داده‌ی ساختاریافته JSON-LD: `LocalBusiness` + کاتالوگ خدمات، `WebSite`، `WebPage` و `FAQPage` (`components/json-ld.tsx`)
- `sitemap.xml`، `robots.txt` و `manifest.webmanifest` به‌صورت استاتیک
- ساختار معنایی HTML (یک `h1`، تیترهای `h2/h3` با کلمات کلیدی «طلاکوب»، «طلاکوب کارتن»، «طلاکوب جعبه» و …)
- تقریباً بدون جاوااسکریپت سمت کاربر (فقط منوی موبایل) برای Core Web Vitals بهتر

## ویرایش اطلاعات کسب‌وکار

همه‌ی اطلاعات تماس (تلفن، واتساپ، تلگرام، اینستاگرام، آدرس، ساعت کاری) در **`lib/site.ts`** هستند.
متن خدمات، رنگ فویل‌ها، مراحل، نمونه‌کارها و سوالات متداول در **`lib/content.ts`**.

## اجرا

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # خروجی استاتیک در out/
```

## انتشار روی GitHub Pages

1. در مخزن: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. هر push روی `main` سایت را می‌سازد و منتشر می‌کند.
3. (اختیاری) دامنه‌ی اختصاصی مثل `zarnaghsh.ir` را در همان صفحه وارد کنید؛ base path خودکار تنظیم می‌شود.
4. (اختیاری) کد تأیید Google Search Console را در **Settings → Secrets and variables → Actions → Variables** با نام `GOOGLE_SITE_VERIFICATION` بگذارید.
