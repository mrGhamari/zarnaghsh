import { useId, type SVGProps } from 'react';

type SealProps = Omit<SVGProps<SVGSVGElement>, 'title'> & {
  title?: string;
  /** Hide the rotating outer caption for very small renders (favicon-like). */
  compact?: boolean;
};

const POINTS = 28;

// Scalloped rosette edge, like a wax/foil seal.
function rosettePath(cx: number, cy: number, outer: number, inner: number) {
  const step = (Math.PI * 2) / POINTS;
  let d = '';
  for (let i = 0; i < POINTS; i++) {
    const a0 = i * step - Math.PI / 2;
    const a1 = a0 + step / 2;
    const a2 = a0 + step;
    const p0 = [cx + outer * Math.cos(a0), cy + outer * Math.sin(a0)];
    const c = [cx + inner * Math.cos(a1), cy + inner * Math.sin(a1)];
    const p2 = [cx + outer * Math.cos(a2), cy + outer * Math.sin(a2)];
    if (i === 0) d += `M${p0[0].toFixed(2)} ${p0[1].toFixed(2)}`;
    d += ` Q${c[0].toFixed(2)} ${c[1].toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return `${d}Z`;
}

export function Seal({ title = 'بج طلایی زرنقش', compact = false, ...svgProps }: SealProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const foil = `foil-${uid}`;
  const foilDeep = `foil-deep-${uid}`;
  const ring = `ring-${uid}`;
  const arc = `arc-${uid}`;

  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={title} {...svgProps}>
      <defs>
        <linearGradient id={foil} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8a6417" />
          <stop offset="0.28" stopColor="#f3d27a" />
          <stop offset="0.45" stopColor="#fff6d2" />
          <stop offset="0.62" stopColor="#d4a334" />
          <stop offset="1" stopColor="#7a5612" />
        </linearGradient>
        <linearGradient id={foilDeep} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5e420c" />
          <stop offset="0.5" stopColor="#b88a26" />
          <stop offset="1" stopColor="#4a340a" />
        </linearGradient>
        <radialGradient id={ring} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#2a2216" />
          <stop offset="1" stopColor="#0d0a06" />
        </radialGradient>
        <path id={arc} d="M100 100 m-63 0 a63 63 0 1 1 126 0 a63 63 0 1 1 -126 0" />
      </defs>

      <path d={rosettePath(100, 100, 98, 90)} fill={`url(#${foil})`} />
      <circle cx="100" cy="100" r="84" fill={`url(#${foilDeep})`} />
      <circle cx="100" cy="100" r="80" fill={`url(#${ring})`} />
      <circle cx="100" cy="100" r="76" fill="none" stroke={`url(#${foil})`} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="50" fill="none" stroke={`url(#${foil})`} strokeWidth="1" opacity="0.8" />

      {!compact && (
        <text
          fill={`url(#${foil})`}
          fontSize="10.5"
          fontWeight="700"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
          direction="ltr"
        >
          <textPath href={`#${arc}`} startOffset="0" textLength="390" lengthAdjust="spacing">
            ZARNAGHSH • GOLD FOIL STAMPING • PREMIUM PACKAGING •
          </textPath>
        </text>
      )}

      <text
        x="100"
        y="106"
        textAnchor="middle"
        fill={`url(#${foil})`}
        fontSize="30"
        fontWeight="900"
        fontFamily="var(--font-vazirmatn), sans-serif"
      >
        زرنقش
      </text>
      <path d="M78 120 h44" stroke={`url(#${foil})`} strokeWidth="1.2" />
      <text
        x="100"
        y="134"
        textAnchor="middle"
        fill={`url(#${foil})`}
        fontSize="9"
        fontWeight="600"
        fontFamily="var(--font-vazirmatn), sans-serif"
      >
        اصالت طلایی
      </text>
      <path
        d="M100 60 l3.2 6.5 7.1 1-5.15 5 1.2 7.1-6.35-3.35-6.35 3.35 1.2-7.1-5.15-5 7.1-1z"
        fill={`url(#${foil})`}
      />
    </svg>
  );
}
