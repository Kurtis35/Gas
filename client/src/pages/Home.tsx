import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  ShieldCheck, 
  Wrench, 
  Zap,
  Droplets,
  Bug,
  ArrowRight,
  CheckCircle2,
  Star,
  Phone,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-50/40 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-bold mb-8 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
                <span className="uppercase tracking-wider text-[10px]">Certified Compliance Specialists</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-black text-slate-900 dark:text-white leading-[0.9] mb-8">
                Expert <br />
                <span className="text-gradient italic text-sky-600">Installations.</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl">
                Premium gas, electrical, and plumbing services for Cape Town. 
                Professional certification and safety you can stake your reputation on.
                Serving a 25-mile radius of Gordon's Bay.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  size="lg" 
                  className="rounded-2xl h-16 px-10 text-lg font-bold shadow-2xl shadow-sky-500/20 hover:shadow-sky-500/40 transition-all bg-sky-600 hover:bg-sky-700"
                  asChild
                >
                  <Link href="/contact">Get Expert Quote</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-2xl h-16 px-10 text-lg font-bold border-2 border-sky-100 hover:bg-sky-50 dark:hover:bg-sky-950/30 dark:border-sky-900/50 transition-all"
                  asChild
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-4 border-white shadow-sm" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold border-4 border-white shadow-sm">
                    +50
                  </div>
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-900">Trusted by 500+ Residents</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                  alt="High-end installation" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass p-6 rounded-3xl flex items-center gap-5 dark:glass-dark">
                    <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900 dark:text-white text-lg">Fully Certified</p>
                      <p className="text-xs font-bold text-slate-500 dark:text-sky-400/70 uppercase tracking-widest">Compliance Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-6xl font-display font-black mb-6">Our Specializations.</h2>
            <p className="text-lg text-slate-600">
              We provide precision engineering for your home's most critical systems.
              Safety isn't just a requirement; it's our promise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Electrical", desc: "COC certification, industrial repairs, and complex fault finding.", delay: 0 },
              { icon: Flame, title: "Gas Services", desc: "New installations, leak detection, and appliance certification.", delay: 0.1 },
              { icon: Droplets, title: "Plumbing", desc: "Maintenance, geyser installations, and emergency repairs.", delay: 0.2 },
              { icon: Bug, title: "Beetle & Pest Control", desc: "Specializing in Beetle Services, certified COCs, and structural pest management. Serving a 25-mile radius.", delay: 0.3 }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: s.delay }}
                viewport={{ once: true }}
              >
                <Card className="hover-elevate group border-none bg-white rounded-[2rem] p-8 shadow-sm">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-sky-50 dark:bg-sky-900/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sky-600 transition-colors duration-500">
                      <s.icon className="w-8 h-8 text-sky-700 dark:text-sky-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 dark:text-white">{s.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{s.desc}</p>
                    <Link href="/services" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-sky-600 dark:text-sky-400 hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-sky-950/10">
        <div className="container mx-auto px-4">
          <div className="bg-sky-900 dark:bg-sky-950 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center text-white shadow-2xl shadow-sky-900/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-7xl font-display font-black mb-8 leading-tight">Ready to Start Your Project?</h2>
              <p className="text-xl text-sky-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Contact our expert team today for a free assessment and comprehensive quote. 
                Experience the gold standard in technical services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="rounded-2xl h-16 px-12 font-bold bg-white text-sky-900 hover:bg-sky-50 shadow-xl" asChild>
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl h-16 px-12 font-bold border-white/20 text-white hover:bg-white/10" onClick={() => window.location.href="tel:0768320777"}>
                  <Phone className="w-5 h-5 mr-3" />
                  076 832 0777
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
