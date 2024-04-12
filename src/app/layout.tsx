import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Passion_One, Erica_One, Fredoka } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const ericaOne = Erica_One({ subsets: ['latin'], weight: '400' });
export const passionOne = Passion_One({
  subsets: ['latin'],
  weight: '400',
});

export const fredoka = Fredoka({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
  title: 'Embroidery List',
  description: 'App to list all your inventory floss',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={passionOne.className}>{children}</body>
    </html>
  );
}
