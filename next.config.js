// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname, // force Next.js to use the project folder as root
  },
};

module.exports = nextConfig;
