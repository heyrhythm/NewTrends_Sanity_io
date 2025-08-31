import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: false, // disable lightningcss, fallback to postcss
  },
  images:{
    domains:['cdn.sanity.io']
  }
};

export default nextConfig;
