import { motion } from 'framer-motion';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
export function AboutSection() {
  return <section id="about" className="py-24 bg-background">
    <div className="mx-auto max-w-7xl px-6">
      <AnimatedGroup preset="blur-slide" className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <img src="/lovable-uploads/90d8bb69-1435-4fb9-bc2f-d6c68cf90109.png" alt="Trevor Malone" className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-[center_20%] border-4 border-primary shadow-lg mb-6 mx-auto" />
          <TextEffect per="word" as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" preset="blur">
            About Trevor
          </TextEffect>
        </div>

        {/* --- REPLACED PARAGRAPHS START --- */}
        <div className="text-xl text-muted-foreground mb-8 leading-relaxed text-left md:text-center"> {/* Adjusted text alignment */}
          <p className="mb-4">
            My name is Trevor Malone, and I am a dedicated Software and AI Engineer with a fervent passion for the transformative power of Blockchain technology. My career path has been shaped by a relentless curiosity and a drive to build sophisticated, intelligent systems from the ground up.
          </p>
          <p className="mb-4">
            I possess a robust background in full-stack development, proficient in crafting dynamic user interfaces with React and TypeScript and architecting scalable backends using Python (FastAPI, Flask) and Node.js. This comprehensive skill set allows me to approach development holistically, from initial concept to deployment.
          </p>
          <p className="mb-4">
            A significant part of my journey involves pioneering AI solutions. As the Open Source Project Lead for Leno AI, I designed and launched a modular multi-agent framework, demonstrating my capability to orchestrate complex AI behaviors, integrate diverse LLM APIs, and apply advanced prompt engineering techniques for precise, structured outputs. My contributions to projects like Marvel AI at Reality Agent Lab further highlight my practical experience in AI agent development.
          </p>
          <p>Now, I am intensely focused on the Web3 space, and have recently completed the DeFi (Decentralized Finance) For Everyone certification, through Coursera. This builds upon my proven experience in smart contract development (Solidity), ERC-20 token creation (LENOAI, VANGAI on Ethereum testnet), and building interactive decentralized applications (dApps) with seamless MetaMask and Ethers.js integration. My goal is to leverage this unique blend of AI and blockchain expertise to innovate within the decentralized ecosystem, creating secure, efficient, and impactful Web3 solutions. I am eager to join a forward-thinking team where I can apply my skills to build the future of decentralized technology.</p>
        </div>
        {/* --- REPLACED PARAGRAPHS END --- */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div className="p-6 rounded-2xl border bg-card" whileHover={{
            scale: 1.05
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}>
            <div className="text-3xl font-bold text-primary mb-2">6+</div> {/* Updated to 6+ years from resume */}
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </motion.div>

          <motion.div className="p-6 rounded-2xl border bg-card" whileHover={{
            scale: 1.05
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}>
            <div className="text-3xl font-bold text-primary mb-2">10+</div> {/* Projects with significant AI/Blockchain focus */}
            <div className="text-sm text-muted-foreground">AI & Web3 Projects</div>
          </motion.div>

          <motion.div className="p-6 rounded-2xl border bg-card" whileHover={{
            scale: 1.05
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}>
            <div className="text-3xl font-bold text-primary mb-2">4+</div> {/* Certifications in relevant fields */}
            <div className="text-sm text-muted-foreground">Specialized Certs</div>
          </motion.div>
        </div>
      </AnimatedGroup>
    </div>
  </section>;
}