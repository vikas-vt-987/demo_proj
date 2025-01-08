/** @type {import('next').NextConfig} */
// import Speakers from './pages/Speakers'
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '3000',
        pathname: '/pages/Speakers',
      },
    ],
  },
}


module.exports = nextConfig
