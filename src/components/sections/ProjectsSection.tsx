
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
    title: "Alchemy Guild",
    description: "A DeFi yield generation platform that combines NFT staking with automated Uniswap V3 liquidity provision. Mint elemental NFTs across three rarity tiers (Lead, Silver, Gold), stake them in the Yield Vault, and earn USDC from trading fees. Features 18 unique elements with different staking weights, automated yield distribution, instant claims with 20% USDC reserve, and a 24/7 autonomous bot that generates volume and manages liquidity. Built on Ethereum Sepolia with production-ready smart contracts.",
    image: "/alchemy-guild-logo.png",
    tags: ["Solidity", "React", "TypeScript", "Ethers.js", "Uniswap V3", "NFT", "DeFi", "RainbowKit", "Wagmi", "TailwindCSS", "Foundry"],
    status: "Live",
    link: "https://alchemy-vault.vercel.app"
  },
  {
    title: "KinetiFi (Autonomous DeFi Orchestrator)",
    description: "A full-stack automation experiment that bridges the gap between LLM reasoning and blockchain finality. I built this to demonstrate a Sovereign Execution model where an AI agent scans the ecosystem for yield and generates \"Intents\" for a smart vault to fulfill. The architecture features a FastAPI backend for agentic logic and a Next.js/Wagmi frontend that visualizes real-time \"Efficiency Scores.\" It successfully overcomes typical DeFi hurdles like complex onboarding through Account Abstraction and deterministic identity.",
    image: "/kinetifi-hero.png",
    tags: ["Solidity", "Foundry", "Python", "FastAPI", "Web3.py", "React", "Next.js", "Wagmi", "Shadcn"],
    status: "In Progress",
    link: "https://github.com/Tmalone1250/kineti-fi"
  },
  {
    title: "Snorkel AI — Project Terminus",
    description: "Contributing to the development of advanced evaluation frameworks for autonomous AI agents. Engineers complex, multi-step software engineering scenarios to assess LLM reasoning and problem-solving capabilities. Builds isolated, reproducible test environments using Docker and Docker Compose for secure agentic workflow execution. Develops deterministic testing suites and verification scripts in Python and Bash, and conducts rigorous quality assessments focused on technical accuracy, environment stability, and documentation clarity.",
    image: "/snorkel-terminus.png",
    tags: ["Python", "Bash/Shell", "Docker", "Docker Compose", "Pytest", "LLM Evaluation", "Agentic Workflows"],
    status: "Contract",
    link: "https://snorkel.ai"
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
                  <Badge
                    variant={project.status === "Live" ? "default" : "secondary"}
                    className={project.status === "Contract" ? "bg-violet-600 text-white border-violet-600" : ""}
                  >
                    {project.status === "Contract" ? "🏢 Contract" : project.status}
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
