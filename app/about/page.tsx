import CountUp from '../components/CountUp';
import Link from 'next/link';

export default function AboutPage() {
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
                  item === 'About' ? 'text-white' : 'text-gray-400 hover:text-white'
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

      {/* Hero */}
      <section className="relative z-10 pt-40 pb-20">
        <div className="container-width text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Who We Are</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-tight mb-6 text-white">
            Building the Future,<br />
            <span className="text-gray-500">One Line</span> at a Time
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            CodengenX is a technology partner that bridges innovation and execution. We create powerful digital
            solutions while empowering teams with the knowledge to thrive in the evolving tech landscape.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative z-10">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-bento bg-zinc-900">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">🚀</div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To empower businesses with cutting-edge technology solutions while building a community of
                skilled developers who can innovate, adapt, and lead in the digital age.
              </p>
            </div>
            <div className="card-bento bg-zinc-900">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">👁️</div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A world where businesses of all sizes have access to world-class technology and every developer
                has the opportunity to reach their full potential through continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-surface relative z-10">
        <div className="container-width">
          <h2 className="text-5xl font-semibold mb-12 text-center">Our Story</h2>
          <div className="space-y-10 max-w-4xl mx-auto">
            {[
              {
                year: '2019',
                title: 'The Beginning',
                text: 'CodengenX started with a simple idea: combine excellent development services with comprehensive training. Our founders set out to create a company that could bridge both worlds.',
              },
              {
                year: '2020-2022',
                title: 'Rapid Growth',
                text: 'We expanded from a small team to a full-service agency, completing over 100 projects while training hundreds of developers. Our dual focus proved to be a winning combination.',
              },
              {
                year: '2023-Present',
                title: 'Innovation Era',
                text: 'Today, we’re a trusted partner for businesses worldwide. Our training programs have helped launch careers for 500+ developers, and we continue to push boundaries.',
              },
            ].map((item) => (
              <div key={item.year} className="border border-white/10 rounded-2xl p-8 bg-background">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-semibold text-white">{item.title}</div>
                  <div className="text-sm font-mono text-gray-500">{item.year}</div>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative z-10">
        <div className="container-width">
          <h2 className="text-5xl font-semibold mb-12 text-center">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { end: 150, suffix: '+', label: 'Projects Delivered' },
              { end: 500, suffix: '+', label: 'Developers Trained' },
              { end: 98, suffix: '%', label: 'Client Satisfaction' },
              { end: 15, suffix: '+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label} className="card-bento bg-zinc-900 text-center">
                <CountUp end={stat.end} suffix={stat.suffix} className="text-5xl font-bold mb-2" />
                <div className="font-mono text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 bg-background relative overflow-hidden">
        <div className="container-width text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            We are always looking for passionate individuals to join our team or partner with us on exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4 text-lg">
              Work With Us
            </Link>
            <Link href="/contact" className="btn-glass px-8 py-4 text-lg">
              See Open Roles
            </Link>
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
