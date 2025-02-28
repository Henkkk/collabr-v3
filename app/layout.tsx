import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

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
      <body className={`${inter.className} bg-gray-50 text-white`}>
        <div className="blockchain-glow"></div>
        {/* Header */}
        <header className="md:px-16 lg:px-24">
          <div className="px-4 py-4 flex items-center">
            <Link href="/" className="inline-flex items-center">
              <Image 
                src="/Collabr_Logo.png" 
                alt="Collabr Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-4xl font-bold text-white">
                Collabr
              </span>
            </Link>
            
            <nav className="ml-8 flex items-center">
              <Link href="/about" className="text-white hover:text-primary font-medium transition-colors">
                About
              </Link>
            </nav>
            
            {/* Mobile menu button - moved to right side */}
            <div className="md:hidden ml-auto">
              <button className="text-white hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        
        {children}
      </body>
    </html>
  );
}
