
import { HeroSection } from '@/components/ui/hero-section-1';
import { AboutSection } from '@/components/sections/AboutSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      
      <footer className="bg-background border-t py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
              TM
            </div>
            <p className="text-muted-foreground mb-4">
              Full Stack Software, AI, & Blockchain Developer | Digital Solutions Architect
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Trevor Malone. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
