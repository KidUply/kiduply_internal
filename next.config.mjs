/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // MUHIM: out papkasini yaratish uchun
  images: {
    unoptimized: true, // Mobil ilovada rasmlar chiqishi uchun
  },
};

export default nextConfig;

