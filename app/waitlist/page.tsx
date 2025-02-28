'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    communityType: '',
    communitySize: '',
    web3Experience: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend or a service like Airtable
    // For now, we&apos;ll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        communityType: '',
        communitySize: '',
        web3Experience: '',
      });
    }, 1500);
  };
  
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-primary hover:text-primary-dark mb-8 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">You&apos;re on the list!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in Collabr. We&apos;ll keep you updated on our progress and let you know when we&apos;re ready to launch.
                </p>
                <Link href="/" className="btn-primary inline-block">
                  Return to Home
                </Link>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2 text-gray-900">Join the Waitlist</h1>
                <p className="text-gray-600 mb-8">
                  Be among the first to experience Collabr and transform how you engage with your community.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="communityType" className="block text-sm font-medium text-gray-700 mb-1">
                        Community Type
                      </label>
                      <select
                        id="communityType"
                        name="communityType"
                        value={formData.communityType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select community type</option>
                        <option value="creator">Creator/Artist</option>
                        <option value="brand">Brand</option>
                        <option value="dao">DAO</option>
                        <option value="nft">NFT Project</option>
                        <option value="defi">DeFi Protocol</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="communitySize" className="block text-sm font-medium text-gray-700 mb-1">
                        Community Size
                      </label>
                      <select
                        id="communitySize"
                        name="communitySize"
                        value={formData.communitySize}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select community size</option>
                        <option value="<1000">Less than 1,000</option>
                        <option value="1000-5000">1,000 - 5,000</option>
                        <option value="5000-10000">5,000 - 10,000</option>
                        <option value="10000-50000">10,000 - 50,000</option>
                        <option value="50000+">More than 50,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="web3Experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Web3 Experience
                      </label>
                      <select
                        id="web3Experience"
                        name="web3Experience"
                        value={formData.web3Experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner - Just getting started</option>
                        <option value="intermediate">Intermediate - Some experience</option>
                        <option value="advanced">Advanced - Very experienced</option>
                        <option value="expert">Expert - Building in Web3</option>
                      </select>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary"
                      >
                        {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
                      </button>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 