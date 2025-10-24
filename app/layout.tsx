import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Generative AI Entry Roadmap',
  description:
    'A structured guide to help newcomers focus on the most important skills, tools, and practices in generative AI without diving into model training.',
  openGraph: {
    title: 'Generative AI Entry Roadmap',
    description:
      'A structured guide to help newcomers focus on the most important skills, tools, and practices in generative AI without diving into model training.',
    url: 'https://agentic-98834f34.vercel.app',
    siteName: 'Generative AI Entry Roadmap',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative AI Entry Roadmap',
    description:
      'A structured guide to help newcomers focus on the most important skills, tools, and practices in generative AI without diving into model training.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
