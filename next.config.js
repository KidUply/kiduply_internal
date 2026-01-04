/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build vaqtida TypeScript xatolarini o'tkazib yuborish
  typescript: {
    ignoreBuildErrors: true,
  },
  // Build vaqtida ESLint xatolarini o'tkazib yuborish
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
