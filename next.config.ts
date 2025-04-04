import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'res.cloudinary.com',
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
