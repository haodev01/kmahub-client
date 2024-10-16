/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'files.fullstack.edu.vn',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
