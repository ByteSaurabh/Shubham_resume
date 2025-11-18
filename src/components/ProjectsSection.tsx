import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap } from "lucide-react";

const projects = [
  {
    title: "React Native Video Player App",
    description: "Cross-platform video player with advanced features including play, pause, resume, saved playback position, and full-screen mode. Built with custom media controls and optimized performance.",
    tech: ["React Native", "Expo", "React Hooks", "Video API", "Local Storage"],
    category: "Mobile App",
    status: "Live",
    color: "primary",
    liveDemo: "#"
  },
  {
    title: "Full-Stack Authentication App",
    description: "Secure mobile authentication system with sign-up, login, and OTP verification. Features real-time validation, pop-up notifications, and MySQL database integration for efficient user credential management.",
    tech: ["React Native", "Next.js", "MySQL", "OTP Verification", "Authentication"],
    category: "Full-Stack",
    status: "Live",
    color: "secondary",
    liveDemo: "#"
  },
  {
    title: "Rail Madad AI Classifier",
    description: "AI-powered complaint classification system for Indian Railways, automatically categorizing and prioritizing customer complaints.",
    tech: ["Python", "TensorFlow", "NLP", "FastAPI", "ML"],
    category: "AI/ML",
    status: "Live",
    color: "secondary",
    liveDemo: "#"
  },
  {
    title: "Meme ToDo App",
    description: "Gamified productivity app that makes task management fun with meme rewards and social features for motivation.",
    tech: ["React Native", "Firebase", "API Integration"],
    category: "Mobile App",
    status: "Beta",
    color: "accent",
    liveDemo: "#"
  },
  {
    title: "Sharehood Platform",
    description: "Community sharing platform enabling neighbors to share resources, tools, and services within local communities.",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    category: "Social Platform",
    status: "Live",
    color: "secondary",
    liveDemo: "#"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background Effects */}
      <div className="absolute top-32 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 right-32 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }} />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Project Universe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my collection of innovative projects spanning AI, blockchain, web development, and beyond
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card p-6 hover:neon-border transition-all duration-500 group relative overflow-hidden hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Glow Effect */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-${project.color}/10 rounded-full blur-xl group-hover:bg-${project.color}/20 transition-all duration-500`} />
              
              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                <Badge 
                  variant="outline" 
                  className={`text-xs ${project.status === 'Live' ? 'text-primary border-primary' : 
                    project.status === 'Beta' ? 'text-accent border-accent' : 'text-secondary border-secondary'}`}
                >
                  <Zap className="w-3 h-3 mr-1" />
                  {project.status}
                </Badge>
              </div>

              <div className="relative z-10">
                {/* Project Category */}
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Title */}
                <h3 className={`text-xl font-bold mb-3 text-${project.color} group-hover:gradient-text transition-all duration-300`}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs glass-card hover:neon-border transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button 
                      size="sm" 
                      className="w-full neon-glow hover:neon-border transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Live Demo
                    </Button>
                  </a>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="glass-card hover:neon-border transition-all duration-300 group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Hover Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute top-6 left-6 w-1 h-1 bg-${project.color} rounded-full animate-ping`} />
                <div className={`absolute bottom-8 right-8 w-1.5 h-1.5 bg-${project.color} rounded-full animate-ping`} style={{ animationDelay: '0.5s' }} />
                <div className={`absolute top-1/2 right-4 w-0.5 h-0.5 bg-${project.color} rounded-full animate-ping`} style={{ animationDelay: '1s' }} />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card p-8 max-w-2xl mx-auto hover:neon-border transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Want to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative projects that push the boundaries of technology.
            </p>
            <a href="#contact" className="block">
              <Button size="lg" className="neon-glow hover:neon-border transition-all duration-300">
                Let's Build Something Amazing
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};