import { site } from '@/lib/site';
import { PhoneIcon } from './icons';
import { MobileMenu } from './mobile-menu';
import { Seal } from './seal';

export const navItems = [
  { href: '#services', label: 'خدمات' },
  { href: '#foils', label: 'رنگ فویل' },
  { href: '#works', label: 'نمونه‌کارها' },
  { href: '#process', label: 'مراحل سفارش' },
  { href: '#faq', label: 'سوالات متداول' },
  { href: '#contact', label: 'تماس' },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-300/10 bg-ink-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`طلاکوب ${site.name} — صفحه اصلی`}>
          <Seal className="size-10" compact title="" aria-hidden="true" />
          <span className="leading-tight">
            <span className="foil-text block text-lg font-black">{site.name}</span>
            <span className="block text-[11px] text-gold-100/60">خدمات طلاکوب</span>
          </span>
        </a>

        <nav aria-label="منوی اصلی" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm text-gold-50/80 transition hover:bg-gold-300/10 hover:text-gold-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone}`}
            className="foil-bg hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-ink-950 shadow-[0_0_24px_rgba(232,194,90,0.25)] sm:inline-flex"
          >
            <PhoneIcon className="size-4" />
            ثبت سفارش
          </a>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
