/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
// https://api.abcz.workers.dev/api/fitlog
images: {
    remotePatterns: [
      {
        protocol: 'https',
       hostname: 'img.magnific.com',
        
      },
    ],
  },



};

export default nextConfig;
