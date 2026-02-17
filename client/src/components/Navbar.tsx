import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Flame, Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
      scrolled 
        ? "bg-white/80 backdrop-blur-2xl py-4 border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
        : "bg-transparent py-8"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:bg-primary transition-all duration-500">
            <Flame className="h-7 w-7 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black text-slate-900 leading-none">Gordon's Bay Gas</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mt-1">Certified Installers</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-black uppercase tracking-widest transition-all hover:text-primary",
                location === item.href ? "text-primary" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="rounded-2xl h-12 px-6 font-bold shadow-lg shadow-primary/20">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="p-2 md:hidden text-slate-900 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 md:hidden animate-in slide-in-from-top-5 duration-500">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-black uppercase tracking-widest transition-colors",
                  location === item.href ? "text-primary" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full h-14 rounded-2xl font-bold">
              <Link href="/contact">Request Service</Link>
            </Button>
            <a href="tel:0728709882" className="flex items-center justify-center gap-3 text-slate-900 font-black">
              <Phone className="w-5 h-5 text-primary" />
              072 870 9882
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
