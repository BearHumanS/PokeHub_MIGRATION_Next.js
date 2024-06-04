/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        // 필요한 경우 port와 pathname을 추가할 수 있습니다.
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_AUTH_DOMAIN: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_STORAGE_BUCKET: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    NEXT_PUBLIC_MESSAGING_SENDER_ID:
      process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    NEXT_PUBLIC_MEASUREMENT_ID: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    NEXT_PUBLIC_ADMIN_UID_1: process.env.NEXT_PUBLIC_ADMIN_UID_1,
    NEXT_PUBLIC_ADMIN_UID_2: process.env.NEXT_PUBLIC_ADMIN_UID_2,
    NEXT_PUBLIC_ADMIN_UID_3: process.env.NEXT_PUBLIC_ADMIN_UID_3,
  },
};

export default withPWA(nextConfig);
