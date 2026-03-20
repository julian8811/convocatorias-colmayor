/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/convocatorias-colmayor' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/convocatorias-colmayor/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  logging: {
    browserToTerminal: true,
  },
}

export default nextConfig
