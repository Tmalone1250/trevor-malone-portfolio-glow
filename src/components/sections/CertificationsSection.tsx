
import { motion } from 'framer-motion';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    status: "Active",
    description: "Professional level certification for designing distributed systems on AWS"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    status: "Active", 
    description: "Advanced certification for developing scalable applications on Google Cloud Platform"
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    status: "Active",
    description: "Expert-level certification for Kubernetes cluster administration"
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    status: "Active",
    description: "Professional certification for advanced React development skills"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <TextEffect
            per="word"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            preset="blur"
          >
            Certifications & Credentials
          </TextEffect>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-2xl border p-8 shadow-sm"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary" className="mb-2">
                  {cert.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-primary font-medium mb-3">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
