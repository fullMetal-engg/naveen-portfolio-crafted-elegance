
import { Calendar, BookOpen, Code, Brain, Users, Mail, Presentation, MessageSquare, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const learningData = [
  {
    week: "Week 1",
    date: "Jan 1-7, 2024",
    topic: "Self-Reflection & Interview Prep",
    description: "Discussed about Understanding your strengths and weaknesses helps you grow. Realizing what motivates you and how you respond to success and failure builds emotional intelligence. Mistakes and failures aren't setbacks—they're learning opportunities. Being a 'work-in-progress' mindset helps you stay open to feedback and improvement. Learning to manage time, overthinking, or perfectionism is key to becoming more effective. Knowing how to deal with criticism makes you more resilient. Staying calm, patient, and adaptable leads to better decision-making and leadership. Balancing risk and stability is an essential life skill, especially in career and personal growth.",
    technologies: ["Self-Assessment", "Interview Skills", "Personal Growth"],
    icon: <Brain className="h-5 w-5" />
  },
  {
    week: "Week 2", 
    date: "Jan 8-14, 2024",
    topic: "Self-Awareness & Interview Skills",
    description: "Discussed how to confidently introduce ourselves in interviews and formal settings. Explored ways to highlight our strengths while thoughtfully framing our weaknesses. Reflected on constructive criticism from others and how to turn it into personal growth. Talked about learning from failure—seeing mistakes as lessons rather than setbacks. Discussed how to handle success with humility and use it as fuel for further progress. Analyzed different aspects of our personality—like patience, aggression, calmness—and what they reveal about us. Used creative comparisons (to people or objects) to understand our behavior better. Opened up about tough challenges we've faced and how we managed to overcome them. Shared meaningful compliments we've received and what they say about our strengths. Gained insight into commonly asked interview questions and how to respond effectively.",
    technologies: ["Self-Awareness", "Communication", "Interview Preparation"],
    icon: <Brain className="h-5 w-5" />
  },
  {
    week: "Week 3",
    date: "Jan 15-21, 2024", 
    topic: "Self-Reflection & Interview Prep",
    description: "Discussed about Understanding your strengths and weaknesses helps you grow. Realizing what motivates you and how you respond to success and failure builds emotional intelligence. Mistakes and failures aren't setbacks—they're learning opportunities. Being a 'work-in-progress' mindset helps you stay open to feedback and improvement. Learning to manage time, overthinking, or perfectionism is key to becoming more effective. Knowing how to deal with criticism makes you more resilient. Staying calm, patient, and adaptable leads to better decision-making and leadership. Balancing risk and stability is an essential life skill, especially in career and personal growth.",
    technologies: ["Self-Reflection", "Emotional Intelligence", "Growth Mindset"],
    icon: <Brain className="h-5 w-5" />
  },
  {
    week: "Week 4",
    date: "Jan 22-28, 2024",
    topic: "Presentation & Communication Skills",
    description: "Learned how to structure presentations for clarity and audience engagement. Discussed ways to overcome stage fear through confidence-building exercises. Practiced using effective body language and voice modulation to boost impact. Explored techniques to explain situations clearly using real-life examples. Understood the importance of maintaining eye contact to connect with the audience. Learned how to handle unexpected questions during presentations calmly and confidently. Focused on time management to deliver short, meaningful presentations. Incorporated humor and storytelling to make speeches more engaging and memorable. Worked in teams to improve group discussion and collaborative communication skills. Received personalized feedback to improve our presentation style and delivery.",
    technologies: ["Public Speaking", "Body Language", "Storytelling"],
    icon: <Presentation className="h-5 w-5" />
  },
  {
    week: "Week 5",
    date: "Jan 29 - Feb 4, 2024",
    topic: "Speech Practice",
    description: "Gained confidence speaking in front of a group through regular practice. Learned how to organize speech content with a clear introduction, body, and conclusion. Practiced using pauses, tone variation, and emphasis to keep the audience engaged. Worked on eliminating filler words like 'um,' 'like,' and 'you know.' Improved pronunciation and clarity for better understanding. Understood the value of rehearsing and timing a speech before delivery. Developed techniques to calm nerves and manage anxiety before speaking. Used real-life examples and personal stories to make speeches more relatable. Received feedback on delivery style, body language, and voice control. Learned how to end a speech effectively with a strong message or call-to-action.",
    technologies: ["Speech Delivery", "Voice Control", "Confidence Building"],
    icon: <MessageSquare className="h-5 w-5" />
  },
  {
    week: "Week 6",
    date: "Feb 5-11, 2024",
    topic: "Cover Letter Writing",
    description: "Learned the purpose and importance of a cover letter in job applications. Understood how to structure a professional cover letter with proper format. Practiced writing customized cover letters tailored to specific job roles. Explored ways to highlight key achievements and skills relevant to the position. Learned how to write a compelling opening paragraph to catch the employer's attention. Used action words and professional tone to show enthusiasm and confidence. Focused on aligning personal strengths with the company's needs and values. Improved grammar, spelling, and formatting for a polished presentation. Included contact details and a proper closing statement to leave a lasting impression. Received feedback and revised drafts to strengthen our final versions.",
    technologies: ["Professional Writing", "Job Applications", "Career Skills"],
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    week: "Week 7",
    date: "Feb 12-18, 2024",
    topic: "Email Writing",
    description: "Learned the importance of professional email communication in academic and work settings. Understood proper email structure: subject line, greeting, body, and closing. Practiced writing clear and concise email messages with a formal tone. Focused on writing effective subject lines that reflect the purpose of the email. Learned the difference between formal and informal email styles. Used polite and respectful language when making requests or following up. Improved grammar, punctuation, and formatting for professional presentation. Practiced sending emails for different scenarios: job applications, inquiries, and follow-ups. Learned to attach documents and use CC/BCC appropriately. Received feedback to improve clarity, tone, and effectiveness of emails.",
    technologies: ["Professional Communication", "Email Etiquette", "Business Writing"],
    icon: <Mail className="h-5 w-5" />
  },
  {
    week: "Week 8",
    date: "Feb 19-25, 2024",
    topic: "Group Discussion",
    description: "Learned the importance of teamwork and active participation in group discussions. Practiced expressing opinions clearly and respectfully in a group setting. Improved listening skills to understand others' viewpoints before responding. Developed techniques to stay on topic and keep discussions focused. Learned how to manage conflicts and disagreements constructively. Practiced balancing speaking time to allow everyone to contribute. Understood the role of body language and tone in group communication. Worked on building consensus and summarizing key points effectively. Learned to support teammates with positive feedback and encouragement. Received feedback on communication style and group dynamics for improvement.",
    technologies: ["Team Collaboration", "Conflict Resolution", "Active Listening"],
    icon: <Users className="h-5 w-5" />
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
            A weekly documentation of my learning progress in professional development and communication skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
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

        {/* PESE Class Summary */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border border-[#9b87f5]/20 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-full">
                  <BookOpen className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-navy">PESE Class – 25 Key Learnings</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-medium-gray text-sm leading-relaxed">
                <p className="mb-4"><strong>1. Self-Introduction</strong><br />
                Learned how to confidently introduce myself in formal settings. Understood the importance of first impressions. Practiced structuring a strong personal introduction.</p>
                
                <p className="mb-4"><strong>2. Reflection & Interview Preparation</strong><br />
                Identified my strengths and areas for improvement. Learned to reflect on past experiences for better growth. Prepared answers for common interview questions. Built confidence for real interview situations.</p>
                
                <p className="mb-4"><strong>3. Self-Awareness & Interview Skills</strong><br />
                Developed self-awareness through reflection activities. Practiced eye contact and positive body language. Improved my listening and questioning skills. Learned the STAR method for answering interview questions.</p>
                
                <p className="mb-4"><strong>4. Presentation & Communication Skills</strong><br />
                Improved my public speaking skills. Learned to structure a clear and engaging presentation. Developed better verbal and non-verbal communication. Practiced using visual aids during presentations.</p>
                
                <p className="mb-4"><strong>5. Speech Practice</strong><br />
                Gained confidence while delivering speeches in front of others. Learned how to control nervousness and voice modulation. Practiced organizing speech content effectively.</p>
                
                <p className="mb-4"><strong>6. Email Writing & Cover Letter</strong><br />
                Understood proper email formatting and etiquette. Learned how to write a professional subject line and greeting. Practiced writing personalized cover letters for job applications.</p>
                
                <p><strong>7. Group Discussion</strong><br />
                Improved my ability to speak up in a group setting. Learned to respect and listen to others' opinions. Practiced staying on topic and thinking critically.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Movie Review Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border border-[#9b87f5]/20 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-full">
                  <Star className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-navy">Movie Review</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-navy mb-3">Harry Potter and the Philosopher's Stone</h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                A magical masterpiece that perfectly introduces us to the wizarding world. Daniel Radcliffe's portrayal of Harry Potter captures the wonder and innocence of a boy discovering his extraordinary destiny. The film beautifully balances adventure, friendship, and mystery while establishing the rich mythology of Hogwarts. Chris Columbus's direction creates an enchanting atmosphere that appeals to both children and adults. The visual effects, though dated by today's standards, still hold charm. Emma Watson and Rupert Grint shine as Hermione and Ron, creating an unforgettable trio. This film laid the foundation for one of cinema's most beloved franchises, proving that magic truly exists on screen.
              </p>
              <div className="mt-4">
                <Badge variant="outline" className="bg-gradient-to-r from-[#9b87f5]/10 to-[#7E69AB]/10 border-[#9b87f5]/30 text-navy">
                  ⭐⭐⭐⭐⭐ 5/5 Stars
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9b87f5]/20 rounded-full px-6 py-3 shadow-sm">
            <BookOpen className="h-5 w-5 text-[#9b87f5]" />
            <span className="text-navy font-medium">Current Focus: Professional Development & Communication Skills</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
