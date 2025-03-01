"use client"
import Link from 'next/link';
import TeamMemberCard from './TeamMemberCard';
import { useState, useRef } from 'react';
import Image from 'next/image';

// Define the TeamMember type
interface SocialLinks {
  twitter: string;
  linkedin?: string;
  github?: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLinks;
}

// Team member data
const teamMembers: TeamMember[] = [
  {
    name: 'Henry Yeung',
    role: 'Co-Founder',
    bio: 'NYU CS alum, run a YouTube channel with 15K subscribers and 4M total views.',
    image: '/henry.png',
    social: {
      twitter: 'https://twitter.com/alexj',
      linkedin: 'https://linkedin.com/in/alexj'
    }
  },
  {
    name: 'David Slakter',
    role: 'Co-Founder',
    bio: 'NYU CS alum, prev software engineer at Walmart Tech.',
    image: '/david.png',
    social: {
      twitter: 'https://twitter.com/sarahc',
      linkedin: 'https://linkedin.com/in/alexj'
    }
  }
];

export default function About() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const totalSlides = 6; // Total number of slides in the carousel
  
  const scrollToSlide = (slideIndex: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.querySelector('div')?.clientWidth || 0;
      const scrollPosition = slideIndex * (slideWidth + 24); // 24px for margins
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setActiveSlide(slideIndex);
    }
  };
  
  const scrollPrev = () => {
    const newIndex = Math.max(activeSlide - 1, 0);
    scrollToSlide(newIndex);
  };
  
  const scrollNext = () => {
    const newIndex = Math.min(activeSlide + 1, totalSlides - 1);
    scrollToSlide(newIndex);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Logo in top left corner */}
      <div className="absolute top-16 left-10 z-10">
        <Link href="/" className="flex items-center">
          <Image 
            src="/Collabr_Logo.png" 
            alt="Collabr Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Community Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Community: The Foundation of Success</h2>
            
            <div className="mb-12 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The most successful projects in history share one common element: a passionate, engaged community.
              </p>
            </div>
            
            {/* Community Examples Carousel */}
            <div className="relative mb-16 overflow-hidden">
              <div 
                ref={carouselRef}
                className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
              >
                <div className="min-w-[300px] w-80 snap-center mx-3 bg-white rounded-lg shadow-sm p-6 transform transition-transform hover:-translate-y-2 duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Minecraft</h3>
                  <p className="text-gray-600 mb-4">
                    From an indie game to a global phenomenon, Minecraft's success was driven by a passionate community of players, modders, and content creators who expanded its possibilities.
                  </p>
                </div>
                
                <div className="min-w-[300px] w-80 snap-center mx-3 bg-white rounded-lg shadow-sm p-6 transform transition-transform hover:-translate-y-2 duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Spotify Wrapped</h3>
                  <p className="text-gray-600 mb-4">
                    Spotify transformed music listening data into a cultural moment by creating shareable content that builds community among listeners and artists alike.
                  </p>
                </div>
                
                <div className="min-w-[300px] w-80 snap-center mx-3 bg-white rounded-lg shadow-sm p-6 transform transition-transform hover:-translate-y-2 duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">DeviantArt</h3>
                  <p className="text-gray-600 mb-4">
                    This art platform grew from a small community into a global creative hub by empowering artists to share, collaborate, and build audiences around their unique artistic visions.
                  </p>
                </div>

                <div className="min-w-[300px] w-80 snap-center mx-3 bg-white rounded-lg shadow-sm p-6 transform transition-transform hover:-translate-y-2 duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Wikipedia</h3>
                  <p className="text-gray-600 mb-4">
                    The world's largest encyclopedia thrives on contributions from a global community of volunteers who create, edit, and maintain its vast knowledge base.
                  </p>
                </div>

                <div className="min-w-[300px] w-80 snap-center mx-3 bg-white rounded-lg shadow-sm p-6 transform transition-transform hover:-translate-y-2 duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Peloton</h3>
                  <p className="text-gray-600 mb-4">
                    Transformed home fitness by building a community around shared experiences, leaderboards, and instructor relationships that keep users motivated and engaged.
                  </p>
                </div>

                <div className="min-w-[300px] w-80 snap-center mx-3 bg-white rounded-lg shadow-sm p-6 transform transition-transform hover:-translate-y-2 duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Duolingo</h3>
                  <p className="text-gray-600 mb-4">
                    Created a global language learning community through gamification, streaks, and friendly competition that keeps learners coming back day after day.
                  </p>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
              
              {/* Scroll indicators */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button 
                  onClick={scrollPrev}
                  className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button 
                  onClick={scrollNext}
                  className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r bg-gray-700 rounded-xl p-8 text-white shadow-lg">
              <div className="items-center">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold mb-4">Why Community Matters in Web3</h3>
                  <p className="mb-4">
                    In the Web3 ecosystem, communities aren't just supporters—they're co-owners, contributors, and decision-makers. The decentralized nature of Web3 means that projects succeed or fail based on their ability to build and nurture engaged communities.
                  </p>
                  <p>
                    Unlike traditional businesses, Web3 projects distribute value directly to community members through tokens, governance rights, and shared ownership. This creates powerful alignment between projects and their communities, but requires new tools and approaches to community building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Clean and focused */}
      <section className="mb-16 py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Mission</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                At Collabr, we&apos;re building a platform that empowers creators, artists, and influencers to grow their communities through incentivized participation. We believe that community members should be rewarded for their contributions, and that these rewards should be transparent, fair, and aligned with the values of Web3.
              </p>
              <p>
                Our platform enables community owners to create custom task lists and unique point systems that reflect their specific needs and goals. By completing tasks or converting platform tokens, community members earn points that can be redeemed for exclusive rewards.
              </p>
              <p>
                We&apos;re committed to building a decentralized ecosystem where communities can thrive, members are valued, and creators can focus on what they do best: creating amazing content and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW VISION SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    We envision a future where digital communities are more than just followers—they're active participants with real ownership and stake in the communities they help build.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary rounded-full text-black text-sm flex-shrink-0">✓</span>
                      <span>Community contributions are properly valued and rewarded</span>
                    </li>
                    <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary rounded-full text-black text-sm flex-shrink-0">✓</span>
                    <span>Engagement is driven by meaningful incentives, not just algorithms</span>
                    </li>
                    <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary rounded-full text-black text-sm flex-shrink-0">✓</span>
                    <span>Creators and community members share in the value they collectively create</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl transform md:rotate-2 transition-transform hover:rotate-0 duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg max-w-xs">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Community-Centric</h3>
                      <p className="text-gray-700">Building the future of engaged, incentivized communities in the Web3 era</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-0"></div>
                  <svg className="absolute bottom-0 left-0 w-full h-64 text-primary/10 z-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg transform rotate-12 transition-transform hover:rotate-0 duration-300">
                  Web3 Future
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Clean two-column layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">For Community Owners</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Launch your community with a custom point system</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Create task lists that align with your community growth goals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Design exclusive rewards that members can redeem with their points</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access analytics to understand community engagement and growth</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">For Community Members</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Join communities and view available tasks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Complete tasks to earn community-specific points</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Convert platform tokens (ERC-20) into community points</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Build reputation and status within communities you value</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Redeem points for exclusive rewards and experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section - Introducing $COLBR */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Introducing $COLBR Token</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The native utility token powering the Collabr ecosystem
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-3xl">
              <div className="flex items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Token Purpose</h3>
                  <p className="text-gray-700">
                    $COLBR tokens serve as the bridge between communities on our platform
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                The $COLBR token is designed to enable users to convert their tokens into community-specific points across any community on the platform. This creates a unified ecosystem where engagement in one community can translate to participation in others.
              </p>
              
              <div className="mt-8">
                <div className="bg-primary/5 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Community Point Conversion</h4>
                  <p className="text-gray-700">
                    Convert $COLBR tokens into points for any community on the platform to access exclusive rewards and experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Clean grid layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Our Team</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our team of passionate experts is dedicated to building the future of community engagement
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMemberCard 
                  key={index}
                  member={member}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for passionate individuals to join our team. If you&apos;re excited about Web3, community building, and creating innovative solutions, we&apos;d love to hear from you.
              </p>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                - founders@collabr.xyz -
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 