import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">About Collabr</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Transforming community growth into rewarding and decentralized experiences
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Collabr, we&apos;re building a platform that empowers creators, artists, and influencers to grow their communities through incentivized participation. We believe that community members should be rewarded for their contributions, and that these rewards should be transparent, fair, and aligned with the values of Web3.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our platform enables community owners to create custom task lists and unique point systems that reflect their specific needs and goals. By completing tasks or converting platform tokens, community members earn points that can be redeemed for exclusive rewards.
            </p>
            <p className="text-lg text-gray-700">
              We&apos;re committed to building a decentralized ecosystem where communities can thrive, members are valued, and creators can focus on what they do best: creating amazing content and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How Collabr Works</h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">For Community Owners</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Launch your community on Collabr with a custom point system</li>
                <li>Create task lists that align with your community growth goals</li>
                <li>Design exclusive rewards that members can redeem with their points</li>
                <li>Access analytics to understand community engagement and growth</li>
                <li>Integrate with your existing Web3 infrastructure and tokens</li>
              </ul>
            </div>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">For Community Members</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Join communities and view available tasks</li>
                <li>Complete tasks to earn community-specific points</li>
                <li>Convert platform tokens (ERC-20) into community points</li>
                <li>Build reputation and status within communities you value</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Web3 Integration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Web3 Integration</h2>
            <p className="text-lg text-gray-700 mb-6">
              Collabr is built on blockchain technology, ensuring transparency, security, and true ownership of digital assets. Our platform leverages:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>ERC-20 tokens for platform-wide currency</li>
              <li>Smart contracts for secure point management and reward redemption</li>
              <li>Decentralized identity solutions for community reputation</li>
              <li>Integration with popular Web3 wallets for seamless transactions</li>
            </ul>
            <p className="text-lg text-gray-700">
              We&apos;re committed to building on open standards and contributing to the broader Web3 ecosystem, ensuring that Collabr remains interoperable with other decentralized applications and services.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Team</h2>
            <p className="text-lg text-gray-700 mb-6">
              Collabr is being built by a team of passionate Web3 enthusiasts with backgrounds in community building, blockchain development, and product design. We&apos;re united by our belief in the power of decentralized communities and the potential for Web3 to transform how creators and fans interact.
            </p>
            <p className="text-lg text-gray-700">
              We&apos;re currently in the early stages of development and are looking for partners, advisors, and early adopters who share our vision. If you&apos;re interested in collaborating, please reach out to us.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We&apos;re building Collabr to empower the next generation of Web3 communities. Be among the first to experience it.
          </p>
          <Link href="/waitlist" className="btn-white inline-block">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </main>
  );
} 