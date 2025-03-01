'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderWrapperProps {
  children?: React.ReactNode;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  
  return (
    <>
      {/* Only show header if not on the about page */}
      {!isAboutPage && (
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
      )}
      
      {children}

    </>
  );
};

export default HeaderWrapper; 