import type { Work } from '@/lib/content';
import { Seal } from './seal';

const palettes = {
  kraft: { top: '#dcb57f', left: '#c49a63', right: '#a97c46', print: '#6b4a22' },
  black: { top: '#2e2a25', left: '#1b1916', right: '#100f0d', print: '#c9a24a' },
  crimson: { top: '#a8232f', left: '#8a1823', right: '#6a1019', print: '#f0c96a' },
  ivory: { top: '#fbf5e8', left: '#f1e6cf', right: '#e2d3b4', print: '#a97c46' },
  navy: { top: '#23365e', left: '#1a2a4b', right: '#121e37', print: '#e8c25a' },
  emerald: { top: '#1f5a46', left: '#174a39', right: '#0f3528', print: '#e8c25a' },
} as const;

type Variant = keyof typeof palettes;

function Sweep({ id, r }: { id: string; r: number }) {
  return (
    <g clipPath={`url(#${id})`} aria-hidden="true">
      <rect
        x={-r * 1.3}
        y={-r * 1.4}
        width={r * 0.7}
        height={r * 2.8}
        fill="white"
        opacity="0.45"
        className="animate-sweep"
        style={{ transformBox: 'fill-box', mixBlendMode: 'overlay' }}
      />
    </g>
  );
}

export function BoxArt({ variant = 'kraft', className, sweepId }: { variant?: Variant; className?: string; sweepId: string }) {
  const c = palettes[variant];
  return (
    <svg viewBox="0 0 520 460" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`${sweepId}-shadow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000" stopOpacity="0.55" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${sweepId}-shade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#000" stopOpacity="0.18" />
        </linearGradient>
        <clipPath id={sweepId}>
          <circle cx="0" cy="0" r="56" />
        </clipPath>
      </defs>

      <ellipse cx="260" cy="418" rx="230" ry="30" fill={`url(#${sweepId}-shadow)`} />

      {/* faces */}
      <polygon points="60,130 260,220 260,410 60,320" fill={c.left} />
      <polygon points="260,220 460,130 460,320 260,410" fill={c.right} />
      <polygon points="260,40 460,130 260,220 60,130" fill={c.top} />
      <polygon points="60,130 260,220 260,410 60,320" fill={`url(#${sweepId}-shade)`} />
      <polygon points="260,220 460,130 460,320 260,410" fill={`url(#${sweepId}-shade)`} />

      {/* flap seam + tape */}
      <line x1="160" y1="85" x2="360" y2="175" stroke="#000" strokeOpacity="0.18" strokeWidth="2" />
      <polygon points="176.4,77.6 143.6,92.4 343.6,182.4 376.4,167.6" fill="#fff" fillOpacity="0.14" />
      <polygon points="376.4,167.6 343.6,182.4 343.6,242.4 376.4,227.6" fill="#fff" fillOpacity="0.1" />

      {/* edges */}
      <path d="M60 130 L260 220 L460 130 M260 220 V410" stroke="#fff" strokeOpacity="0.16" strokeWidth="1.5" fill="none" />

      {/* left face: the gold seal, skewed onto the face plane */}
      <g transform="translate(160 272) matrix(1 0.45 0 1 0 0)">
        <Seal x={-58} y={-58} width={116} height={116} />
        <Sweep id={sweepId} r={56} />
      </g>

      {/* right face print */}
      <g transform="translate(360 268) matrix(1 -0.45 0 1 0 0)" fill="none" stroke={c.print} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        <path d="M-26 6 v-36 m-10 12 l10 -12 l10 12" />
        <path d="M2 6 v-36 m-10 12 l10 -12 l10 12" />
        <path d="M-44 22 h70" strokeWidth="2" />
        <text x="-9" y="48" textAnchor="middle" fill={c.print} stroke="none" fontSize="15" fontWeight="800" fontFamily="var(--font-vazirmatn), sans-serif">
          زرنقش
        </text>
      </g>
    </svg>
  );
}

function CardArt({ sweepId, className }: { sweepId: string; className?: string }) {
  const c = palettes.ivory;
  return (
    <svg viewBox="0 0 520 460" className={className} aria-hidden="true">
      <defs>
        <clipPath id={sweepId}>
          <circle cx="0" cy="0" r="56" />
        </clipPath>
        <linearGradient id={`${sweepId}-foil`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8a6417" />
          <stop offset="0.45" stopColor="#fff2c2" />
          <stop offset="1" stopColor="#a87b1f" />
        </linearGradient>
      </defs>
      <ellipse cx="260" cy="400" rx="200" ry="22" fill="#000" opacity="0.35" />
      <g transform="rotate(-7 260 230)">
        <rect x="120" y="70" width="280" height="320" rx="10" fill="#d9c9a6" transform="translate(18 10)" />
        <rect x="120" y="70" width="280" height="320" rx="10" fill={c.top} />
        <rect x="138" y="88" width="244" height="284" rx="6" fill="none" stroke={`url(#${sweepId}-foil)`} strokeWidth="2.5" />
        <rect x="146" y="96" width="228" height="268" rx="4" fill="none" stroke={`url(#${sweepId}-foil)`} strokeWidth="1" />
        <g transform="translate(260 185)">
          <Seal x={-56} y={-56} width={112} height={112} />
          <Sweep id={sweepId} r={56} />
        </g>
        <rect x="190" y="275" width="140" height="8" rx="4" fill={`url(#${sweepId}-foil)`} />
        <rect x="210" y="295" width="100" height="6" rx="3" fill={c.print} opacity="0.35" />
        <rect x="225" y="312" width="70" height="6" rx="3" fill={c.print} opacity="0.25" />
      </g>
    </svg>
  );
}

function BagArt({ sweepId, className }: { sweepId: string; className?: string }) {
  const c = palettes.navy;
  return (
    <svg viewBox="0 0 520 460" className={className} aria-hidden="true">
      <defs>
        <clipPath id={sweepId}>
          <circle cx="0" cy="0" r="56" />
        </clipPath>
      </defs>
      <ellipse cx="260" cy="418" rx="190" ry="24" fill="#000" opacity="0.4" />
      <path d="M205 120 C205 50 315 50 315 120" fill="none" stroke="#c8a44c" strokeWidth="7" strokeLinecap="round" />
      <path d="M170 120 L350 120 L380 410 L140 410 Z" fill={c.left} />
      <path d="M350 120 L392 140 L408 395 L380 410 Z" fill={c.right} />
      <path d="M170 120 L350 120 L340 150 L180 150 Z" fill="#000" opacity="0.15" />
      <circle cx="205" cy="138" r="5" fill="#0b1426" />
      <circle cx="315" cy="138" r="5" fill="#0b1426" />
      <g transform="translate(262 265)">
        <Seal x={-62} y={-62} width={124} height={124} />
        <Sweep id={sweepId} r={60} />
      </g>
      <text x="262" y="375" textAnchor="middle" fill={c.print} fontSize="18" fontWeight="800" fontFamily="var(--font-vazirmatn), sans-serif">
        زرنقش
      </text>
    </svg>
  );
}

function JarArt({ sweepId, className }: { sweepId: string; className?: string }) {
  const c = palettes.emerald;
  return (
    <svg viewBox="0 0 520 460" className={className} aria-hidden="true">
      <defs>
        <clipPath id={sweepId}>
          <circle cx="0" cy="0" r="50" />
        </clipPath>
        <linearGradient id={`${sweepId}-honey`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b86f0e" />
          <stop offset="0.4" stopColor="#f2b134" />
          <stop offset="0.7" stopColor="#e09a1d" />
          <stop offset="1" stopColor="#9a5a09" />
        </linearGradient>
        <linearGradient id={`${sweepId}-lid`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7a5612" />
          <stop offset="0.45" stopColor="#f3d27a" />
          <stop offset="1" stopColor="#7a5612" />
        </linearGradient>
      </defs>
      <ellipse cx="260" cy="418" rx="170" ry="22" fill="#000" opacity="0.4" />
      <rect x="175" y="62" width="170" height="46" rx="10" fill={`url(#${sweepId}-lid)`} />
      <path d="M160 120 Q160 108 175 108 H345 Q360 108 360 120 L372 160 V380 Q372 410 340 410 H180 Q148 410 148 380 V160 Z" fill={`url(#${sweepId}-honey)`} />
      <path d="M170 140 V390" stroke="#fff" strokeOpacity="0.35" strokeWidth="10" strokeLinecap="round" />
      <rect x="148" y="185" width="224" height="170" fill={c.left} />
      <rect x="148" y="193" width="224" height="2" fill="#e8c25a" opacity="0.8" />
      <rect x="148" y="345" width="224" height="2" fill="#e8c25a" opacity="0.8" />
      <g transform="translate(260 270)">
        <Seal x={-52} y={-52} width={104} height={104} />
        <Sweep id={sweepId} r={50} />
      </g>
    </svg>
  );
}

export function WorkArt({ work, id, className }: { work: Work; id: string; className?: string }) {
  if (work.kind === 'card') return <CardArt sweepId={id} className={className} />;
  if (work.kind === 'bag') return <BagArt sweepId={id} className={className} />;
  if (work.kind === 'jar') return <JarArt sweepId={id} className={className} />;
  return <BoxArt sweepId={id} variant={work.variant} className={className} />;
}
