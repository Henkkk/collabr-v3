import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import HeaderWrapper from '../components/HeaderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'About Collabr - Community Growth Platform',
  description: 'Learn about our mission to incentivize community growth',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderWrapper />
      <main>{children}</main>
    </div>
  );
} 