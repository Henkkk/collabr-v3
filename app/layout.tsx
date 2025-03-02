import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import HeaderWrapper from './components/HeaderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Collabr | Grow, Engage, Earn',
  description: 'Incentivize your fans to drive community growth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-white`}>
        {/* Marquee Section - Above everything else */}
        <section className="bg-white py-2 overflow-hidden border-b border-gray-200">
          <div className="marquee-container relative">
            <div className="marquee-content flex items-center space-x-8 animate-marquee">
              {Array(3).fill(0).map((_, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="flex items-center">
                  <span className="text-gray-800 font-medium text-sm md:text-base">Stay tuned for our official launch</span>
                    <span className="mx-4 text-gray-400">•</span>
                    <span className="text-gray-800 font-medium text-sm md:text-base">Apply to create your community</span>
                    <span className="mx-4 text-gray-400">•</span>
                    <span className="text-gray-800 font-medium text-sm md:text-base">Be the first to experience our platform</span>
                    <span className="mx-4 text-gray-400">•</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <div className="blockchain-glow"></div>
        
        <HeaderWrapper>{children}</HeaderWrapper>
      </body>
    </html>
  );
}

// This needs to be a separate file as a Client Component
