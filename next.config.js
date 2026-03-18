/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // ✅ Static export (Hostinger shared ke liye)
  output: 'export',

  images: {
    
    unoptimized: true, 
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;