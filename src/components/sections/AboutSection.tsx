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
        <div className="text-xl text-muted-foreground mb-8 leading-relaxed text-left md:text-center">
          <p className="mb-6">
            My name is Trevor Malone, and I am a Software and AI Engineer specializing in the intersection of <strong>Autonomous Agents</strong> and <strong>Intent-Based DeFi Infrastructure</strong>. My career is driven by a singular mission: to reduce the cognitive overhead of the blockchain by building intelligent, self-optimizing systems that bridge the gap between AI reasoning and on-chain execution.
          </p>

          <p className="mb-6">
            <span className="text-primary font-semibold block mb-2">The Full-Stack Architect</span>
            I possess a robust background in full-stack engineering, crafting high-fidelity user interfaces with React and TypeScript while architecting scalable, high-concurrency backends using Python (FastAPI) and Node.js. This holistic approach allows me to manage the entire lifecycle of a protocol—from deterministic smart account deployment to real-time portfolio visualization.
          </p>

          <p className="mb-6">
            <span className="text-primary font-semibold block mb-2">Pioneering AI Orchestration</span>
            As the creator and Open Source Project Lead for <strong>Leno AI</strong>, I launched a modular multi-agent framework designed to orchestrate complex AI behaviors across diverse LLM APIs. I have applied this expertise to develop autonomous financial guardians like <strong>KinetiFi</strong>, which utilize specialized agents for multichain yield discovery and risk-adjusted capital rotation. My work at Reality Agent Lab on projects like Marvel AI further solidified my ability to deliver precise, structured outputs for mission-critical applications.
          </p>

          <p className="mb-6">
            <span className="text-primary font-semibold block mb-2">Decentralized Finance & Web3</span>
            I am deeply immersed in the Base and Ethereum ecosystems, focusing on Account Abstraction (ERC-4337) and the ERC-4626 yield-bearing vault standard. My recent work includes:
            <ul className="mt-4 space-y-3 list-none">
              <li>• <strong>KinetiFi:</strong> An autonomous DeFi orchestrator featuring a "Sandbox vs. Production" simulation environment.</li>
              <li>• <strong>Alchemy Guild:</strong> A gamified DeFi dApp utilizing elemental-themed NFTs to optimize liquidity vault positions.</li>
              <li>• <strong>Smart Contract Engineering:</strong> Expertise in Solidity and Foundry, focusing on modular session keys that enable agentic autonomy without compromising self-custody.</li>
            </ul>
          </p>

          <p>
            I am focused on building <strong>"Invisible Finance"</strong>—secure, efficient, and impactful Web3 solutions where AI handles the heavy lifting of the decentralized ecosystem. I am eager to collaborate with forward-thinking teams to architect the future of autonomous technology.
          </p>
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