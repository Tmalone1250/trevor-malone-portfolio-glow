
import { motion } from 'framer-motion';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    status: "Live",
    link: "#"
  },
  {
    title: "Task Management SaaS",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    status: "In Development",
    link: "#"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Machine learning dashboard for business intelligence with predictive analytics, data visualization, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Python", "React", "TensorFlow", "AWS"],
    status: "Live",
    link: "#"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tags: ["React Native", "Node.js", "Redis", "Microservices"],
    status: "Live",
    link: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <TextEffect
            per="word"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            preset="blur"
          >
            Featured Projects
          </TextEffect>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent work spanning web applications, mobile solutions, and innovative digital experiences
          </p>
        </div>

        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-card rounded-2xl border overflow-hidden shadow-sm"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button asChild className="group/btn">
                  <a href={project.link}>
                    View Project
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
