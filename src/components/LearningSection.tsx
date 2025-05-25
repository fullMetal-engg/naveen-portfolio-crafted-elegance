
import { Calendar, BookOpen, Code, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const learningData = [
  {
    week: "Week 1",
    date: "Jan 1-7, 2024",
    topic: "Data Structures Fundamentals",
    description: "Deep dive into arrays, linked lists, and basic operations. Implemented various sorting algorithms including bubble sort, selection sort, and insertion sort.",
    technologies: ["C++", "Algorithms", "Big O Notation"],
    icon: <Code className="h-5 w-5" />
  },
  {
    week: "Week 2", 
    date: "Jan 8-14, 2024",
    topic: "Stack and Queue Implementation",
    description: "Built stack and queue data structures from scratch. Solved problems like balanced parentheses, infix to postfix conversion, and BFS/DFS traversals.",
    technologies: ["C++", "Problem Solving", "Graph Theory"],
    icon: <Brain className="h-5 w-5" />
  },
  {
    week: "Week 3",
    date: "Jan 15-21, 2024", 
    topic: "Trees and Binary Search Trees",
    description: "Understanding tree traversals (inorder, preorder, postorder), BST operations, and solving tree-based coding problems on various platforms.",
    technologies: ["Data Structures", "Recursion", "Tree Algorithms"],
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    week: "Week 4",
    date: "Jan 22-28, 2024",
    topic: "Dynamic Programming Basics",
    description: "Introduction to DP concepts with classic problems like Fibonacci, coin change, and longest common subsequence. Understanding memoization vs tabulation.",
    technologies: ["Algorithms", "Problem Solving", "Optimization"],
    icon: <Code className="h-5 w-5" />
  }
];

const LearningSection = () => {
  return (
    <section id="learning" className="bg-gradient-to-br from-[#9b87f5]/5 to-[#7E69AB]/10 py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <p className="text-medium-gray max-w-2xl mx-auto">
            A weekly documentation of my learning progress, exploring new concepts and building stronger foundations in computer science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {learningData.map((item, index) => (
            <Card 
              key={index} 
              className="border border-[#9b87f5]/20 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-[#9b87f5]/10 transition-all duration-300 animate-fade-in group" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-full group-hover:from-[#9b87f5]/30 group-hover:to-[#7E69AB]/30 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-navy">{item.week}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-medium-gray">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-navy mb-2 group-hover:text-[#7E69AB] transition-colors">
                    {item.topic}
                  </h3>
                  <p className="text-medium-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="bg-gradient-to-r from-[#9b87f5]/10 to-[#7E69AB]/10 border-[#9b87f5]/30 text-navy hover:from-[#9b87f5]/20 hover:to-[#7E69AB]/20 transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9b87f5]/20 rounded-full px-6 py-3 shadow-sm">
            <BookOpen className="h-5 w-5 text-[#9b87f5]" />
            <span className="text-navy font-medium">Current Focus: Advanced Data Structures & Algorithms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
