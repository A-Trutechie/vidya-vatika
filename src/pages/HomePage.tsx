import { ArrowRight, BookOpen, Sprout, TrendingUp, Users, Home as HomeIcon, IndianRupee, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full max-w-[1600px] mx-auto pt-12 md:pt-20 pb-12 md:pb-16 px-6 md:px-16 overflow-hidden flex flex-col lg:flex-row items-center min-h-[600px] gap-12 lg:gap-0">
        {/* Background classroom blur effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#FAFDF9]/80 z-10 backdrop-blur-[2px]"></div>
          <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-70 blur-[1px]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center pr-0 lg:pr-16 text-center lg:text-left items-center lg:items-start">
          <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] mb-4 text-[#1E4632]">BETTER LEARNING . BRIGHTER FUTURES</p>
          <h1 className="font-serif text-[#1E4632] flex flex-col leading-[1.1] mb-6">
            <span className="text-3xl sm:text-4xl md:text-[3.25rem] font-normal">Welcome to</span>
            <span className="text-4xl sm:text-5xl md:text-[4.25rem] font-bold mt-1 tracking-tight">VIDYA VATIKA</span>
          </h1>
          <p className="text-[#1E4632]/80 max-w-lg text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-medium px-4 lg:px-0">
            A place where knowledge grows, confidence blooms and every student finds their path to success.
          </p>
          <button className="w-fit flex items-center gap-2 bg-[#1E4632] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#153224] transition-colors mb-12 md:mb-16 text-sm">
            Explore Our Courses <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-start gap-y-8 divide-x-0 lg:divide-x divide-[#1E4632]/20 w-full">
            <div className="flex flex-col items-center text-center gap-3 px-4 sm:px-6 w-1/2 lg:w-auto lg:first:pl-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#1E4632] text-[#1E4632] flex items-center justify-center">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] md:text-xs font-semibold leading-snug">Expert<br/>Guidance</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3 px-4 sm:px-6 w-1/2 lg:w-auto border-l border-[#1E4632]/20 lg:border-none">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#1E4632] text-[#1E4632] flex items-center justify-center">
                <Sprout className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] md:text-xs font-semibold leading-snug">Personalised<br/>Attention</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3 px-4 sm:px-6 w-1/2 lg:w-auto pt-6 lg:pt-0 border-t border-[#1E4632]/20 lg:border-t-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#1E4632] text-[#1E4632] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] md:text-xs font-semibold leading-snug">Concept-Based<br/>Learning</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3 px-4 sm:px-6 w-1/2 lg:w-auto pt-6 lg:pt-0 border-t border-l border-[#1E4632]/20 lg:border-t-0 lg:border-none lg:pr-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#1E4632] text-[#1E4632] flex items-center justify-center">
                <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] md:text-xs font-semibold leading-snug">Supportive<br/>Environment</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
          {/* Mentor Image Container */}
          <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
            {/* Chalkboard Graphic Simulation */}
            <div className="absolute top-0 md:top-4 -left-4 md:-left-12 w-[110%] md:w-[120%] h-[90%] bg-[#325240] rounded text-white/50 font-serif text-2xl p-8 -z-10 shadow-lg transform -rotate-2">
              <div className="absolute top-8 md:top-12 right-6 md:right-12 transform rotate-12 text-2xl md:text-4xl opacity-80 leading-snug hidden sm:block">Learn<br/>Today<br/>Build<br/>Tomorrow</div>
            </div>
            
            {/* Professional Image Placeholder */}
            <img src="sir_photo.png" referrerPolicy="no-referrer" className="w-full h-auto object-contain z-0 relative drop-shadow-2xl mx-auto" />
            
          </div>
        </div>
      </section>

      {/* Features 4 columns - Card Style */}
      <section className="bg-[#F4F8F4] relative overflow-hidden pb-16 md:pb-24 pt-8">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#FAFDF9] rounded-[2rem] shadow-sm overflow-hidden flex flex-col h-full border border-white">
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-[#E5EFE2] flex items-center justify-center text-[#1E4632] mb-6">
                  <HomeIcon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.75rem] font-bold mb-3 text-[#1E4632]">Home</h3>
                <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-6 flex-1">
                  Discover a better way to learn. At Vidya Vatika, we combine expert teaching with a supportive environment to help you grow.
                </p>
                <Link to="/" className="flex items-center gap-2 text-[15px] font-bold text-[#1E4632] hover:opacity-80 mt-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-44 w-full px-6 pb-6 mt-2 relative">
                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" alt="Books" className="w-full h-full object-cover object-bottom rounded-xl shadow-sm" />
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#FAFDF9] rounded-[2rem] shadow-sm overflow-hidden flex flex-col h-full border border-white">
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-[#E5EFE2] flex items-center justify-center text-[#1E4632] mb-6">
                  <Users className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.75rem] font-bold mb-3 text-[#1E4632]">Our Teachers</h3>
                <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-6 flex-1">
                  Learn from experienced and passionate educators who are committed to your success.
                </p>
                <Link to="/teachers" className="flex items-center gap-2 text-[15px] font-bold text-[#1E4632] hover:opacity-80 mt-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-44 w-full px-6 pb-6 mt-2 relative">
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop" alt="Desk" className="w-full h-full object-cover rounded-xl shadow-sm" />
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#FAFDF9] rounded-[2rem] shadow-sm overflow-hidden flex flex-col h-full border border-white">
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-[#E5EFE2] flex items-center justify-center text-[#1E4632] mb-6">
                  <Sprout className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.75rem] font-bold mb-3 text-[#1E4632]">About Us</h3>
                <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-6 flex-1">
                  A place where learning grows into confidence. Discover our story, values, and student-first teaching methodology.
                </p>
                <Link to="/about" className="flex items-center gap-2 text-[15px] font-bold text-[#1E4632] hover:opacity-80 mt-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-44 w-full px-6 pb-6 mt-2 relative">
                <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop" alt="Books on desk" className="w-full h-full object-cover object-bottom rounded-xl shadow-sm" />
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-[#FAFDF9] rounded-[2rem] shadow-sm overflow-hidden flex flex-col h-full border border-white">
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-[#E5EFE2] flex items-center justify-center text-[#1E4632] mb-6">
                  <Mail className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.75rem] font-bold mb-3 text-[#1E4632]">Contact Us</h3>
                <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-6 flex-1">
                  Have a question? We're here to help. Reach out to us anytime for admissions, queries or support.
                </p>
                <Link to="/contact" className="flex items-center gap-2 text-[15px] font-bold text-[#1E4632] hover:opacity-80 mt-auto">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-44 w-full px-6 pb-6 mt-2 relative">
                <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=600&auto=format&fit=crop" alt="Notebook" className="w-full h-full object-cover rounded-xl shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
