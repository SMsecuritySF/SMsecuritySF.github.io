/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment the following lines when deploying to GitHub Pages under a subpath
  // For example: https://username.github.io/repository-name/
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name/',
  trailingSlash: true,
}

module.exports = nextConfig
