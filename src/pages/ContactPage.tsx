import { MapPin, Phone, Clock, BookOpen, Users, Leaf } from "lucide-react";

export function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative w-full overflow-hidden bg-[#FAFDF9]">
        {/* Background Books Banner */}
        <div className="absolute inset-0 z-0 h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFDF9] via-[#FAFDF9]/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/3 bg-[url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-right bg-no-repeat opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16 pt-24 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold tracking-[0.25em] mb-4 text-[#1E4632]">GET IN TOUCH</p>
            <h2 className="font-serif text-[#1E4632] text-5xl md:text-[4.5rem] leading-[1.1] mb-6 font-bold">
              Contact Us
            </h2>
            <p className="text-[#1E4632]/80 text-lg md:text-xl font-medium mb-10 leading-relaxed">
              We're here to help! Reach out to us for any queries about admissions, courses, or general information.
            </p>
            <div className="text-[#325240] font-serif text-3xl md:text-4xl italic -rotate-3 transform translate-y-2">
              We'd love to hear from you!
              <svg className="w-48 h-4 mt-1 text-[#325240]" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2 15C50 5 150 5 198 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          
          <div className="mt-16 md:mt-0 relative hidden sm:block">
            {/* Stack of books visual */}
            <div className="relative bg-[#1E4632] text-white p-8 rounded shadow-2xl border border-[#325240] w-[260px] transform -rotate-2">
               <div className="font-serif text-[1.75rem] leading-tight mb-8 font-medium">
                 Better<br/>Learning<br/>Brighter<br/>Future
               </div>
               <div className="flex justify-end">
                 <BookOpen className="w-10 h-10 text-[#C1D2B9]" strokeWidth={1.5} />
               </div>
            </div>
            {/* Decorative book elements underneath */}
            <div className="absolute -bottom-5 -left-8 w-[280px] h-8 bg-[#6B9071] rounded-sm shadow-md border border-[#527056] -z-10 transform rotate-1">
               <div className="w-full h-full border-b-4 border-white/20 rounded-sm"></div>
            </div>
            <div className="absolute -bottom-10 -left-4 w-[300px] h-9 bg-[#527056] rounded-sm shadow-lg border border-[#3e5541] -z-20 transform -rotate-1">
               <div className="w-full h-full border-b-4 border-white/20 rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#FAFDF9] py-20 px-6 md:px-16 border-t border-[#E5EFE2]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#1E4632]">OUR CONTACT DETAILS</span>
              <div className="h-[1px] flex-1 bg-[#E5EFE2]"></div>
            </div>
            
            <h2 className="font-serif text-[#1E4632] text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-[#1E4632]/80 text-lg leading-relaxed mb-12">
              We're always happy to answer your questions and help you with any information you need.
            </p>

            <div className="flex flex-col gap-10">
              {/* Address */}
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="font-serif text-[1.35rem] font-bold text-[#1E4632] mb-2">Address</h4>
                  <p className="text-[#1E4632]/80 leading-relaxed text-[15px]">
                    Vidya Vatika Academy<br />
                    123 Green Valley Road,<br />
                    Near Shanti Nagar, Sector 18,<br />
                    Indore, Madhya Pradesh – 452010
                  </p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#E5EFE2]"></div>

              {/* Phone */}
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="font-serif text-[1.35rem] font-bold text-[#1E4632] mb-2">Phone</h4>
                  <p className="text-[#1E4632] font-bold text-lg mb-1">+91 98765 43210</p>
                  <p className="text-[#1E4632]/80 text-[15px]">(Mon – Sat, 9:00 AM – 5:00 PM)</p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#E5EFE2]"></div>

              {/* Working Hours */}
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-[#E5EFE2] text-[#1E4632] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="font-serif text-[1.35rem] font-bold text-[#1E4632] mb-2">Working Hours</h4>
                  <p className="text-[#1E4632]/80 leading-relaxed text-[15px]">
                    We are available from Monday to Saturday,<br />
                    9:00 AM to 5:00 PM.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-6 relative">
               <Leaf className="w-10 h-10 text-[#C1D2B9] absolute -left-2 -z-10 -rotate-45" strokeWidth={2} fill="#C1D2B9" opacity={0.5} />
               <div className="h-[1px] w-16 bg-[#E5EFE2]"></div>
               <p className="italic text-[#1E4632]/90 font-serif text-lg">
                 Your child's growth is <span className="font-bold">our priority</span>
               </p>
            </div>
          </div>

          {/* Right Column: Visit Us Card */}
          <div className="bg-[#F4F8F4] rounded-[2rem] p-10 md:p-12 border border-[#E5EFE2] relative overflow-hidden h-fit mt-8 lg:mt-0 shadow-sm">
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#1E4632]">VISIT US</span>
              <div className="h-[1px] w-12 bg-[#DCE4D7]"></div>
            </div>
            
            <h3 className="font-serif text-[#1E4632] text-4xl md:text-[2.75rem] font-bold mb-6 relative z-10">
              We'd Love to<br />See You!
            </h3>
            
            <p className="text-[#1E4632]/80 text-[15px] leading-relaxed mb-10 relative z-10">
              Feel free to visit our academy during working hours. We'd be happy to show you around, answer your questions, and discuss how we can support your child's learning journey.
            </p>

            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#DCE4D7]/50 border border-[#DCE4D7] text-[#1E4632] flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-0.5">
                  <h4 className="font-serif text-[1.15rem] font-bold text-[#1E4632] mb-1">Quality Education</h4>
                  <p className="text-[#1E4632]/80 text-[13px] leading-relaxed">Strong foundation for<br />a brighter future.</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#DCE4D7]/50 border border-[#DCE4D7] text-[#1E4632] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-0.5">
                  <h4 className="font-serif text-[1.15rem] font-bold text-[#1E4632] mb-1">Experienced Teachers</h4>
                  <p className="text-[#1E4632]/80 text-[13px] leading-relaxed">Guidance from passionate<br />and dedicated educators.</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#DCE4D7]/50 border border-[#DCE4D7] text-[#1E4632] flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col pt-0.5">
                  <h4 className="font-serif text-[1.15rem] font-bold text-[#1E4632] mb-1">Supportive Environment</h4>
                  <p className="text-[#1E4632]/80 text-[13px] leading-relaxed">A safe, positive and inspiring<br />space for every learner.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center relative z-10">
              <div className="text-[#325240] font-serif text-[1.35rem] italic transform -rotate-3 flex items-center gap-2">
                Together Towards <br/>a Brighter Future
                <Leaf className="w-6 h-6 text-[#325240]" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/60 rounded-bl-[120px] -z-0"></div>
          </div>

        </div>
      </section>
    </>
  );
}
