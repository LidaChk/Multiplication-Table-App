/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: './build',
  output: 'export',
  basePath: '/Multiplication-Table-App',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
