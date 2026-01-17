import CountUp from './components/CountUp';
import Link from 'next/link';

export default function Home() {
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
                  item === 'Home' ? 'text-white' : 'text-gray-400 hover:text-white'
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
        <div className="container-width">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Accepting New Projects for 2026</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter leading-[0.9] mb-12 text-white">
              We Engineer <br/>
              <span className="text-gray-500">The Future.</span>
            </h1>
            
            <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
              <div className="md:col-span-1">
                <p className="text-xl text-gray-400 leading-relaxed">
                  CodengenX bridges the gap between ambitious concepts and deployed reality. 
                  We build world-class software and train the next generation of engineers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link href="/services" className="btn-primary w-full sm:w-auto">
                    Our Services
                  </Link>
                  <Link href="/training" className="btn-glass w-full sm:w-auto">
                    Training Hub
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                 {[
                   { val: "150+", label: "Projects Shipped" },
                   { val: "98%", label: "Client Retained" },
                   { val: "500+", label: "Engineers Trained" },
                   { val: "Global", label: "Client Base" },
                 ].map((stat, i) => (
                   <div key={i} className="bg-surface p-8 flex flex-col justify-between h-40 group hover:bg-white/5 transition-colors">
                      <div className="text-4xl font-mono font-light text-white group-hover:text-primary transition-colors">{stat.val}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-12 border-y border-white/5 bg-surface relative overflow-hidden">
        <div className="mask-gradient w-full overflow-hidden">
            <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center">
                  {['NEXT.JS', 'REACT', 'PYTHON', 'AWS', 'DOCKER', 'GOOGLE CLOUD', 'TYPESCRIPT', 'TAILWIND', 'NODE.JS', 'FLUTTER'].map((tech) => (
                    <span key={tech} className="text-4xl font-bold text-white/5 selection:bg-transparent cursor-default hover:text-white/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* Services Bento Grid */}
      <section className="py-32 relative z-10">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <h2 className="text-5xl font-semibold mb-6">Our Capabilities</h2>
               <p className="text-gray-400 max-w-md text-lg">
                 We deliver end-to-end solutions. From the first line of code to the final deployment.
               </p>
            </div>
            <Link href="/services" className="text-white border-b border-white hover:border-gray-500 transition-colors pb-1">View All Services</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Main Feature - Large */}
            <div className="md:col-span-2 card-bento group flex flex-col justify-between bg-zinc-900">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative z-10">
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">⚡</div>
                 <h3 className="text-3xl font-bold mb-4">Enterprise Software Development</h3>
                 <p className="text-gray-400 max-w-lg text-lg">
                   Custom-built scalable architectures for businesses that demand performance. We specialize in high-load systems and intuitive interfaces.
                 </p>
               </div>
               <div className="relative z-10 mt-8 grid grid-cols-2 gap-4">
                  {['Web Apps', 'Mobile', 'Cloud', 'DevOps'].map(tag => (
                    <div key={tag} className="border border-white/10 rounded-lg p-4 text-sm font-mono text-gray-300">
                      /{tag}
                    </div>
                  ))}
               </div>
            </div>

            {/* Secondary - Tall */}
            <div className="md:col-span-1 md:row-span-2 card-bento bg-zinc-900 group">
               <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">🎓</div>
                  <h3 className="text-3xl font-bold mb-4">Corporate Training</h3>
                  <p className="text-gray-400 mb-8">
                    Upskill your team with curriculum designed by industry veterans.
                  </p>
                  
                  <div className="flex-1 space-y-4">
                    {['Full Stack Java', 'Data Science', 'Cyber Security', 'AWS Solutions'].map((course, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                        <span className="font-mono text-orange-500">0{i+1}</span>
                        <span className="font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/training" className="mt-8 btn-primary w-full text-center">
                    View Catalog
                  </Link>
               </div>
            </div>

            {/* Box 3 */}
            <div className="card-bento bg-zinc-900 group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]"></div>
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">🚀</div>
               <h3 className="text-2xl font-bold mb-2">Startup Acceleration</h3>
               <p className="text-gray-400 mb-6">MVP development and technical advisory for early-stage founders.</p>
               <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5 9.5 9.75 12 11zm0 2.5l-5-2.5-5 2.5 10 5 10-5-5-2.5-5 2.5z"/></svg>
               </div>
            </div>
            
             {/* Box 4 */}
            <div className="card-bento bg-zinc-900 group">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl">🛡️</div>
               <h3 className="text-2xl font-bold mb-2">Security Audits</h3>
               <p className="text-gray-400 mb-6">Comprehensive code reviews and infrastructure penetration testing.</p>
               <div className="w-full h-1 bg-white/10 rounded-full mt-auto overflow-hidden">
                 <div className="w-2/3 h-full bg-green-500"></div>
               </div>
               <div className="mt-2 text-xs font-mono text-green-500 text-right">System Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 relative z-10 border-t border-white/5">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">We believe in holistic development and professional excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Creative Thinking", icon: "💡", desc: "Fostering innovation and out-of-the-box solutions." },
              { title: "Career Planning", icon: "🎯", desc: "Strategic guidance for a successful professional journey." },
              { title: "Technical Excellence", icon: "⚡", desc: "Mastering the latest technologies and best practices." }
            ].map((item, i) => (
              <div key={i} className="card-bento bg-zinc-900 p-8 hover:bg-white/5 transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-surface overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="container-width relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">Welcome to CodengenX</h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                CodengenX aims to provide an additional advantage to the field of information technology. 
                We are a team of passionate, skilled and energetic individuals collaborating to offer top-notch services.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Recognized as a leading Ed-Tech and Software Company, we strive to transform your ideas into tangible results. 
                Our brand represents a fusion of expertise, innovation and contemporary knowledge.
              </p>
              <Link href="/about" className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-2">
                Learn More About Us <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Expert Mentors" },
                { value: "100%", label: "Placement Support" },
                { value: "24/7", label: "Support System" },
                { value: "Global", label: "Client Base" }
              ].map((stat, i) => (
                <div key={i} className="card-bento bg-zinc-900 p-6 hover:bg-white/5 transition-colors">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 relative z-10 bg-background">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-2 text-white">Software Services</h2>
            </div>
            <Link href="/services" className="text-blue-400 font-medium hover:text-blue-300 mt-4 md:mt-0">
              View All Services →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "Custom websites and web applications built with modern technologies." },
              { title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android." },
              { title: "Digital Marketing", desc: "SEO, SEM, and social media strategies to grow your online presence." },
              { title: "Cloud Solutions", desc: "Scalable cloud infrastructure and DevOps services." },
              { title: "UI/UX Design", desc: "User-centric design that drives engagement and conversion." },
              { title: "Consulting", desc: "Expert technical consulting to guide your digital transformation." }
            ].map((service, i) => (
              <div key={i} className="card-bento bg-zinc-900 p-8 hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors border border-blue-500/20">
                  <span className="text-blue-400 group-hover:text-white text-xl transition-colors">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.desc}</p>
                <Link href="/services" className="text-sm font-medium text-blue-400 hover:text-blue-300">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-surface">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Education</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-2 mb-4 text-white">Training Programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Industry-oriented training programs designed to make you job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Science", icon: "📊" },
              { title: "Full Stack Java", icon: "☕" },
              { title: "MERN Stack", icon: "⚛️" },
              { title: "AWS & DevOps", icon: "☁️" },
              { title: "Python", icon: "🐍" },
              { title: "Machine Learning", icon: "🤖" },
              { title: "Cyber Security", icon: "🔒" },
              { title: "Digital Marketing", icon: "📱" }
            ].map((course, i) => (
              <div key={i} className="card-bento bg-zinc-900 group relative overflow-hidden aspect-[4/5] flex items-end p-6 hover:bg-white/5 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <div className="absolute inset-0 text-9xl opacity-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {course.icon}
                </div>
                
                <div className="relative z-20 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    Placement Guaranteed Program
                  </p>
                  <button className="text-blue-400 text-sm font-medium border-b border-blue-400/30 pb-1 hover:border-blue-400 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>
        <div className="container-width text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tighter">
            Ready to <span className="text-gray-600">Upgrade?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Let&apos;s discuss how we can help you build your next big product or train your team for the challenges of tomorrow.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4 h-14">
            Get in Touch
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
                {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
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
