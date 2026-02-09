import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", to: "services" },
    { name: "Why Us", to: "why-us" },
    { name: "Reviews", to: "reviews" },
    { name: "Areas", to: "areas" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-100 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
            <Flame className="w-6 h-6 fill-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              "font-display font-bold text-lg tracking-tight",
              scrolled ? "text-slate-900" : "text-slate-900 lg:text-slate-900"
            )}>
              Gordon's Bay Gas
            </span>
            <span className={cn(
              "text-xs font-medium tracking-wider uppercase",
              scrolled ? "text-primary" : "text-primary lg:text-primary"
            )}>
              Certified Installers
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-100}
              duration={500}
              className={cn(
                "text-sm font-semibold cursor-pointer transition-colors hover:text-primary",
                scrolled ? "text-slate-600" : "text-slate-800"
              )}
            >
              {link.name}
            </ScrollLink>
          ))}
          
          <Button 
            onClick={() => window.location.href = "tel:0728709882"}
            className="rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 mr-2" />
            072 870 9882
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-base font-semibold text-slate-700 py-2 border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
          <Button 
            className="w-full mt-2 rounded-xl"
            onClick={() => window.location.href = "tel:0728709882"}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      )}
    </nav>
  );
}
