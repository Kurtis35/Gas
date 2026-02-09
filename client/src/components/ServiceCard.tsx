import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Card className="h-full border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon className="w-24 h-24 text-primary" />
        </div>
        <CardContent className="p-8 relative z-10">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-600 leading-relaxed text-balance">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
