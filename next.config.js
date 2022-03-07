/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  images: {
    domains: ["sbooks.net"],
    disableStaticImages: true,
  },
};

module.exports = withOptimizedImages({
  ...nextConfig,
});
