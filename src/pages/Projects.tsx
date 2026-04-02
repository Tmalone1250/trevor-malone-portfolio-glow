import { motion } from 'framer-motion';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import mediaImg from '@/components/assets/media.png';
import media2Img from '@/components/assets/media2.png';
import media3Img from '@/components/assets/og-image.png';

const allProjects = [
  {
    title: "KinetiFi",
    description: "A full-stack automation experiment that bridges the gap between LLM reasoning and blockchain finality. I built this to demonstrate a Sovereign Execution model where an AI agent scans the ecosystem for yield and generates \"Intents\" for a smart vault to fulfill. The architecture features a FastAPI backend for agentic logic and a Next.js/Wagmi frontend that visualizes real-time \"Efficiency Scores.\" It successfully overcomes typical DeFi hurdles like complex onboarding through Account Abstraction and deterministic identity.",
    image: "/kinetifi-hero.png",
    tags: ["Solidity", "Foundry", "Python", "FastAPI", "Web3.py", "React", "Next.js", "Wagmi", "Shadcn", "DeFi", "AI Agents"],
    status: "Live",
    link: "https://kinetifi.xyz"
  },
  {
    title: "Alchemy Guild",
    description: "A DeFi yield generation platform that combines NFT staking with automated Uniswap V3 liquidity provision. Mint elemental NFTs across three rarity tiers (Lead, Silver, Gold), stake them in the Yield Vault, and earn USDC from trading fees. Features 18 unique elements with different staking weights (10x for Tier 1, 30x for Tier 2, 100x for Tier 3), automated yield distribution, instant claims with 20% USDC reserve, and a 24/7 autonomous bot that generates volume and manages liquidity. Built on Ethereum Sepolia with verified smart contracts including ElementNFT, YieldVault, Alchemist, and Treasury.",
    image: "/alchemy-guild-logo.png",
    tags: ["Solidity", "React", "TypeScript", "Ethers.js", "Uniswap V3", "NFT", "DeFi", "RainbowKit", "Wagmi", "TailwindCSS", "Foundry", "OpenZeppelin"],
    status: "Live",
    link: "https://alchemy-vault.vercel.app"
  },
  {
    title: "Aetherium RPG",
    description: "Aetherium RPG is a full-stack, \"Final Fantasy-like\" role-playing game that seamlessly integrates traditional gaming mechanics with a decentralized Web3 economy. This project demonstrates a complete understanding of blockchain-based asset ownership, from in-game currency to unique player avatars. The game features a cohesive stat system, a turn-based combat engine, and a player-driven economy built on Solidity smart contracts. Key features include true digital ownership through NFTs, dynamic economy with ERC-20 tokens, player progression systems, turn-based combat, and decentralized rewards.",
    image: "/lovable-uploads/af81e239-fa48-4f7e-8338-93cae74128be.png",
    tags: ["React", "TypeScript", "Web3.js", "Ethers.js", "Node.js", "Express.js", "Supabase", "Solidity", "OpenZeppelin", "Hardhat", "MetaMask"],
    status: "In Progress",
    link: "#"
  },
  {
    title: "Leno AI",
    description: "Developed Leno AI, an open-source, modular multi-agent framework for building and testing advanced AI systems. It empowers developers and researchers to orchestrate intelligent agents, integrating with tools like Google's Agent Development Kit (ADK) and supporting real-world API connections.",
    image: "https://github.com/Tmalone1250/lenoai/blob/main/media/logo.jpg?raw=true",
    tags: ["React", "Node.js", "PostgreSQL", "Python", "FastAPI", "Flask", "TailwindCSS", "Google ADK", "API", "AI Agents", "Web3"],
    status: "Live",
    link: "https://lenoai.dev"
  },
  {
    title: "Auto Yield DeFi Vault",
    description: "AutoYield Vault is a decentralized application (dApp) built on the Ethereum Sepolia Testnet that automates yield farming strategies for stablecoins. Users can deposit USDC into a smart contract vault, which then invests into ETH via Uniswap V2 to capture market gains. The vault integrates Chainlink price feeds to automatically trigger profit-taking and stop-loss actions, converting holdings back to USDC when predefined thresholds are met. The system is designed for future scalability, with planned staking rewards and reinvestment logic for compounding returns.",
    image: "/lovable-uploads/a3ee2e0d-0a45-4e7d-a3d3-791c01987781.png",
    tags: ["Solidity", "React", "TailwindCSS", "Ethers.js", "MetaMask/Wallet Connect", "Sepolia Testnet", "OpenZeppelin", "Chainlink", "Uniswap V2 Router", "Wagmi", "RainbowKit"],
    status: "Live",
    link: "https://auto-yield-dash.vercel.app/"
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
    title: "LENOAI Faucet dApp",
    description: "Built LENOAI Faucet dApp: An enterprise-grade solution showcasing custom ERC-20 (LenoToken) with advanced access control, pausing, and blacklisting. A smart contract faucet enables controlled token distribution on Sepolia with a cooldown.",
    image: media2Img,
    tags: ["React", "TypeScript", "TailwindCSS", "Ethers.js", "Web3-React", "Solidity"],
    status: "Live",
    link: "https://leno-token-faucet.vercel.app/"
  },
  {
    title: "AceMyInterview",
    description: "Developed Ace My Interview, an AI-powered platform designed to revolutionize interview preparation. It leverages advanced AI to provide personalized feedback on user responses, simulate realistic interview scenarios, and help users master the STAR method.",
    image: media3Img,
    tags: ["React", "AI Agents", "Node.js", "TypeScript", "TailwindCSS", "API"],
    status: "Live",
    link: "https://acemyinterview.net"
  },
  {
    title: "DeFi Lending Pool",
    description: "A decentralized finance (DeFi) application built on the Ethereum Sepolia testnet that allows users to earn interest on USDC deposits. This project showcases smart contract development in Solidity, per-user interest accounting, and a modern Web3 frontend with MetaMask integration. Users can deposit, withdraw partially or fully, and track real-time earnings from a simulated interest rate system.",
    image: "/lovable-uploads/ada13442-bab8-4ee8-9aae-7924f931c658.png",
    tags: ["Solidity", "React", "TailwindCSS", "Ethers.js", "MetaMask", "Sepolia Testnet"],
    status: "Live",
    link: "#"
  },
  {
    title: "DeFi Vault dApp",
    description: "Designed and built Defi Vault dApp, a simulated DeFi yield farming protocol on the Ethereum Sepolia Testnet. This dApp allows users to deposit a test stablecoin (e.g., USDC), receive proportional vault shares in return, and earn simulated yield over time. The project demonstrates the fundamental mechanics of a real-world DeFi vault, including proportional share calculation, yield accrual, and the secure approve/transferFrom pattern. This serves as a proof-of-concept for a full-featured lending/yield protocol.",
    image: "/lovable-uploads/fd8dcdfb-2aa5-4c64-b3e3-00df4d44e1a0.png",
    tags: ["Solidity", "React", "TailwindCSS", "Ethers.js", "MetaMask", "Sepolia Testnet", "ERC20 & Ownable"],
    status: "Live",
    link: "https://vaultshare.vercel.app/"
  }
];

const PROJECTS_PER_PAGE = 8;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = allProjects.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <nav className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost">
              <Link to="/" className="flex items-center gap-2">
                <Home className="size-4" />
                Back to Home
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              {allProjects.length} Projects
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-16">
          <TextEffect
            per="word"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            preset="blur"
          >
            All Projects
          </TextEffect>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of my work spanning web applications, mobile solutions, and innovative digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {currentProjects.map((project, index) => (
            <motion.div
              key={`${currentPage}-${index}`}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="size-4" />
              Previous
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className="w-10"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="size-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}