/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // <--- Fixes the GitHub "out folder not found" error
  images: { unoptimized: true }, // <--- Prevents images from breaking in the build
  webpack: (config) => {
    config.watchOptions = {
      poll: 500,               // Keeps your Albacete live-refresh snappy
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;