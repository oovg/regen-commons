/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // i18n is not compatible with output: 'export'
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

module.exports = nextConfig;
