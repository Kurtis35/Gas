import { Navbar } from "@/components/Navbar";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  ShieldCheck, 
  Wrench, 
  FileCheck, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2,
  Construction,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-primary text-sm font-semibold mb-6 border border-orange-100">
                <ShieldCheck className="w-4 h-4" />
                <span className="tracking-wide uppercase text-xs">Fully Certified & Compliant</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Safe. Certified. <br />
                <span className="text-primary relative inline-block">
                  Professional.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Expert gas installations in Gordon's Bay and surrounding areas. We prioritize your safety with fully compliant residential and commercial gas solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-xl h-14 px-8 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30"
                  onClick={() => window.location.href = "tel:0728709882"}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 072 870 9882
                </Button>
                <ScrollLink to="contact" smooth={true} offset={-100}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto rounded-xl h-14 px-8 text-base border-2 hover:bg-slate-50"
                  >
                    Get a Free Quote
                  </Button>
                </ScrollLink>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                    ))}
                  </div>
                  <span>15+ 5-Star Reviews</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  <span>Licensed LP Gas Installer</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Abstract decorative image representation */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                {/* Unsplash image for gas stove/kitchen */}
                {/* Modern gas stove burner with blue flame */}
                <img 
                  src="https://pixabay.com/get/g26d42a4cc88d6445ecba05769dceb9b1dce05c190a01ff6b0c1e5e0df44325994621565a967dadfd49328301d66ac32f32bb97bd04196ee008b3d059889bc5e0_1280.jpg"
                  alt="Modern gas installation" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg rounded-2xl p-4 flex items-center gap-4 max-w-[240px]">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Safety First</p>
                    <p className="text-xs text-slate-500">SANS 10087 Compliant Installations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Professional Services</h2>
            <p className="text-slate-600 text-lg">
              We offer comprehensive gas solutions for homes and businesses, ensuring every installation meets strict safety standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Flame}
              title="Gas Installations"
              description="Complete installation of gas hobs, stoves, fireplaces, and water heaters for residential and commercial properties."
              delay={0.1}
            />
            <ServiceCard 
              icon={FileCheck}
              title="Compliance Certificates"
              description="Issue of Certificate of Conformity (COC) for new and existing installations ensuring insurance validity."
              delay={0.2}
            />
            <ServiceCard 
              icon={Construction}
              title="Maintenance"
              description="Regular servicing, pressure testing, and safety inspections to keep your gas systems running efficiently."
              delay={0.3}
            />
            <ServiceCard 
              icon={Wrench}
              title="Repairs"
              description="Prompt diagnosis and repair of gas leaks, regulator faults, and appliance issues by certified technicians."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]">
                {/* Unsplash image of technician working */}
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                  alt="Professional technician" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-3xl font-bold mb-1">Local Expert</p>
                  <p className="opacity-80">Serving Gordon's Bay since 2015</p>
                </div>
              </div>
            </motion.div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Why Gordon's Bay Gas?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We are a local, owner-operated business dedicated to high-quality workmanship and honest pricing. We don't just install gas; we build trust.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "SAQCC Gas Certified", desc: "Registered practitioners authorized to issue COCs." },
                  { title: "Safety Guaranteed", desc: "We strictly adhere to SANS 10087 safety regulations." },
                  { title: "Fast Response", desc: "Local presence means we can get to you quickly." },
                  { title: "Transparent Pricing", desc: "Clear quotes with no hidden costs." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-slate-900">10+</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">Years Exp</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">500+</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">Installs</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">100%</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-slate-400 text-lg">
                Don't just take our word for it. Here's what homeowners in Gordon's Bay have to say about our service.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-slate-400 text-sm ml-2">Based on 15+ reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Sarah Jenkins"
              role="Homeowner, Somerset West"
              content="Professional, punctual, and tidy. The installation of our new gas hob was seamless. Highly recommended!"
              date="2 weeks ago"
            />
            <TestimonialCard 
              name="Michael Ross"
              role="Restaurant Owner, Strand"
              content="We needed an urgent COC for our kitchen. Gordon's Bay Gas responded immediately and sorted everything out."
              date="1 month ago"
            />
            <TestimonialCard 
              name="David Botha"
              role="Resident, Gordon's Bay"
              content="Honest advice and great workmanship. It's rare to find tradesmen who take such pride in their work."
              date="3 months ago"
            />
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Contact Us</h2>
              <p className="text-lg text-slate-600 mb-10">
                Ready to switch to gas or need a safety inspection? Get in touch today for a free, no-obligation quote.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Call Us</h3>
                    <p className="text-slate-500 mb-1">Mon-Fri from 8am to 5pm</p>
                    <a href="tel:0728709882" className="text-xl font-bold text-primary hover:underline">072 870 9882</a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Our Location</h3>
                    <p className="text-slate-500 mb-1">Gordon's Bay, South Africa</p>
                    <p className="text-slate-900 font-medium">13 Gladiolus Cres</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Working Hours</h3>
                    <p className="text-slate-500">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-slate-500">Saturday: By Appointment</p>
                  </div>
                </div>
              </div>
              
              {/* Service Areas */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> Service Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Gordon's Bay", "Strand", "Somerset West", "Stellenbosch", "Grabouw"].map(area => (
                    <span key={area} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[400px] w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.623696772744!2d18.8687849!3d-34.1537254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb5702213192d%3A0x62956c32c0288f6f!2s13%20Gladiolus%20Cres%2C%20Gordons%20Bay%20Central%2C%20Gordon&#39;s%20Bay%2C%207140%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1709827361234!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Flame className="w-6 h-6 text-primary fill-primary" />
                <span className="font-display font-bold text-xl">Gordon's Bay Gas</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed">
                Safe, certified, and professional gas installations for residential and commercial properties in the Helderberg area.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><ScrollLink to="services" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Services</ScrollLink></li>
                <li><ScrollLink to="why-us" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Why Choose Us</ScrollLink></li>
                <li><ScrollLink to="reviews" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Reviews</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Contact</ScrollLink></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span></li>
                <li><span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span></li>
                <li><span className="cursor-pointer hover:text-white transition-colors">SANS Compliance</span></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Gordon's Bay Gas (PTY) LTD. All rights reserved.</p>
            <p>Designed with safety in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
