import { Link } from "wouter";
import { Hammer, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center group">
              <img src="/logo.png" alt="Fantastic 4 Logo" className="h-32 w-32 object-contain transition-transform group-hover:scale-105 brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed">
              Expert installations, repairs, and maintenance services for residential and industrial clients.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-primary">Electrical Services</Link></li>
              <li><Link href="/services" className="hover:text-primary">Gas Services</Link></li>
              <li><Link href="/services" className="hover:text-primary">Plumbing Services</Link></li>
              <li><Link href="/services" className="hover:text-primary">Pest Control</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>4 Attalia Street, Somerset West</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:0768320777" className="hover:text-white transition-colors">076 832 0777</a>
                  <a href="tel:0728709882" className="hover:text-white transition-colors">072 870 9882</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@fantastic4.co.za" className="hover:text-white transition-colors">info@fantastic4.co.za</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs space-y-2">
          <p>© {new Date().getFullYear()} Fantastic 4. All rights reserved.</p>
          <p className="text-slate-500">Made with ❤️ in South Africa by Evermore Digital Solutions</p>
        </div>
      </div>
    </footer>
  );
}
