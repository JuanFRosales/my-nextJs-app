/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      remotePatterns: [
        {
          hostname: 'localhost',
        },
      ],
    },
  };

export default nextConfig;
