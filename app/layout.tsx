import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Collabr - Community-Powered Web3 Social Platform',
  description: 'Earn rewards by growing your community in the decentralized social space',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {/* Gradient background effect */}
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 z-[-1]"></div>
        
        {/* Header with very obvious positioning */}
        <header className="absolute top-16 left-16 z-50">
          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-xl">
            <Link href="/" className="inline-block">
              <span className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Collabr
              </span>
            </Link>
          </div>
        </header>
        
        {children}
      </body>
    </html>
  );
}
