import { BookOpen, Leaf, TrendingUp, Users, Home as HomeIcon } from "lucide-react";

export function TeachersPage() {
  return (
    <>
      {/* Our Teachers Header */}
      <section className="relative w-full overflow-hidden bg-[#FAFDF9]">
        {/* Background Books Banner */}
        <div className="absolute inset-0 z-0 h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFDF9] via-[#FAFDF9]/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/3 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-right bg-no-repeat opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 pt-24 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold tracking-[0.25em] mb-4 text-[#1E4632]">OUR TEACHERS</p>
            <h2 className="font-serif text-[#1E4632] text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] mb-6 font-bold">
              Meet Our<br/>Dedicated Teachers
            </h2>
            <p className="text-[#1E4632]/80 text-lg sm:text-xl font-medium mb-4">
              Experienced. Passionate. Student-Focused.
            </p>
            <p className="text-[#1E4632]/70 text-base leading-relaxed">
              Our teachers are not just educators, they are mentors who guide, support and inspire every student to reach their best potential.
            </p>
          </div>
          
          <div className="mt-12 md:mt-0 relative hidden sm:block">
            <div className="absolute -top-24 -left-32 transform -rotate-6 text-[#6B9071] font-serif text-3xl md:text-4xl opacity-80 leading-tight">
              Better<br/>Learning<br/>Together
            </div>
            {/* Stack of books visual */}
            <div className="relative flex flex-col items-end transform rotate-1 drop-shadow-xl mt-16 md:mt-0">
              <div className="bg-[#6B9071] text-[#FAFDF9] text-sm px-16 py-2 rounded-sm border border-[#527056] w-[260px] text-center mb-0.5 shadow-sm transform -translate-x-4">Biology</div>
              <div className="bg-[#527056] text-[#FAFDF9] text-sm px-16 py-2.5 rounded-sm border border-[#3e5541] w-[280px] text-center mb-0.5 shadow-md">Science</div>
              <div className="bg-[#3e5541] text-[#FAFDF9] text-sm px-16 py-3 rounded-sm border border-[#2b3a2d] w-[300px] text-center shadow-lg transform translate-x-2">A Brighter Future</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Cards Grid */}
      <section className="bg-[#FAFDF9] py-16 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Teacher Card 1 */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5EFE2] p-8 flex flex-col h-full relative overflow-hidden group hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow">
            <Leaf className="absolute -top-8 -right-8 w-40 h-40 text-[#F4F8F4] -rotate-45" strokeWidth={1} />
            
            <div className="flex flex-col sm:flex-row gap-8 mb-10 relative z-10">
              <div className="w-full sm:w-[220px] h-[260px] rounded-2xl overflow-hidden bg-[#E5EFE2] flex-shrink-0 relative">
                <Leaf className="absolute top-4 left-4 w-24 h-24 text-[#DCE4D7] -rotate-12" strokeWidth={1} />
                <img src="/sir_photo.png" referrerPolicy="no-referrer" alt="Keshav Sir" className="w-full h-full object-cover relative z-10" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-3xl font-bold text-[#1E4632] mb-2">Keshav Sir</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#6B9071] mb-6">FOUNDER & LEAD TEACHER</p>
                <p className="italic text-[#1E4632]/80 leading-relaxed font-serif text-lg border-l-2 border-[#E5EFE2] pl-4 py-1">
                  "Good teaching is not about giving answers, it's about teaching you how to find them."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-[#E5EFE2] mb-10 border-b border-[#E5EFE2] pb-10">
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-12 h-12 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center mb-4">
                  <HomeIcon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[13px] font-semibold text-[#1E4632] leading-snug">Biology<br/>Expertise</span>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-12 h-12 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[13px] font-semibold text-[#1E4632] leading-snug">Concept Clarity<br/>& Doubt Solving</span>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-12 h-12 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[13px] font-semibold text-[#1E4632] leading-snug">Student<br/>Mentoring</span>
              </div>
            </div>

            <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-8 flex-1">
              Keshav Sir who is an allumini of NIT PATNA and EX- UNACADEMY (PATNA) teacher brings a deep understanding of Physics , Chemistry and Maths with a simple and effective teaching style. He focuses on building conceptual clarity, encouraging curiosity and helping students think beyond textbooks.
            </p>

            <div className="bg-[#F4F8F4] rounded-2xl p-6 flex items-start gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-[#DCE4D7] text-[#1E4632] flex items-center justify-center flex-shrink-0 mt-1">
                <Leaf className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.15em] text-[#1E4632] mb-2">WHY STUDENTS LOVE HIM</h4>
                <p className="text-[#1E4632]/80 text-sm leading-relaxed">
                  He explains difficult topics in the simplest way, keeps the classes interactive and always motivates students to do better.
                </p>
              </div>
            </div>
          </div>

          {/* Teacher Card 2 */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5EFE2] p-8 flex flex-col h-full relative overflow-hidden group hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow">
            <Leaf className="absolute -top-8 -right-8 w-40 h-40 text-[#F4F8F4] -rotate-45" strokeWidth={1} />
            
            <div className="flex flex-col sm:flex-row gap-8 mb-10 relative z-10">
              <div className="w-full sm:w-[220px] h-[260px] rounded-2xl overflow-hidden bg-[#E5EFE2] flex-shrink-0 relative">
                <Leaf className="absolute top-4 left-4 w-24 h-24 text-[#DCE4D7] -rotate-12" strokeWidth={1} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" alt="Alka Ma'am" className="w-full h-full object-cover object-top relative z-10" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-3xl font-bold text-[#1E4632] mb-2">Alka Ma'am</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#6B9071] mb-6">Educator 1 to 8 and Biology Educator for Higher Studies</p>
                <p className="italic text-[#1E4632]/80 leading-relaxed font-serif text-lg border-l-2 border-[#E5EFE2] pl-4 py-1">
                  "Every student has a unique way of learning. My job is to find it."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-[#E5EFE2] mb-10 border-b border-[#E5EFE2] pb-10">
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-12 h-12 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[13px] font-semibold text-[#1E4632] leading-snug">Subject<br/>Specialist</span>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-12 h-12 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[13px] font-semibold text-[#1E4632] leading-snug">Personalised<br/>Attention</span>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-12 h-12 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <span className="text-[13px] font-semibold text-[#1E4632] leading-snug">Supportive<br/>& Encouraging</span>
              </div>
            </div>

            <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-8 flex-1">
              Alka Ma'am is known for her clear explanations, patience and warm nature. She helps students build confidence, strengthen their fundamentals and achieve their goals with consistency.
            </p>

            <div className="bg-[#F4F8F4] rounded-2xl p-6 flex items-start gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-[#DCE4D7] text-[#1E4632] flex items-center justify-center flex-shrink-0 mt-1">
                <Leaf className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[11px] font-bold tracking-[0.15em] text-[#1E4632] mb-2">WHY STUDENTS LOVE HER</h4>
                <p className="text-[#1E4632]/80 text-sm leading-relaxed">
                  She makes learning simple, fun and stress-free. Her constant support and positive energy keep students motivated.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Pre-Section */}
      <section className="bg-[#F4F8F4] py-20 px-6 md:px-16 relative overflow-hidden">
        <Leaf className="absolute -bottom-16 -left-16 w-80 h-80 text-[#E5EFE2] -rotate-45 opacity-60" strokeWidth={0.5} />
        <Leaf className="absolute -bottom-16 -right-16 w-80 h-80 text-[#E5EFE2] rotate-45 opacity-60" strokeWidth={0.5} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-[#1E4632] text-3xl sm:text-4xl md:text-[2.75rem] font-bold mb-6">
            Together Towards a Brighter Future
          </h2>
          <p className="text-[#1E4632]/80 text-lg md:text-xl font-medium leading-relaxed">
            At Vidya Vatika, our teachers are more than just instructors —<br className="hidden md:block" />
            they are your guides, your supporters and your biggest cheerleaders.
          </p>
        </div>
      </section>
    </>
  );
}
