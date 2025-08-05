
import { motion } from 'framer-motion';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import mediaImg from '@/components/assets/media.png';
import media2Img from '@/components/assets/media2.png';
import media3Img from '@/components/assets/og-image.png';

const projects = [
  {
    title: "Leno AI",
    description: "Developed Leno AI, an open-source, modular multi-agent framework for building and testing advanced AI systems. It empowers developers and researchers to orchestrate intelligent agents, integrating with tools like Google's Agent Development Kit (ADK) and supporting real-world API connections. Leno AI is designed for educational purposes, fostering community contribution to accelerate innovation in multi-agent AI. (https://lenoai.dev, https://github.com/tmalone1250/lenoai)",
    image: "https://github.com/Tmalone1250/lenoai/blob/main/media/logo.jpg?raw=true",
    tags: ["React", "Node.js", "PostgreSQL", "Python", "FastAPI", "Flask", "TailwindCSS", "Google ADK", "API", "AI Agnets", "Web3"],
    status: "Live",
    link: "https://lenoai.dev"
  },
  {
    title: "LENOAI Stake Rewards dApp",
    description: "This project is a decentralized application (dApp) demonstrating core DeFi staking mechanisms. It builds upon existing smart contracts: a custom ERC-20 token (LenoToken) with advanced features (access control, pausing, blacklist) and a Faucet contract for token distribution.",
    image: mediaImg,
    tags: ["React", "TypeScript", "TailwindCSS", "Ethers.js", "Web3-React", "Solidity"],
    status: "Live",
    link: "https://lenoai-stake-rewards-dapp.vercel.app/"
  },
  {
    title: "DeFi Vault dApp",
    description: "Designed and built Defi Vault dApp, a simulated DeFi yield farming protocol on the Ethereum Sepolia Testnet. This dApp allows users to deposit a test stablecoin (e.g., USDC), receive proportional vault shares in return, and earn simulated yield over time. The project demonstrates the fundamental mechanics of a real-world DeFi vault, including proportional share calculation, yield accrual, and the secure approve/transferFrom pattern.",
    image: "/lovable-uploads/fd8dcdfb-2aa5-4c64-b3e3-00df4d44e1a0.png",
    tags: ["Solidity", "React", "TailwindCSS", "Ethers.js", "MetaMask", "Sepolia Testnet", "ERC20 & Ownable"],
    status: "Live",
    link: "#"
  },
  {
    title: "DeFi Lending Pool",
    description: "A decentralized finance (DeFi) application built on the Ethereum Sepolia testnet that allows users to earn interest on USDC deposits. This project showcases smart contract development in Solidity, per-user interest accounting, and a modern Web3 frontend with MetaMask integration. Users can deposit, withdraw partially or fully, and track real-time earnings from a simulated interest rate system.",
    image: "/lovable-uploads/ada13442-bab8-4ee8-9aae-7924f931c658.png",
    tags: ["Solidity", "React", "TailwindCSS", "Ethers.js", "MetaMask", "Sepolia Testnet"],
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
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="/projects">
              View All Projects
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
