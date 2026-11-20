/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Best for EC2 / simple Node deploy
  images: {
    unoptimized: true, // Avoid image optimization complexity on basic EC2
  },
}

module.exports = nextConfig
