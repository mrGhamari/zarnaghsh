import type { NextConfig } from 'next';

// On GitHub Pages the site lives under /<repo>. With a custom domain set
// NEXT_PUBLIC_BASE_PATH to an empty string.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
