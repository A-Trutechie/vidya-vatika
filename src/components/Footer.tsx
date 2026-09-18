import { Leaf, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#193F2B] text-white py-14 px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
        
        {/* Left Section - Logo */}
        <div className="flex items-center gap-4 flex-1">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            {/* Replace /logo.png with your uploaded image filename in the public folder */}
            <div className="bg-white p-1.5 rounded-xl">
              <img 
                src="/logo.png" 
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "logo.png"; }}
                alt="Vidya Vatika Logo" 
                className="w-14 h-auto object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-widest font-bold text-white">VIDYA VATIKA</span>
              <span className="text-[0.6rem] tracking-[0.3em] text-[#C1D2B9] font-bold mt-1">
                LEARN . GROW . SUCCEED
              </span>
            </div>
          </Link>
        </div>

        {/* Middle Section - Quote */}
        <div className="hidden lg:flex flex-col items-center justify-center flex-1 border-l border-r border-white/20 px-8 h-20 mt-2">
          <span className="font-serif text-[1.35rem] italic text-white/90">Knowledge today,</span>
          <span className="font-serif text-[1.35rem] italic text-white/90 mb-2">a brighter tomorrow.</span>
          <div className="flex items-center gap-2 text-[#C1D2B9]">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <Leaf className="w-4 h-4 text-[#C1D2B9]" strokeWidth={2} fill="#C1D2B9" />
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="flex flex-col gap-4 text-[14px] text-white/90 flex-1 lg:pl-16 mt-2">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
               <Phone className="w-4 h-4 text-[#C1D2B9]" strokeWidth={2} />
             </div>
             <span className="font-medium">+91 98765 43210</span>
          </div>
          <div className="flex items-start gap-4">
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
               <MapPin className="w-4 h-4 text-[#C1D2B9]" strokeWidth={2} />
             </div>
             <span className="leading-relaxed font-medium">
             FLAT  001 -F6,<br />
                 Centurian Park Greno west – 452010
             </span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
