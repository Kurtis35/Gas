import { ShieldCheck, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col dark:bg-emerald-950/5">
      <section className="py-32 bg-emerald-50/50 dark:bg-emerald-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl lg:text-8xl font-display font-black text-slate-900 dark:text-white mb-8 leading-[0.9]">
              Our <br />
              <span className="text-gradient italic">Story.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We are a premier technical services company based in Cape Town, dedicated to providing high-quality compliance and maintenance solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
                alt="Professional team" 
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-0" />
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black mb-6 dark:text-white">Our Mission</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our mission is to deliver exceptional technical expertise and reliable compliance certification through integrity, professionalism, and a commitment to safety standards.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-5">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <Target className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 dark:text-white">Precision</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Detailed work focused on safety and compliance.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 dark:text-white">Reliability</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Always on time and ready to solve complex issues.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 dark:text-white">Integrity</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Transparent pricing and honest assessments.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <Award className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 dark:text-white">Certification</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Fully qualified and certified for all services.</p>
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
