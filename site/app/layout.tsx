import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Padalustro Games — Independent Game Studio',
  description: 'Experienced game development team from Paraguay creating distinctive characters, satisfying mechanics and memorable games.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Padalustro Games — Play beyond the obvious.',
    description: 'Experienced game development team from Paraguay creating distinctive characters and memorable games.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Padalustro Games — Games with personality.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padalustro Games — Play beyond the obvious.',
    description: 'Experienced game development team from Paraguay creating distinctive characters and memorable games.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
