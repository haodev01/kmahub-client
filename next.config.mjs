/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  images: {
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

export default withPlaiceholder(nextConfig);
