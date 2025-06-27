/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = async () => {
  const netlifyPlugin = await import('@netlify/plugin-nextjs');
  return netlifyPlugin.default(nextConfig);
};
