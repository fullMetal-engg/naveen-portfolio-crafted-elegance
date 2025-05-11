
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:flex md:justify-between md:items-center">
          <p className="text-white/80 mb-4 md:mb-0">&copy; {currentYear} Naveen Chandra Joshi. All rights reserved.</p>
          <div className="space-x-6">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
