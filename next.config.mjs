/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'files.fullstack.edu.vn',
      },
    ],
  },
};

export default nextConfig;
