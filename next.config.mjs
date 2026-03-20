import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
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
