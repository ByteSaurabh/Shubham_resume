import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Shield, Cloud } from "lucide-react";

const techAreas = [
  { icon: Brain, name: "Full Stack", description: "React, TypeScript, Tailwind, Next.js" },
  { icon: Cpu, name: "IoT, ML & Blockchain", description: "Smart Contracts, Distributed Systems, IoT Solutions, Machine Learning (Python, TensorFlow, Scikit-learn)" },
  { icon: Shield, name: "Cybersecurity", description: "Digital Forensics, Security Analysis, Risk Management" },
  { icon: Cloud, name: "DevOps & Cloud", description: "CI/CD, Docker, Cloud Architecture, Automation" }
];

export const AboutSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 gradient-text">
          About Me
        </h2>
        <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
          A passionate technologist exploring the intersection of AI, blockchain, and innovative solutions. 
          Dedicated to creating technology that makes a positive impact on society.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Story Card */}
        <Card className="glass-card p-8 hover:neon-border transition-all duration-500 group">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-pulse-glow" />
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From exploring the depths of artificial intelligence to diving into blockchain technology, 
              my journey has been driven by curiosity and the desire to solve real-world problems. 
              I specialize in creating innovative solutions that bridge the gap between cutting-edge 
              technology and practical applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="neon-border">Research</Badge>
              <Badge variant="outline" className="neon-border">Innovation</Badge>
              <Badge variant="outline" className="neon-border">Problem Solving</Badge>
            </div>
          </div>
        </Card>

        {/* Tech Areas */}
        <div className="space-y-4">
          {techAreas.map((area, index) => (
            <Card 
              key={area.name} 
              className="glass-card p-6 hover:neon-border transition-all duration-500 group hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-2">{area.name}</h4>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};