
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    // Here you would typically send the data to a server
  };

  return (
    <section id="contact" className="bg-light-gray py-16">
      <div className="section-container">
        <h2 className="section-heading">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-medium-gray">
              Feel free to reach out if you'd like to connect, discuss potential projects, or just have a chat about technology and software development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Mail className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-medium-gray">Email</p>
                  <a href="mailto:naveenjoshi270@gmail.com" className="text-navy hover:text-primary">naveenjoshi270@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Phone className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-medium-gray">Phone</p>
                  <a href="tel:+918700545686" className="text-navy hover:text-primary">+91 8700 545 686</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Linkedin className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-medium-gray">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/naveen-joshi-52bb01287/" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-primary">Naveen Joshi</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Github className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-medium-gray">GitHub</p>
                  <p className="text-navy">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-navy mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-navy">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-gray-200 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-navy">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="border-gray-200 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-navy">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="min-h-[120px] border-gray-200 focus:border-primary"
                />
              </div>
              
              <Button type="submit" className="w-full bg-navy hover:bg-navy/80">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
