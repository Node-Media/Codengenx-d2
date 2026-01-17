import Link from 'next/link';

export default function ContactPage() {
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
                  item === 'Contact' ? 'text-white' : 'text-gray-400 hover:text-white'
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
            <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Get in Touch</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-tight mb-6 text-white">
            Let's Start<br />
            <span className="text-gray-500">Building</span> Together
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you have a project in mind, need training for your team, or want to explore R&D opportunities,
            we're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative z-10">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-bento bg-zinc-900 p-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-2 text-white">Your Name *</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-white">Email Address *</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-white">I'm Interested In *</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-white/20 transition-colors">
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Product Development</option>
                    <option>Training Programs</option>
                    <option>R&D Partnership</option>
                    <option>Technical Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-2 text-white">Tell Us About Your Project *</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors min-h-[150px]"
                    placeholder="Describe your project, goals, timeline, or any specific requirements..."
                  ></textarea>
                </div>

                <button className="w-full btn-primary py-4 font-medium">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-bento bg-zinc-900 p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-gray-500 mb-1 uppercase tracking-wider">Email</div>
                    <a href="mailto:hello@codengenx.com" className="text-lg text-white hover:text-gray-300 transition-colors font-medium">
                      hello@codengenx.com
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-500 mb-1 uppercase tracking-wider">Phone</div>
                    <a href="tel:+15551234567" className="text-lg text-white hover:text-gray-300 transition-colors font-medium">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-500 mb-1 uppercase tracking-wider">Address</div>
                    <p className="text-lg text-gray-300">
                      123 Tech Boulevard<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-500 mb-1 uppercase tracking-wider">Office Hours</div>
                    <p className="text-lg text-gray-300">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-bento bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/20 p-8">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold mb-4 text-white">R&D Partnership</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Interested in exploring cutting-edge technologies or building innovative solutions? Our R&D team works on emerging tech.
                </p>
                <a href="mailto:rd@codengenx.com" className="inline-block btn-primary px-6 py-3">
                  Contact R&D Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-surface relative z-10 border-t border-white/5">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-4 text-white">Our Locations</h2>
            <p className="text-xl text-gray-400">Global presence, local expertise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: 'San Francisco', type: 'Headquarters', addr: '123 Tech Boulevard, San Francisco, CA 94102' },
              { city: 'Bangalore', type: 'Development Center', addr: '456 Innovation Park, Bangalore, KA 560001' },
              { city: 'Austin', type: 'Training Hub', addr: '789 Learning Lane, Austin, TX 78701' },
            ].map((loc) => (
              <div key={loc.city} className="card-bento bg-zinc-900 p-8 text-center">
                <div className="font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">{loc.type}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{loc.city}</h3>
                <p className="text-gray-400 text-sm">{loc.addr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5 bg-background relative overflow-hidden">
        <div className="container-width text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help you build your next big product or transform your team's capabilities.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4 text-lg inline-flex">
            Schedule a Call
          </Link>
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
