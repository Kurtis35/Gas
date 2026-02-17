import { ShieldCheck, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">About ProFix Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a premier technical services company based in Cape Town, dedicated to providing high-quality compliance and maintenance solutions. With years of experience in the industry, our team of certified professionals ensures your safety and peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
                alt="Professional team" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  Our mission is to deliver exceptional technical expertise and reliable compliance certification through integrity, professionalism, and a commitment to safety standards.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Precision</h4>
                    <p className="text-sm text-muted-foreground">Detailed work focused on safety and compliance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Reliability</h4>
                    <p className="text-sm text-muted-foreground">Always on time and ready to solve complex issues.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Integrity</h4>
                    <p className="text-sm text-muted-foreground">Transparent pricing and honest assessments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Certification</h4>
                    <p className="text-sm text-muted-foreground">Fully qualified and certified for all services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
