/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.dribbble.com",
      "www.123freevectors.com",
    ],
  },
};

module.exports = nextConfig;
