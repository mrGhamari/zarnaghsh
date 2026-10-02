'use client';

import { useEffect, useRef, useState } from 'react';
import { MenuIcon } from './icons';

type Item = { href: string; label: string };

export function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'بستن منو' : 'باز کردن منو'}
        onClick={() => setOpen((v) => !v)}
        className="grid size-10 place-items-center rounded-full border border-gold-300/20 text-gold-200"
      >
        <MenuIcon className="size-5" />
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="منوی موبایل"
          className="absolute inset-x-0 top-16 border-b border-gold-300/10 bg-ink-950/95 backdrop-blur-xl"
        >
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-gold-50/90 hover:bg-gold-300/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
