/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  images: {
    domains: ["sbooks.net"],
  },
};

module.exports = withOptimizedImages({
    ... nextConfig,
});
