import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Project Manager IT",
    company: "Design Source",
    period: "March 2024 - Present",
    location: "On-Site",
    responsibilities: [
      "Created detailed project timelines, Gantt charts, and critical path plans using Microsoft Project",
      "Automated data collection processes using Excel (advanced formulas) and integrated with ERP systems",
      "Collaborated with cross-functional teams (production, procurement, planning, QA) to standardize and streamline reporting formats",
      "Trained staff on MIS tools and conducted troubleshooting for data/reporting issues"
    ],
    tags: ["Project Management", "Microsoft Project", "Excel", "ERP Systems", "MIS", "Team Collaboration"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background Effects */}
      <div className="absolute top-20 right-32 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey building innovative solutions and leading technical projects
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className="glass-card p-8 hover:neon-border transition-all duration-500 group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              
              {/* Icon */}
              <div className="absolute top-6 right-6">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary group-hover:gradient-text transition-all duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                    <span className="text-lg font-semibold text-secondary">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="glass-card text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Animated Lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-4 left-4 w-1 h-1 bg-primary rounded-full animate-ping" />
                <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
