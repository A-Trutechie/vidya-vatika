import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-[#FAFDF9] text-[#1E4632] py-4 md:py-5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 border-b border-[#E5EFE2]/60 shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <img 
          src="/logo.png" 
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "logo.png"; }}
          alt="Vidya Vatika Logo" 
          className="w-14 md:w-16 h-auto object-contain" 
        />
        <div className="flex flex-col">
          <span className="font-serif text-2xl tracking-widest leading-none font-bold">VIDYA VATIKA</span>
          <span className="text-[0.55rem] tracking-[0.25em] mt-1 text-[#1E4632]/80 font-semibold">LEARN . GROW . SUCCEED</span>
        </div>
      </Link>
      
      {/* Nav */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-semibold">
        <Link 
          to="/" 
          aria-current={location.pathname === "/" ? "page" : undefined} 
          className="text-[#1E4632]/75 hover:text-[#1E4632] transition-colors pb-1 border-b-[3px] border-transparent aria-[current=page]:border-[#1E4632] aria-[current=page]:text-[#1E4632]"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          aria-current={location.pathname === "/about" ? "page" : undefined} 
          className="text-[#1E4632]/75 hover:text-[#1E4632] transition-colors pb-1 border-b-[3px] border-transparent aria-[current=page]:border-[#1E4632] aria-[current=page]:text-[#1E4632]"
        >
          About Us
        </Link>
        <Link 
          to="/teachers" 
          aria-current={location.pathname === "/teachers" ? "page" : undefined} 
          className="text-[#1E4632]/75 hover:text-[#1E4632] transition-colors pb-1 border-b-[3px] border-transparent aria-[current=page]:border-[#1E4632] aria-[current=page]:text-[#1E4632]"
        >
          Our Teachers
        </Link>
        <Link 
          to="/contact" 
          aria-current={location.pathname === "/contact" ? "page" : undefined} 
          className="text-[#1E4632]/75 hover:text-[#1E4632] transition-colors pb-1 border-b-[3px] border-transparent aria-[current=page]:border-[#1E4632] aria-[current=page]:text-[#1E4632]"
        >
          Contact Us
        </Link>
      </nav>

      {/* CTA */}
      <Link 
        to="/contact" 
        className="hidden md:flex items-center gap-2 bg-[#EAF0E7] text-[#1E4632] border border-[#D5E2D1] hover:bg-[#DFE9DC] px-6 py-2.5 rounded-full font-medium text-sm transition-colors"
      >
        Join Our Academy <ArrowRight className="w-4 h-4" />
      </Link>
    </header>
  );
}
