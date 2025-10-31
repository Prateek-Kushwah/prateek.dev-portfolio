/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add the domains where your images are hosted
  },
}

module.exports = nextConfig