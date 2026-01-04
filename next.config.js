/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static exportni yoqadi (out papkasi uchun)
  typescript: {
    ignoreBuildErrors: true, // TS xatolarini o'tkazib yuboradi
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint xatolarini o'tkazib yuboradi
  },
  images: {
    unoptimized: true, // Static rejimda rasmlarni optimizatsiya qilishni o'chiradi
  },
};

export default nextConfig;

