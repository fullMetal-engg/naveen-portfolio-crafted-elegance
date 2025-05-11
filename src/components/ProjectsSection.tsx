
import { ArrowRight, Code, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Friend Recommendation System",
    description: "A system that suggests friends based on common interests or mutual connections, optimizing social networking experiences.",
    icon: <Users className="h-12 w-12 text-navy/70" />,
    tools: ["C++", "Data Structures", "Graph Algorithms"],
    status: "In Progress"
  },
  {
    title: "Student Performance Analyzer",
    description: "A tool that analyzes student performance based on various parameters to provide insights for educational improvement.",
    icon: <Code className="h-12 w-12 text-navy/70" />,
    tools: ["Python", "Data Analysis", "Visualization"],
    status: "In Progress"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-light-gray py-16">
      <div className="section-container">
        <h2 className="section-heading">Projects</h2>
        <p className="text-medium-gray max-w-2xl mb-8">
          Here are some of my ongoing projects that demonstrate my technical skills and interests.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-navy font-bold">{project.title}</CardTitle>
                    <CardDescription className="text-medium-gray mt-1">{project.status}</CardDescription>
                  </div>
                  <div>{project.icon}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">{project.description}</p>
                <div className="mt-4 space-x-2 space-y-2">
                  {project.tools.map((tool, i) => (
                    <Badge key={i} variant="outline" className="bg-white text-navy border-navy/20">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <a href="#" className="text-primary flex items-center text-sm font-medium hover:underline">
                  <span>Project details</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-medium-gray italic">
            More projects coming soon as I progress in my academic journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
