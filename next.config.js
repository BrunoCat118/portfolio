const { withNetlify } = require('@netlify/plugin-nextjs');

module.exports = withNetlify({
  // Your existing Next.js config
  reactStrictMode: true,
});
