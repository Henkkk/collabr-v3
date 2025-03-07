'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // No need for cardWidth state since we're using percentage-based transforms
  
  const navigateToCard = (direction: 'prev' | 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Simply update the activeCard state based on direction
    if (direction === 'next' && activeCard < 2) {
      setActiveCard(activeCard + 1);
    } else if (direction === 'prev' && activeCard > 0) {
      setActiveCard(activeCard - 1);
    }
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };
  
  const goToCard = (index: number) => {
    if (isTransitioning || index === activeCard) return;
    
    setIsTransitioning(true);
    
    // Directly set the activeCard state to the desired index
    setActiveCard(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // You can replace this with your preferred method of sending notifications
      // This example uses a simple fetch to a hypothetical API endpoint
      const response = await fetch('/api/notify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      setSubmitStatus('success');
      setEmail(''); // Clear the input on success
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Card data for easier management
  const cards = [
    {
      title: "Music Club | Fernando Martinez",
      members: "1,337 members",
      iconSrc: "/singer-icon.png",
      iconAlt: "Community Icon",
      gradientClass: "from-primary/10 to-blue-100",
      accentColor: "text-primary",
      bgColor: "bg-blue-200",
      tasks: [
        { task: "Like a social media post", reward: "+5 points" },
        { task: "Host a community meetup", reward: "+20 points" },
        { task: "Mint an NFT", reward: "+50 points" }
      ],
      rewards: [
        { 
          name: "Limited Edition Merch", 
          imageSrc: "/pudgy-merch.png",
        },
        { 
          name: "Access to private events", 
          imageSrc: "/private-event.png",
        }
      ]
    },
    {
      title: "Artist Space | Antoni Shkraba",
      members: "711 members",
      iconSrc: "/artist-icon.png",
      iconAlt: "Community Icon",
      gradientClass: "from-primary/10 to-blue-100",
      accentColor: "text-primary",
      bgColor: "bg-blue-200",
      tasks: [
        { task: "Share artwork on Instagram", reward: "+25 points" },
        { task: "Attend virtual art workshop", reward: "+100 points" },
        { task: "Submit fan art for review", reward: "+250 points" }
      ],
      rewards: [
        { 
          name: "Exclusive Art Tutorial", 
          imageSrc: "/limited-nft.png",
        },
        { 
          name: "Digital Art Critique", 
          imageSrc: "/private-chat.png",
        }
      ]
    },
    {
      title: "Axie Infinity Enthusiast | Tima Miroshnichenko",
      members: "918 members",
      iconSrc: "/gamer-icon.png",
      iconAlt: "Community Icon",
      gradientClass: "from-primary/10 to-blue-100",
      accentColor: "text-primary",
      bgColor: "bg-blue-200",
      tasks: [
        { task: "Join weekly game tournament", reward: "+50 gamer tokens" },
        { task: "Stream gameplay on Twitch", reward: "+150 gamer tokens" },
        { task: "Beta test upcoming game", reward: "+300 gamer tokens" }
      ],
      rewards: [
        { 
          name: "Gaming Peripherals", 
          imageSrc: "/pudgy-merch.png",
        },
        { 
          name: "Early Game Access", 
          imageSrc: "/pudgy-merch.png",
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with reduced height and top padding */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white md:leading-tight">
                Incentivize your fans to drive community growth
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white">
                Transform community engagement into rewarding and decentralized experiences
              </p>
              
              {/* Enhanced waitlist section with form submission */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Member Application</h3>
                <p className="text-white/80 mb-4">Our team will reach out to you.</p>
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input 
                      type="email" 
                      placeholder="Enter your email..." 
                      className="w-full pl-12 pr-24 py-4 rounded-full border-2 border-white/30 focus:border-primary focus:ring-2 focus:ring-primary text-gray-900 font-medium shadow-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      className={`absolute right-1 top-1 bottom-1 px-5 bg-primary text-white rounded-full transition-colors font-semibold ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
                
                {/* Status message */}
                {submitStatus === 'success' && (
                  <p className="mt-2 text-green-400 text-sm">Thank you! We'll be in touch soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-2 text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}
              </div>
              
              <div className="mt-8 flex flex-col gap-4">
                <span className="text-white/80">Connect with us:</span>
                <div className="flex items-center gap-4">
                  {/* Social icons with updated colors */}
                  <a href="https://x.com/collabrxyz" className="text-white hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://discord.gg/gf2Q8BZQC8" className="text-white hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                    </svg>
                  </a>
                </div>
                <a href="https://t.me/wfyeung" className="text-white hover:text-primary transition-colors flex items-center gap-2 mt-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span className="font-medium">DM founders</span>
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                {/* Card carousel container */}
                <div className="relative">
                  {/* Carousel viewport - shows exactly one card at a time */}
                  <div 
                    className="overflow-hidden rounded-xl" 
                    ref={carouselRef}
                    style={{ width: '100%' }}
                  >
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ 
                        width: `${cards.length * 100}%`, 
                        transform: `translateX(-${activeCard * (100 / cards.length)}%)` 
                      }}
                    >
                      {cards.map((card, index) => (
                        <div 
                          key={index} 
                          className={`flex-shrink-0 transition-opacity duration-500 ${
                            index === activeCard ? 'opacity-100' : 'opacity-50'
                          }`}
                          style={{ width: `${100 / cards.length}%` }}
                        >
                          <div className="crypto-card p-6 md:p-8 mx-auto max-w-lg transform transition-transform duration-500 ease-out scale-95 hover:scale-100 h-[500px] flex flex-col justify-between">
                            <div className={`rounded-xl p-2 md:p-2 mb-4 flex-grow`}>
                              <div className="flex items-center mb-4">
                                <div className="mr-4 relative w-[72px] h-[72px] overflow-hidden rounded-full">
                                  <Image 
                                    src={card.iconSrc} 
                                    alt={card.iconAlt} 
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h3 className="font-bold text-gray-900">{card.title}</h3>
                                  <p className="text-gray-600 text-sm">{card.members}</p>
                                </div>
                              </div>
                              <div className="space-y-7">
                                {card.tasks.map((task, taskIndex) => (
                                  <div key={taskIndex} className="flex items-center">
                                    <div className={`w-8 h-8 ${card.bgColor} rounded-full flex items-center justify-center ${card.accentColor}`}>✓</div>
                                    <div className="ml-3 text-gray-700">{task.task}</div>
                                    <div className={`ml-auto ${card.accentColor} text-gray-700`}>{task.reward}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                              <h4 className="font-medium text-gray-900 mb-4">
                                {index === 0 ? "Redeem Rewards" : 
                                 index === 1 ? "Member Benefits" : "Impact Rewards"}
                              </h4>
                              <div className="grid grid-cols-2 gap-3">
                                {card.rewards.map((reward, rewardIndex) => (
                                  <div key={rewardIndex} className="flex items-center justify-between p-3 border-gray-100 rounded-lg">
                                    <div className="flex items-center">
                                      <div className={`w-6 h-6 ${card.bgColor} rounded-full flex items-center justify-center mr-2 ${card.accentColor}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                                          <path d="M12.293 7.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                                        </svg>
                                      </div>
                                      <span className="text-sm text-gray-700 font-medium">{reward.name}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation buttons - positioned at the bottom */}
                  <div className="absolute -bottom-16 left-0 right-0 flex justify-center space-x-4">
                    <button 
                      className={`flex items-center justify-center w-32 px-4 py-2 btn-secondary rounded-full text-primary shadow-md transition-all ${
                        activeCard === 0 || isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/5'
                      }`}
                      onClick={() => navigateToCard('prev')}
                      aria-label="Previous card"
                      disabled={activeCard === 0 || isTransitioning}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>Previous</span>
                    </button>
                    
                    <button 
                      className={`flex items-center justify-center w-32 px-4 py-2 btn-secondary rounded-full text-primary shadow-md transition-all ${
                        activeCard === cards.length - 1 || isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/5'
                      }`}
                      onClick={() => navigateToCard('next')}
                      aria-label="Next card"
                      disabled={activeCard === cards.length - 1 || isTransitioning}
                    >
                      <span>Next</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
