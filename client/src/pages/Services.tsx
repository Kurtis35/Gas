import { 
  Zap, 
  Flame, 
  Droplets, 
  Bug, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Wrench,
  Construction
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

const services = [
  {
    title: "Electrical Services",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    description: "Certified work for residential and industrial sectors, specializing in safety compliance.",
    items: [
      "Electrical Compliance Certificates (COC)",
      "Repairs and Alterations",
      "Fault Finding",
      "Solar COCs",
      "3-Phase Distribution Boards",
      "Maintenance and Renovations"
    ]
  },
  {
    title: "Gas Services",
    icon: Flame,
    color: "from-orange-500 to-red-600",
    description: "Professional gas solutions for homes, businesses, and luxury marine vessels.",
    items: [
      "New Gas Installations",
      "Gas Compliance Certificates (COC)",
      "Appliance Repairs",
      "Leak Detection",
      "Marine Gas Installations",
      "Gas Geysers & Stoves"
    ]
  },
  {
    title: "Plumbing Services",
    icon: Droplets,
    color: "from-blue-400 to-indigo-600",
    description: "Full-scale plumbing solutions coming soon. Quality maintenance and repairs.",
    status: "COMING SOON",
    items: [
      "Compliance Work",
      "Repairs & Maintenance",
      "New Installations",
      "Geyser Replacement"
    ]
  },
  {
    title: "Pest Control",
    icon: Bug,
    color: "from-emerald-400 to-teal-600",
    description: "Certified structural pest management for property transfers and safety.",
    items: [
      "Residential Beetle Certificates",
      "Structural Pest Control",
      "Wood-borer Treatment",
      "Termite Inspections"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-8xl font-display font-black text-slate-900 mb-8 leading-[0.9]">
              Premium <br />
              <span className="text-gradient italic">Expertise.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We provide specialized technical services with a focus on compliance, 
              safety, and uncompromising quality standards.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-[3rem] border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden group">
                <CardContent className="p-12">
                  <div className="flex items-start justify-between mb-10">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg`}>
                      <s.icon className="w-10 h-10" />
                    </div>
                    {s.status && (
                      <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase">
                        {s.status}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-black text-slate-900 mb-4">{s.title}</h2>
                  <p className="text-slate-500 mb-10 leading-relaxed text-lg">{s.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {s.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="p-0 h-auto font-black uppercase tracking-widest text-xs hover:bg-transparent text-primary hover:gap-3 transition-all" asChild>
                    <Link href="/contact">
                      Request Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Capabilities */}
        <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid lg:grid-cols-3 gap-16">
            <div>
              <ShieldCheck className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-2xl font-black mb-4">Compliance Work</h3>
              <p className="text-slate-400 leading-relaxed">Full legal certification for gas, electrical, and beetle services ensuring insurance validity.</p>
            </div>
            <div>
              <Wrench className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-2xl font-black mb-4">Maintenance</h3>
              <p className="text-slate-400 leading-relaxed">Ongoing preventative care for complex systems to ensure maximum efficiency and safety.</p>
            </div>
            <div>
              <Construction className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-2xl font-black mb-4">Renovations</h3>
              <p className="text-slate-400 leading-relaxed">Technical oversight and implementation for high-end residential building projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
