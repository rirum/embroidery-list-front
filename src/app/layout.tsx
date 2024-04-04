import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
