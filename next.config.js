/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['*'],
    dangerouslyAllowSVG: true,
  },
  // Sadece gerekli yapılandırmaları tut
  swcMinify: true,
  poweredByHeader: false,
}

module.exports = nextConfig
