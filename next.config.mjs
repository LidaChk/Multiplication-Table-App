/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  distDir: './build',
  output: process.env.NODE_ENV === 'development'? 'standalone' : 'export',
  basePath: '/Multiplication-Table-App',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
