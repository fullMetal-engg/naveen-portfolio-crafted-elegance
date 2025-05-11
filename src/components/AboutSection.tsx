
import { FileText, MapPin, School } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-medium-gray text-lg leading-relaxed">
              I'm a second-year Computer Science Engineering student at Graphic Era Hill University, passionate about software development and algorithm design. With a strong foundation in programming and problem-solving, I'm eager to apply my skills to real-world challenges and continue learning new technologies.
            </p>
            <div className="flex items-center space-x-3 text-navy">
              <MapPin size={20} />
              <span>Dehradun, India</span>
            </div>
            <div className="pt-4 space-y-4">
              <h3 className="text-xl font-bold text-navy">Education</h3>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="mt-1">
                    <School size={24} className="text-navy" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy">B.Tech in Computer Science Engineering</h4>
                    <p className="text-medium-gray">Graphic Era Hill University</p>
                    <p className="text-sm text-medium-gray">2022 - 2027 (Expected)</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="mt-1">
                    <School size={24} className="text-navy" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy">High School</h4>
                    <p className="text-medium-gray">CSKM Public School, Delhi</p>
                    <p className="text-sm text-medium-gray">Graduated in 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                <FileText size={20} className="mr-2" />
                Additional Knowledge
              </h3>
              <ul className="space-y-3 text-medium-gray">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Foundational knowledge in Civil Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Electronics & Electrical Engineering basics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Microprocessor programming (8086 and 8085)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assembly language coding fundamentals</span>
                </li>
              </ul>
            </div>
            <div className="bg-navy/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Academic Focus</h3>
              <p className="text-medium-gray">
                Currently focusing on data structures, algorithms, and software development methodologies. Actively participating in coding challenges and collaborative projects to enhance practical skills alongside theoretical knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
