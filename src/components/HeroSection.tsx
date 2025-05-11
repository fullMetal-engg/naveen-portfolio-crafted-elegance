
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-[#9b87f5]/20 blur-3xl"></div>
        <div className="absolute right-20 bottom-20 w-72 h-72 rounded-full bg-[#7E69AB]/10 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block bg-gradient-to-r from-[#9b87f5]/20 to-[#7E69AB]/20 backdrop-blur-sm py-1.5 px-4 rounded-full text-navy border border-[#9b87f5]/30 shadow-sm">
              <p className="text-sm font-medium">Available for internships</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-navy">
              Hi, I'm <span className="text-[#9b87f5] relative">
                Naveen Joshi
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#9b87f5]/20 -z-10 transform skew-x-3"></span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-medium-gray">
              Computer Science Student
            </h2>
            <p className="text-lg text-medium-gray max-w-lg">
              A passionate software developer from Dehradun, focused on building efficient solutions using data structures and algorithms.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4 py-2">
              <a href="https://github.com/fullMetal-engg" 
                 className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-[#9b87f5]/10 hover:border-[#9b87f5]/50 transition-all duration-300"
                 aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-navy" />
              </a>
              <a href="https://www.linkedin.com/in/naveen-joshi-52bb01287/"
                 className="p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-[#9b87f5]/10 hover:border-[#9b87f5]/50 transition-all duration-300"
                 aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-navy" />
              </a>
            </div>
            
            <div className="pt-4 space-x-4 flex flex-wrap gap-y-3">
              <Button asChild size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] shadow-lg hover:shadow-[#9b87f5]/20 transition-all">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy text-navy hover:bg-[#9b87f5]/10 hover:border-[#9b87f5] hover:text-[#7E69AB]">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Background gradient blob */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-2xl blur opacity-20"></div>
              
              {/* Profile container */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-light-gray rounded-2xl overflow-hidden relative z-10 border border-white/50 shadow-xl">
                <img 
                  src="/lovable-uploads/44e08ab9-d46a-48dc-ac0b-d8fb81626d02.png"
                  alt="Naveen Joshi"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#9b87f5]/10 rounded-full"></div>
              <div className="absolute -left-6 -top-6 w-16 h-16 bg-[#7E69AB]/15 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex">
          <span className="text-sm text-navy/50 mb-1">Scroll</span>
          <ArrowDown className="h-5 w-5 text-navy/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
