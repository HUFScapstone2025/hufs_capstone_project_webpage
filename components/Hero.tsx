import React from 'react';
import { Terminal, Server, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cyber-black">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-slate border border-cyber-neon/30 text-cyber-neon text-sm font-mono mb-6 animate-pulse-fast">
          <span className="w-2 h-2 rounded-full bg-cyber-accent"></span>
          System Operational
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white neon-text">
          Cloud Failure Response <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-primary">
            AIOps System
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light">
          Hybrid Cloud Intelligence: From <span className="text-cyber-accent font-semibold">Raspberry Pi Edge</span> to <span className="text-cyber-primary font-semibold">GPU Core</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-cyber-neon/10 border border-cyber-neon text-cyber-neon font-mono rounded hover:bg-cyber-neon/20 transition-all neon-border flex items-center gap-2">
            <Terminal size={20} />
            View Live Demo
          </button>
          <button className="px-8 py-4 bg-cyber-slate border border-slate-700 text-slate-300 font-mono rounded hover:bg-slate-800 transition-all flex items-center gap-2">
            <Server size={20} />
            Architecture
          </button>
        </div>
      </div>

      {/* Decorative floating icons */}
      <div className="absolute bottom-20 left-10 opacity-30 animate-bounce delay-700 hidden md:block">
        <Cpu size={48} className="text-cyber-accent" />
      </div>
      <div className="absolute top-20 right-10 opacity-30 animate-bounce delay-100 hidden md:block">
        <Server size={48} className="text-cyber-primary" />
      </div>
    </section>
  );
};

export default Hero;