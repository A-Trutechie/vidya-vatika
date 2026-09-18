import { BookOpen, Users, TrendingUp, Lightbulb, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <>
      {/* Hero / Banner Section */}
      <section className="relative w-full overflow-hidden bg-[#FAFDF9] border-b border-[#E5EFE2]/60">
        {/* Soft Background Window & Leaves Image */}
        <div className="absolute inset-0 z-0 h-[480px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFDF9] via-[#FAFDF9]/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-full md:w-3/5 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-right bg-no-repeat opacity-35"></div>
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-12 pt-20 pb-16 flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Column Text */}
          <div className="max-w-xl">
            <p className="text-[11px] font-bold tracking-[0.25em] mb-3 text-[#1E4632]">
              ABOUT US
            </p>
            <h1 className="font-serif text-[#1E4632] text-5xl md:text-[4.25rem] leading-[1.08] mb-6 font-bold tracking-tight">
              Vidya Vatika
            </h1>
            <p className="text-[#1E4632]/85 text-lg md:text-[1.2rem] font-medium mb-8 leading-relaxed">
              More than just an academy — it&apos;s a place where learning grows into confidence.
            </p>

            {/* Hand-drawn style decorative signature */}
            <div className="inline-block mt-2">
              <div className="text-[#2D5A40] font-serif text-2xl md:text-3xl italic -rotate-2 transform translate-y-1 flex items-center gap-2">
                <span>Learn · Grow · Succeed</span>
                {/* Sprout leaf doodle */}
                <div className="flex items-center -rotate-6">
                  <Leaf className="w-5 h-5 text-[#2D5A40]" strokeWidth={2} fill="#2D5A40" />
                </div>
              </div>
              <svg className="w-60 md:w-64 h-3.5 mt-1 text-[#2D5A40]" viewBox="0 0 240 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12C65 3 175 3 236 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Column: Realistic Book Stack with Plant Graphic */}
          <div className="mt-14 md:mt-0 relative hidden sm:flex items-end justify-center pr-6">
            {/* Potted plant behind book */}
            <div className="absolute -top-12 -right-8 z-0 flex flex-col items-center">
              {/* Leaves */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-[#3F724D] absolute -top-2 left-2 rotate-12" strokeWidth={1.5} fill="#3F724D" />
                <Leaf className="w-14 h-14 text-[#528A61] absolute -top-4 right-1 45" strokeWidth={1.5} fill="#528A61" />
                <Leaf className="w-12 h-12 text-[#2D5A3D] absolute top-4 left-6 -rotate-45" strokeWidth={1.5} fill="#2D5A3D" />
              </div>
              {/* Pot */}
              <div className="w-16 h-14 bg-[#D8C7B5] rounded-b-xl rounded-t-sm shadow-md border-t border-[#C7B49F]"></div>
            </div>

            {/* Standing Green Book (Vidya Vatika) */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative bg-[#18392B] text-white py-9 px-6 rounded-r-md rounded-l-sm shadow-2xl border-l-4 border-[#0F261C] w-[230px] h-[200px] flex flex-col items-center justify-center text-center transform -rotate-1">
                {/* Book spine line */}
                <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/10"></div>
                
                {/* Logo emblem */}
                <div className="mb-3 text-[#E2D5BE]">
                  <Leaf className="w-10 h-10 mx-auto" strokeWidth={1.75} fill="#E2D5BE" />
                </div>
                
                {/* Book Title */}
                <div className="font-serif text-lg tracking-[0.2em] font-bold text-[#F3EADA]">
                  VIDYA VATIKA
                </div>
              </div>

              {/* Bottom Book 1 (Lying Flat) */}
              <div className="relative -mt-1 w-[260px] h-7 bg-[#2E5E47] rounded-sm shadow-md border border-[#234A37] flex items-center justify-between px-3">
                <div className="w-full h-2 bg-[#F3EADA] rounded-sm opacity-90 border-t border-b border-[#D8C9B3]"></div>
              </div>

              {/* Bottom Book 2 (Base) */}
              <div className="relative w-[285px] h-8 bg-[#1F4432] rounded-sm shadow-xl border border-[#163325] flex items-center justify-between px-3 -mt-0.5">
                <div className="w-full h-2.5 bg-[#EFE6D6] rounded-sm opacity-90 border-t border-b border-[#D4C3AC]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#FAFDF9] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto space-y-16 md:space-y-20">
          
          {/* Top Row: Who We Are & Our Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Our Story */}
            <div className="lg:col-span-5 flex flex-col pt-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#1E4632]">
                  WHO WE ARE
                </span>
                <div className="h-[1px] w-12 bg-[#E5EFE2]"></div>
              </div>

              <h2 className="font-serif text-[#1E4632] text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Our Story
              </h2>

              <div className="space-y-5 text-[#1E4632]/85 text-[15px] md:text-[15.5px] leading-relaxed">
                <p>
                  Vidya Vatika is a dedicated academy, founded with a simple vision — to provide quality education in a supportive, student-friendly environment. We believe that every child has the potential to achieve great things, and our mission is to help them discover and unlock that potential.
                </p>
                <p>
                  With a focus on strong fundamentals, personalized guidance and consistent practice, we aim to build not just academic success, but also confident, responsible and independent individuals for the future.
                </p>
              </div>
            </div>

            {/* Right: How We Teach (Our Approach Card) */}
            <div className="lg:col-span-7 bg-[#F4F8F4] rounded-[2rem] p-8 md:p-10 border border-[#E5EFE2] shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#1E4632]">
                  OUR APPROACH
                </span>
                <div className="h-[1px] w-12 bg-[#DCE4D7]"></div>
              </div>

              <h3 className="font-serif text-[#1E4632] text-3xl md:text-[2.25rem] font-bold mb-4 tracking-tight">
                How We Teach
              </h3>

              <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-8">
                We follow a student-centric approach, combining concept clarity, regular practice and real-life connections to make learning simple, interesting and effective.
              </p>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-6">
                
                {/* 1. Concept Clarity */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DCE4D7]/70 text-[#1E4632] flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-serif text-[1.1rem] font-bold text-[#1E4632] mb-1">
                      Concept Clarity
                    </h4>
                    <p className="text-[#1E4632]/75 text-[13px] leading-relaxed">
                      Build strong basics for long-term success.
                    </p>
                  </div>
                </div>

                {/* 2. Personal Attention */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DCE4D7]/70 text-[#1E4632] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-serif text-[1.1rem] font-bold text-[#1E4632] mb-1">
                      Personal Attention
                    </h4>
                    <p className="text-[#1E4632]/75 text-[13px] leading-relaxed">
                      Every student matters, we guide with care.
                    </p>
                  </div>
                </div>

                {/* 3. Regular Practice */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DCE4D7]/70 text-[#1E4632] flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-serif text-[1.1rem] font-bold text-[#1E4632] mb-1">
                      Regular Practice
                    </h4>
                    <p className="text-[#1E4632]/75 text-[13px] leading-relaxed">
                      Progress through consistent effort.
                    </p>
                  </div>
                </div>

                {/* 4. Holistic Growth */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DCE4D7]/70 text-[#1E4632] flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-serif text-[1.1rem] font-bold text-[#1E4632] mb-1">
                      Holistic Growth
                    </h4>
                    <p className="text-[#1E4632]/75 text-[13px] leading-relaxed">
                      Academic + Personal Development.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Row: Guided by Experience (Teachers Preview) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-4">
            
            {/* Left: Heading & Cursive Tagline */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#1E4632]">
                    OUR TEACHERS
                  </span>
                  <div className="h-[1px] w-12 bg-[#E5EFE2]"></div>
                </div>

                <h2 className="font-serif text-[#1E4632] text-3xl sm:text-4xl md:text-[2.6rem] font-bold mb-5 leading-tight tracking-tight">
                  Guided by Experience
                </h2>

                <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-8 max-w-md">
                  Our team of dedicated teachers brings knowledge, patience and passion to the classroom, helping students learn with clarity and confidence.
                </p>
              </div>

              {/* Cursive doodle phrase */}
              <div className="mt-2">
                <div className="text-[#2D5A40] font-serif text-2xl md:text-[1.7rem] italic -rotate-2 transform translate-y-1 flex items-center gap-2">
                  <span>Meet the faces behind your success</span>
                  <Leaf className="w-5 h-5 text-[#2D5A40] inline-block -rotate-12" strokeWidth={1.75} fill="#2D5A40" />
                </div>
                <svg className="w-64 md:w-72 h-3.5 mt-1 text-[#2D5A40]" viewBox="0 0 240 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12C65 3 175 3 237 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Right: Two Teacher Preview Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Card 1: Keshav Sir */}
              <Link to="/teachers" className="bg-[#F4F8F4] rounded-2xl p-5 sm:p-6 border border-[#E5EFE2] flex flex-row items-center gap-5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-[#DCE4D7] flex-shrink-0 p-1 border-2 border-[#DCE4D7]">
                  <img 
                    src="/sir_photo.png" 
                    alt="Keshav Sir" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-[#1E4632] mb-0.5">
                    Keshav Sir
                  </h3>
                  <p className="text-[12px] font-bold text-[#1E4632]/80 mb-2 tracking-wide">
                    Mathematics &amp; Science
                  </p>
                  <p className="text-[#1E4632]/75 text-[12px] leading-relaxed">
                    Builds concepts with clarity and confidence. Known for his simple explanations and patient teaching style.
                  </p>
                </div>
              </Link>

              {/* Card 2: Alka Ma'am */}
              <Link to="/teachers" className="bg-[#F4F8F4] rounded-2xl p-5 sm:p-6 border border-[#E5EFE2] flex flex-row items-center gap-5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-[#DCE4D7] flex-shrink-0 p-1 border-2 border-[#DCE4D7]">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" 
                    alt="Alka Ma'am" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-[#1E4632] mb-0.5">
                    Alka Ma&apos;am
                  </h3>
                  <p className="text-[12px] font-bold text-[#1E4632]/80 mb-2 tracking-wide">
                    Biology &amp; General studies (Nursery - Class 8)
                  </p>
                  <p className="text-[#1E4632]/75 text-[12px] leading-relaxed">
                    Makes learning engaging and easy to understand. She focuses on building communication skills and overall confidence.
                  </p>
                </div>
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
