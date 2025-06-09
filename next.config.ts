import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint checks during `next build`
  },
  // ...any other config options
};

export default nextConfig;
