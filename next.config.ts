import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/BuyAbdra',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
