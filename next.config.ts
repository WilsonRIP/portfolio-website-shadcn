import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Suppress the legacyBehavior warning in NavigationMenu
  // We need legacyBehavior to avoid nested <a> tags in NavigationMenuLink
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
