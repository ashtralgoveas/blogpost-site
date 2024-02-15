/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/ashtralgoveas/test-blogposts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
