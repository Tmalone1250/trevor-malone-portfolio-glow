
import { motion } from 'framer-motion';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedGroup preset="blur-slide" className="max-w-4xl mx-auto text-center">
          <div>
            <TextEffect
              per="word"
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              preset="blur"
            >
              About Trevor
            </TextEffect>
          </div>
          
          <div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating digital solutions 
              that make a difference. I specialize in modern web technologies including React, Node.js, and cloud architecture.
            </p>
          </div>

          <div>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
              and creating user experiences that truly matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              className="p-6 rounded-2xl border bg-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-2xl border bg-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-2xl border bg-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </motion.div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
