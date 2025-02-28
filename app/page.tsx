import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with padding for the navbar */}
      <section className="relative pt-32 pb-20 md:py-40 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Incentivize your fans to drive community growth
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Transform community engagement into rewarding and decentralized experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/waitlist" className="web3-button text-center">
                  Join the Waitlist
                </Link>
                <Link href="/about" className="btn-secondary text-center">
                  Learn More
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-gray-500">Connect with us:</span>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.595 2 2 6.595 2 12s4.595 10 10 10 10-4.595 10-10S17.405 2 12 2zm1.42 14.841c-1.602 0-2.803-1.201-2.803-2.803 0-1.602 1.201-2.803 2.803-2.803 1.602 0 2.803 1.201 2.803 2.803 0 1.602-1.201 2.803-2.803 2.803zm4.809-7.866c-.4 0-.801-.201-1.002-.602-.301-.4-.201-1.002.2-1.303.401-.3 1.002-.2 1.303.2.3.401.2 1.002-.2 1.303-.2.301-.401.402-.601.402h.3zm-8.015 0c-.4 0-.801-.201-1.002-.602-.3-.4-.2-1.002.2-1.303.401-.3 1.002-.2 1.303.2.3.401.2 1.002-.2 1.303-.2.301-.401.402-.601.402h.3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="crypto-card p-6 md:p-8">
                  <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-xl p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="token-icon">C</div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900">Creator Community</h3>
                        <p className="text-gray-600 text-sm">1,240 members</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-primary">✓</div>
                        <div className="ml-3 text-gray-700">Share our latest post on Twitter</div>
                        <div className="ml-auto text-primary font-medium">+50 pts</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-primary">✓</div>
                        <div className="ml-3 text-gray-700">Host a community meetup</div>
                        <div className="ml-auto text-primary font-medium">+200 pts</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-primary">✓</div>
                        <div className="ml-3 text-gray-700">Create derivative artwork</div>
                        <div className="ml-auto text-primary font-medium">+100 pts</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Redeem Rewards</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Limited Edition Merch</span>
                      <span className="text-primary font-medium">500 pts</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">1:1 Call with Creator</span>
                      <span className="text-primary font-medium">1000 pts</span>
                    </div>
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
