import Link from 'next/link';
import TeamMemberCard from './TeamMemberCard';

// Team member data
const teamMembers = [
  {
    name: 'Henry Yeung',
    role: 'Co-Founder',
    bio: 'NYU CS Alumni',
    image: '/team/alex.jpg',
    social: {
      twitter: 'https://twitter.com/alexj',
      linkedin: 'https://linkedin.com/in/alexj'
    }
  },
  {
    name: 'David Slakter',
    role: 'Co-Founder',
    bio: 'NYU CS Alumni',
    image: '/team/sarah.jpg',
    social: {
      twitter: 'https://twitter.com/sarahc',
      github: 'https://github.com/sarahc'
    }
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Mission Section - Clean and focused */}
      <section className="py-20 bg-white">
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

      {/* How It Works Section - Clean two-column layout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">How Collabr Works</h2>
            
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
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Integrate with your existing Web3 infrastructure and tokens</span>
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

      {/* Team Section - Clean grid layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Meet Our Team</h2>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 