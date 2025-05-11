
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    category: "Programming Languages",
    items: ["C++", "C", "Java", "Python"]
  },
  {
    category: "Computer Science",
    items: ["Data Structures", "Algorithms", "Problem Solving"]
  },
  {
    category: "Engineering Knowledge",
    items: ["Civil Engineering Basics", "Electronics & Electrical Engineering", "Microprocessor Programming"]
  },
  {
    category: "Technical Skills",
    items: ["Assembly Language (8086, 8085)", "Algorithm Design"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-heading">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border border-gray-200 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-navy">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-light-gray p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-navy mb-4">Continuous Learning</h3>
          <p className="text-medium-gray">
            I'm constantly expanding my knowledge and skills through online courses, coding challenges, and personal projects. My goal is to become proficient in modern software development practices and contribute to innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
