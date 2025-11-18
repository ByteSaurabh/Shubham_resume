import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";

const research = [
  {
  title: "Wealth's Secret",
  journal: "IJSREM Journal",
  year: "2024",
  type: "Research Paper",
  description: "Wealth's Secret is a trading application similar to Groww, offering users trading functionalities along with detailed documentation to learn the basics of trading and understand financial concepts before investing.",
  tags : ["React Native", "Firebase", "Trading", "Finance"],
  status: "Published",
  icon: FileText,
  //link: "#"  // Add the DOI or publication link here
}
];

export const ResearchSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background Effects */}
      <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-32 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Research & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the advancement of technology through research publications and innovative solutions
          </p>
        </div>

        {/* Research Papers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
            <FileText className="mr-3" />
            Published Research
          </h3>
          
          <div className="space-y-6">
            {research.map((paper, index) => (
              <Card
                key={paper.title}
                className="glass-card p-8 hover:neon-border transition-all duration-500 group relative overflow-hidden"
              >
                {/* Digital Blueprint Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-primary via-transparent to-secondary transform rotate-45 blur-sm" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="outline" className="text-primary border-primary">
                          {paper.type}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          {paper.year}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={paper.status === 'Published' ? 'text-primary border-primary' : 'text-accent border-accent'}
                        >
                          {paper.status}
                        </Badge>
                      </div>
                      
                      <h4 className="text-xl font-bold mb-2 text-primary group-hover:gradient-text transition-all duration-300">
                        {paper.title}
                      </h4>
                      
                      <p className="text-muted-foreground font-medium mb-4">{paper.journal}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{paper.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {paper.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="glass-card text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="neon-glow hover:neon-border transition-all duration-300 group/btn">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Read Paper
                    </Button>
                    <Button variant="outline" className="glass-card hover:neon-border transition-all duration-300">
                      <FileText className="w-4 h-4 mr-2" />
                      Citations
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <div className="mt-20">
          <Card className="glass-card p-8 text-center hover:neon-border transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Research Impact</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Focused on developing practical solutions that bridge the gap between academic research and real-world applications, 
              contributing to sustainable technology and innovation.
            </p>
            <div className="flex justify-center gap-12 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">1+</div>
                <p className="text-muted-foreground text-sm">Publications</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">∞</div>
                <p className="text-muted-foreground text-sm">Innovation Potential</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};