import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

const SITE_URL = 'https://docs.lazorkit.com';

export const metadata: Metadata = {
  title: {
    template: '%s | LazorKit',
    default: 'LazorKit Documentation',
  },
  description: 'LazorKit is an execution layer for Solana — passkey wallets, session keys, gas sponsorship, and programmable on-chain permissions.',
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: '/brand/mark-light.svg', type: 'image/svg+xml' },
      { url: '/brand/mark-dark.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/brand/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'LazorKit',
    title: 'LazorKit Documentation',
    description: 'LazorKit is an execution layer for Solana — passkey wallets, session keys, gas sponsorship, and programmable on-chain permissions.',
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LazorKit Documentation',
    description: 'LazorKit is an execution layer for Solana — passkey wallets, session keys, gas sponsorship, and programmable on-chain permissions.',
  },
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
