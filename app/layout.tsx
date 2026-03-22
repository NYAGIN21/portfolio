import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'NYAGIN21 | Backend Developer',
    template: '%s | NYAGIN21',
  },
  description:
    "Backend developer for Rust and Go.",
  keywords: [
    'nyagin21',
    'alexander nyagin',
    'backend developer',
    'rust developer',
    'go developer',
    'portfolio',
  ],
  openGraph: {
    title: "NYAGIN21 | Backend",
    description:
      "Rust & Go developer.",
    images: [''],
    url: 'https://nyagin.vercel.app/',
    type: 'website',
    locale: 'ru_RU',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
