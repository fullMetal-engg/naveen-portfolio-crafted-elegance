
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-navy font-heading font-bold text-xl">Naveen Joshi</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-navy hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-navy hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-navy hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-navy hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-navy hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block py-2 text-navy hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-2 text-navy hover:text-primary" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="block py-2 text-navy hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" className="block py-2 text-navy hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#contact" className="block py-2 text-navy hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
