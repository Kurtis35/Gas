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
        ? "bg-white/90 backdrop-blur-2xl py-4 border-emerald-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:bg-emerald-950/90 dark:border-emerald-900/50" 
        : "bg-transparent py-8"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:bg-emerald-700 transition-all duration-500">
            <Flame className="h-7 w-7 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black text-slate-900 dark:text-white leading-none">Gordon's Bay Gas</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mt-1">Certified Installers</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-black uppercase tracking-widest transition-all hover:text-emerald-600 dark:hover:text-emerald-400",
                location === item.href ? "text-emerald-600 dark:text-emerald-400" : "text-slate-600 dark:text-slate-400"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="rounded-2xl h-12 px-6 font-bold shadow-lg shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-700">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="p-2 md:hidden text-slate-900 dark:text-white hover:text-emerald-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-emerald-950 border-b border-emerald-100 dark:border-emerald-900 p-8 md:hidden animate-in slide-in-from-top-5 duration-500 shadow-2xl">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-black uppercase tracking-widest transition-colors",
                  location === item.href ? "text-emerald-600 dark:text-emerald-400" : "text-slate-600 dark:text-slate-400"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full h-14 rounded-2xl font-bold bg-emerald-600 hover:bg-emerald-700">
              <Link href="/contact">Request Service</Link>
            </Button>
            <a href="tel:0728709882" className="flex items-center justify-center gap-3 text-slate-900 dark:text-white font-black">
              <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              072 870 9882
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
