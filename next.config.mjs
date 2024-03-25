/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: './build',
  output: 'export',
  trailingSlash: true,
  basePath: '/build'
};

export default nextConfig;
