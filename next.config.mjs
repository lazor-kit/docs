import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/v1-to-v2', destination: '/networks', permanent: true },
      { source: '/web3js-v2/:path*', destination: '/web3js-v1', permanent: true },
    ];
  },
};

export default withMDX(config);
