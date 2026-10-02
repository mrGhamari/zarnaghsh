import type { SVGProps } from 'react';
import type { Service } from '@/lib/content';

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
});

const paths: Record<Service['icon'], React.ReactNode> = {
  carton: (
    <>
      <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9" />
      <path d="m7.5 5.25 9 4.5" />
    </>
  ),
  box: (
    <>
      <rect x="3" y="8" width="18" height="13" rx="1.5" />
      <path d="M2 8h20V5.5A1.5 1.5 0 0 0 20.5 4h-17A1.5 1.5 0 0 0 2 5.5z" />
      <path d="M12 4v17M9 4c0 2 1.5 4 3 4s3-2 3-4" />
    </>
  ),
  seal: (
    <>
      <circle cx="12" cy="10" r="6.5" />
      <circle cx="12" cy="10" r="3.5" />
      <path d="m8.5 15.5-1.5 6 5-2.5 5 2.5-1.5-6" />
    </>
  ),
  label: (
    <>
      <path d="M3 12V4.5A1.5 1.5 0 0 1 4.5 3H12l9 9-9 9z" />
      <circle cx="8" cy="8" r="1.6" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M6 10h6M6 14h9" />
      <circle cx="17" cy="10" r="1.6" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 13H6z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  emboss: (
    <>
      <path d="M3 17h18" />
      <path d="M5 17c1.5-6 4-9 7-9s5.5 3 7 9" />
      <path d="M12 3v2M6.3 5.3l1.4 1.4M17.7 5.3l-1.4 1.4" />
    </>
  ),
  plate: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 15.5 10 9l2.5 5 1.5-2.5 3 4" />
      <path d="M7 17.5h10" />
    </>
  ),
};

export function ServiceIcon({ name, ...props }: IconProps & { name: Service['icon'] }) {
  return <svg {...base(props)}>{paths[name]}</svg>;
}

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 7.5 7.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5.5a2 2 0 0 1 2-2" />
  </svg>
);

export const WhatsAppIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.5 4.5 0 0 1-2.2-2.2l.8-1-1-2z" />
  </svg>
);

export const TelegramIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 4 3 11l6.5 2.5L18 7l-6.5 7.5L17 20z" />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </svg>
);

export const PinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const ChevronIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const ArrowIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M19 12H5m6-6-6 6 6 6" />
  </svg>
);
