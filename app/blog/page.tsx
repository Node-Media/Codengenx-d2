import Link from 'next/link';
import { FaMobileAlt, FaShoppingCart, FaDumbbell, FaBook, FaHome, FaCar, FaMusic } from 'react-icons/fa';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 z-0 bg-grid-pattern bg-grid opacity-[0.05] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="container-width h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-mono font-bold text-lg group-hover:scale-90 transition-transform">CX</div>
            <span className="font-display font-bold text-lg tracking-wide text-white">CodengenX</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {['Home', 'Services', 'Blog', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-white/5 ${
                  item === 'Blog' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="hidden md:inline-flex btn-primary py-2 px-6 text-sm">
            Start Project
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20">
        <div className="container-width text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Case Studies</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-tight mb-6 text-white">
            Product Dev<br />
            <span className="text-gray-500">Stories</span> & Insights
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real projects, real challenges, real solutions. Explore our product development case studies
            and technical insights from building web and mobile applications.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 relative z-10 border-b border-white/5">
        <div className="container-width flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {['All Posts', 'Web', 'Mobile', 'Case Studies', 'Guides'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  tab === 'All Posts'
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 relative z-10">
        <div className="container-width">
          <div className="card-bento bg-zinc-900 group flex flex-col justify-between relative p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-white/10 text-gray-300 font-mono text-xs rounded-full">
                  FEATURED CASE STUDY
                </div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Building a Fintech App: From MVP to 100K Users in 6 Months
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  How we helped a fintech startup build a secure, scalable mobile banking application
                  and grow to 100,000+ active users. Deep dive into architecture decisions, security
                  implementations, and scaling challenges.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React Native', 'Node.js', 'AWS', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="bg-white/10 text-gray-300 px-3 py-1 text-sm font-mono rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm mb-6 text-gray-500 font-mono">
                  <span>12 min read</span>
                  <span>Mar 15, 2025</span>
                </div>
                <button className="btn-primary px-8 py-3">
                  Read Case Study →
                </button>
              </div>
              <div className="bg-white/5 aspect-video rounded-2xl flex items-center justify-center border border-white/10">
                <FaMobileAlt className="text-6xl text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-surface relative z-10 border-t border-white/5">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-4 text-white">Product Development Case Studies</h2>
            <p className="text-xl text-gray-400">Real projects, measurable results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Case Study 1 */}
            <div className="card-bento bg-zinc-900 group flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">🛒</div>
                <h3 className="text-2xl font-bold mb-2 text-white">Multi-Vendor Marketplace</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  E-commerce platform handling 10K+ daily transactions with real-time inventory.
                </p>
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Next.js', 'Stripe', 'Redis'].map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-4">
                  <span className="font-mono">8 min read</span>
                  <span className="text-white font-bold">Read More →</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="card-bento bg-zinc-900 group flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">💪</div>
                <h3 className="text-2xl font-bold mb-2 text-white">AI Fitness Coach App</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Mobile app with ML-based recommendations, 200K+ downloads and 4.8★ rating.
                </p>
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React Native', 'TensorFlow', 'Firebase'].map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-4">
                  <span className="font-mono">10 min read</span>
                  <span className="text-white font-bold">Read More →</span>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="card-bento bg-zinc-900 group flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">📚</div>
                <h3 className="text-2xl font-bold mb-2 text-white">Learning Management System</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Enterprise LMS with 50K+ concurrent users, video streaming, and live classes.
                </p>
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'WebRTC', 'MongoDB'].map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-4">
                  <span className="font-mono">12 min read</span>
                  <span className="text-white font-bold">Read More →</span>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="card-bento bg-zinc-900 group flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">🏠</div>
                <h3 className="text-2xl font-bold mb-2 text-white">Property Virtual Tour App</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  AR-powered virtual tours with AI matching, serving 5M+ listings across 50 cities.
                </p>
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Flutter', 'ARCore', 'GraphQL'].map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-4">
                  <span className="font-mono">9 min read</span>
                  <span className="text-white font-bold">Read More →</span>
                </div>
              </div>
            </div>

            {/* Case Study 5 */}
            <div className="card-bento bg-zinc-900 group flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">🚗</div>
                <h3 className="text-2xl font-bold mb-2 text-white">Fleet Management Dashboard</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Real-time tracking for logistics, managing 10K+ vehicles with predictive maintenance.
                </p>
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Vue.js', 'Socket.io', 'TimescaleDB'].map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-4">
                  <span className="font-mono">11 min read</span>
                  <span className="text-white font-bold">Read More →</span>
                </div>
              </div>
            </div>

            {/* Case Study 6 */}
            <div className="card-bento bg-zinc-900 group flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">🎵</div>
                <h3 className="text-2xl font-bold mb-2 text-white">Music Streaming App</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Cross-platform streaming with smart playlists and offline playback for 1M+ songs.
                </p>
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React Native', 'CDN', 'DRM'].map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-4">
                  <span className="font-mono">7 min read</span>
                  <span className="text-white font-bold">Read More →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 border-t border-white/5 bg-background relative overflow-hidden">
        <div className="container-width text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8">Stay Updated</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Get our latest case studies and technical insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20"
            />
            <button className="btn-primary px-8 py-4 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-surface text-gray-400 py-20">
        <div className="container-width">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h4 className="text-white font-bold text-xl tracking-tight">CodengenX</h4>
              <p className="text-sm">
                Empowering the digital future through engineering excellence and education.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a key={social} href="#" className="hover:text-white transition-colors">{social}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors">Corporate Training</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs">
            <p>© 2025 CodengenX Inc. All rights reserved.</p>
            <p className="font-mono">Designed in 2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
