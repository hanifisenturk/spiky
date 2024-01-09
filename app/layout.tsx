import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Providers from './store/providers';
import {Analytics} from '@vercel/analytics/react';
import dynamic from 'next/dynamic';

const Hotjar = dynamic(() => import('./components/hotjar'), {ssr: false});

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Spiky Quiz App',
  description: 'Spiky Quiz App PWA',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['spiky.ai', 'nextjs', 'nextjs13', 'next13', 'pwa'],
  themeColor: [{media: '(prefers-color-scheme: dark)', color: '#fff'}],
  authors: [{name: 'Mehmet Hanifi Senturk'}],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    {rel: 'apple-touch-icon', url: 'icons/icon-192x192.png'},
    {rel: 'icon', url: 'icons/icon-192x192.png'},
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
        <Hotjar />
      </body>
    </html>
  );
}
