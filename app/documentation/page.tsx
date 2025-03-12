'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('getting-started');

  // Documentation sections
  const sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'features', title: 'Features' },
    { id: 'api', title: 'API Reference' },
    { id: 'examples', title: 'Examples' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0 mb-8 md:mb-0 md:mr-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">Documentation</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary text-white'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-grow">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8">
              {activeSection === 'getting-started' && (
                <div>
                  <h1 className="text-3xl font-bold text-white mb-6">Getting Started with Collabr</h1>
                  <p className="text-white/90 mb-6">
                    Welcome to Collabr, the platform that helps you incentivize your fans to drive community growth.
                    This guide will help you get started with setting up your community and creating engagement tasks.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Quick Start</h2>
                  <ol className="list-decimal list-inside space-y-3 text-white/90">
                    <li>Create an account on Collabr</li>
                    <li>Set up your community profile</li>
                    <li>Define engagement tasks and rewards</li>
                    <li>Invite your first members</li>
                    <li>Monitor community growth and engagement</li>
                  </ol>
                  
                  <h2 className="text-2xl font-semibold text-white mt-8 mb-4">System Requirements</h2>
                  <p className="text-white/90 mb-4">
                    Collabr works with any modern web browser. For the best experience, we recommend:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/90">
                    <li>Chrome 80+</li>
                    <li>Firefox 75+</li>
                    <li>Safari 13+</li>
                    <li>Edge 80+</li>
                  </ul>
                </div>
              )}
              
              {activeSection === 'features' && (
                <div>
                  <h1 className="text-3xl font-bold text-white mb-6">Platform Features</h1>
                  <p className="text-white/90 mb-6">
                    Explore the powerful features that Collabr offers to help you build and grow your community.
                  </p>
                  
                  {/* Feature sections would go here */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-3">Task Management</h2>
                      <p className="text-white/90">
                        Create and manage engagement tasks for your community members. Set point values, track completion, and reward active participants.
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-3">Reward System</h2>
                      <p className="text-white/90">
                        Define custom rewards that members can redeem with their earned points. From digital goods to exclusive access, the possibilities are endless.
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-3">Analytics Dashboard</h2>
                      <p className="text-white/90">
                        Track community growth, engagement metrics, and member activity through our comprehensive analytics dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'api' && (
                <div>
                  <h1 className="text-3xl font-bold text-white mb-6">API Reference</h1>
                  <p className="text-white/90 mb-6">
                    Integrate Collabr with your existing systems using our comprehensive API.
                  </p>
                  
                  <div className="bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                    <pre className="text-green-400">
                      <code>
                        {`// Example API request
fetch('https://api.collabr.xyz/v1/communities', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
                      </code>
                    </pre>
                  </div>
                  
                  <p className="text-white/90">
                    See the full API documentation for detailed endpoint descriptions, request parameters, and response formats.
                  </p>
                </div>
              )}
              
              {activeSection === 'examples' && (
                <div>
                  <h1 className="text-3xl font-bold text-white mb-6">Example Use Cases</h1>
                  <p className="text-white/90 mb-6">
                    Discover how different communities are using Collabr to drive engagement and growth.
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-3">Music Artist Community</h2>
                      <p className="text-white/90">
                        See how music artists are rewarding fans for sharing content, attending virtual events, and participating in exclusive listening sessions.
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-3">Gaming Guild</h2>
                      <p className="text-white/90">
                        Learn how gaming communities use Collabr to organize tournaments, reward active players, and distribute in-game items.
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-3">Digital Art Collective</h2>
                      <p className="text-white/90">
                        Explore how artists are building communities around their work, offering exclusive content, and rewarding collectors.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'faq' && (
                <div>
                  <h1 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h1>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">How much does Collabr cost?</h3>
                      <p className="text-white/90">
                        Collabr offers a free tier for small communities, with premium plans starting at $29/month for growing communities with advanced needs.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Can I integrate Collabr with my existing website?</h3>
                      <p className="text-white/90">
                        Yes! Collabr offers embeddable widgets and a comprehensive API that allows for seamless integration with your existing web presence.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">How do members claim rewards?</h3>
                      <p className="text-white/90">
                        Members can browse available rewards in your community hub and redeem them using the points they've earned. You'll receive notifications when rewards are claimed.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Is Collabr suitable for non-crypto communities?</h3>
                      <p className="text-white/90">
                        Absolutely! While Collabr supports Web3 features, it's designed to work for all types of communities, with or without cryptocurrency integration.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 