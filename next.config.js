/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', "cdn.dribbble.com", "www.123freevectors.com"],
  },
  experimental: {
    esmExternals: true,
  },
  plugins: [require('tailwindcss-animated')],
};

module.exports = nextConfig;
