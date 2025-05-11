
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-light-gray to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block bg-white/50 backdrop-blur-sm py-1 px-3 rounded-full text-navy border border-navy/10">
              <p className="text-sm font-medium">Available for internships</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-navy">
              Hi, I'm <span className="text-primary">Naveen Joshi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-medium-gray">
              Computer Science Student
            </h2>
            <p className="text-lg text-medium-gray max-w-lg">
              A passionate software developer from Dehradun, focused on building efficient solutions using data structures and algorithms.
            </p>
            <div className="pt-4 space-x-4">
              <Button asChild className="bg-navy hover:bg-navy/80">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy/5">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-20"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-light-gray rounded-2xl overflow-hidden relative z-10">
                <div className="absolute inset-0 flex items-center justify-center text-navy/30 text-xl font-medium">
                  Naveen Joshi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
