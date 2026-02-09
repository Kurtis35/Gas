import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  date: string;
}

export function TestimonialCard({ name, role, content, date }: TestimonialProps) {
  return (
    <Card className="h-full border-none bg-slate-50/50 hover:bg-white transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-slate-700 italic mb-6 leading-relaxed">
          "{content}"
        </p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
            <p className="text-xs text-slate-500">{role}</p>
          </div>
          <span className="text-xs text-slate-400">{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
