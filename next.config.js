/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/contact",
        destination: "http://127.0.0.1:3001/api/contact",
      },
    ];
  },
};

module.exports = nextConfig;