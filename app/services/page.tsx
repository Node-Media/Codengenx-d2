import Link from 'next/link';

export default function ServicesPage() {
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
                  item === 'Services' ? 'text-white' : 'text-gray-400 hover:text-white'
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
            <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Our Services</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-tight mb-6 text-white">
            Solutions That<br />
            <span className="text-gray-500">Scale</span> Your Business
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            From development to training, we provide comprehensive services that help your business grow
            and your team excel in the digital landscape.
          </p>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 relative z-10">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-4 text-white">Development Services</h2>
            <p className="text-xl text-gray-400">Custom solutions built with modern technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                num: '01',
                title: 'Web Development',
                desc: 'Full-stack web applications tailored to your business needs. From responsive landing pages to complex enterprise platforms.',
                techs: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
              },
              {
                num: '02',
                title: 'Mobile App Development',
                desc: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
                techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
              },
              {
                num: '03',
                title: 'Product Development',
                desc: 'End-to-end product development from ideation to launch. We help you build MVPs, scale products, and iterate based on feedback.',
                techs: ['MVP Strategy', 'UX/UI Design', 'Market Validation', 'Testing'],
              },
              {
                num: '04',
                title: 'API & Backend Development',
                desc: 'Robust, scalable backend systems and RESTful APIs that power your applications with security and performance.',
                techs: ['RESTful APIs', 'GraphQL', 'Microservices', 'Cloud Infrastructure'],
              },
            ].map((service) => (
              <div key={service.num} className="card-bento bg-zinc-900 group flex flex-col justify-between p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white/30 mb-4">{service.num}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                </div>
                <div className="relative z-10 pt-6 border-t border-white/10">
                  <div className="font-mono text-xs text-gray-500 mb-3 uppercase tracking-widest">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech) => (
                      <span key={tech} className="bg-white/5 text-gray-400 px-3 py-1 rounded-lg text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-surface relative z-10 border-t border-white/5">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-4 text-white">Training Programs</h2>
            <p className="text-xl text-gray-400">Comprehensive education that transforms careers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Bootcamps',
                duration: '12-16 weeks',
                hours: '300+ hours',
                features: ['Full-Stack Development', 'Real Projects', 'Job Support', '85% Placement'],
              },
              {
                icon: '⚡',
                title: 'Short Courses',
                duration: '2-4 weeks',
                hours: '40-80 hours',
                features: ['Focused Skills', 'Expert Instructors', 'Hands-on Learning', 'Certificates'],
              },
              {
                icon: '✨',
                title: '1-on-1 Coaching',
                duration: 'Flexible',
                hours: 'Custom',
                features: ['Personalized Learning', 'Career Guidance', 'Code Reviews', 'Mentorship'],
              },
            ].map((program) => (
              <div key={program.title} className="card-bento bg-zinc-900 group flex flex-col justify-between p-8">
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{program.title}</h3>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div>
                      <div className="text-sm text-gray-500 font-mono">Duration</div>
                      <div className="text-white font-semibold">{program.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-mono">Hours</div>
                      <div className="text-white font-semibold">{program.hours}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-400">
                        <span className="text-blue-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="mt-6 btn-primary w-full text-center">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5 bg-background relative overflow-hidden">
        <div className="container-width text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Whether you need a development partner or want to upskill your team, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4 text-lg">
              Start a Project
            </Link>
            <Link href="/contact" className="btn-glass px-8 py-4 text-lg">
              Explore Training
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
