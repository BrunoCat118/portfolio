/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = async () => {
  const { withNetlify } = await import('@netlify/plugin-nextjs');
  return withNetlify(nextConfig);
};
