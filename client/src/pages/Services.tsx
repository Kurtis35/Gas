import { Zap, Flame, Droplets, Bug, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Electrical Services",
    icon: Zap,
    color: "text-yellow-500",
    description: "We provide certified electrical work for residential and industrial clients, specializing in compliance and safety.",
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
    color: "text-orange-500",
    description: "Professional gas installations and repairs for homes, businesses, and marine vessels.",
    items: [
      "New Gas Installations",
      "Gas Compliance Certificates (COC)",
      "Appliance Repairs",
      "Leak Detection",
      "Gas Geysers & Stoves",
      "Marine Gas Installations (Boats & Yachts)"
    ]
  },
  {
    title: "Plumbing Services",
    icon: Droplets,
    color: "text-blue-500",
    description: "Certified plumbing solutions coming soon. We will cover all compliance and maintenance needs.",
    status: "Coming Soon",
    items: [
      "Compliance Work",
      "Repairs & Maintenance",
      "New Installations",
      "Geyser Replacement"
    ]
  },
  {
    title: "Beetle & Pest Control",
    icon: Bug,
    color: "text-emerald-500",
    description: "Certified structural pest control for residential properties and real estate transfers.",
    items: [
      "Residential Beetle Compliance Certificates",
      "All Structural Pest Control",
      "Wood-borer Treatment",
      "Termite Inspections"
    ]
  }
];

export default function Services() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional solutions tailored to your specific needs. From compliance to maintenance, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((s, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-lg">
              <CardHeader className="bg-white pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-muted ${s.color}`}>
                    <s.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{s.title}</CardTitle>
                    {s.status && (
                      <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {s.status}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground">{s.description}</p>
              </CardHeader>
              <CardContent className="bg-slate-50 py-8">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-slate-500">Includes:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {s.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${s.color}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Compliance Work</h3>
              <p className="text-sm text-white/70">Full certification for electrical, gas, and beetle.</p>
            </div>
            <div>
              <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Repairs & Maintenance</h3>
              <p className="text-sm text-white/70">Reliable ongoing support for all your systems.</p>
            </div>
            <div>
              <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Renovations</h3>
              <p className="text-sm text-white/70">Expert technical advice for your building projects.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/contact">Request Service Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
