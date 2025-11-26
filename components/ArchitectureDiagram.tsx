import React from 'react';
import { Server, Database, Activity, Wifi, ShieldCheck, Zap } from 'lucide-react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <section className="py-20 bg-cyber-dark relative border-t border-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          <span className="text-cyber-neon">Hybrid</span> Architecture
        </h2>

        <div className="flex flex-col xl:flex-row items-stretch justify-center gap-8 relative">
          
          {/* Left Node: Edge */}
          <div className="flex-1 bg-cyber-slate/50 backdrop-blur-sm border border-cyber-accent/30 rounded-xl p-6 relative overflow-hidden group hover:border-cyber-accent/60 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyber-accent"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyber-accent/10 rounded-lg">
                <Server className="text-cyber-accent" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Home Edge Node</h3>
                <p className="text-sm text-cyber-accent font-mono">Raspberry Pi 5 (8GB)</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-black/30 rounded border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2"><Activity size={16} /> K3s Cluster</span>
                <span className="text-xs text-cyber-accent px-2 py-1 bg-cyber-accent/10 rounded">Active</span>
              </div>
              <div className="p-4 bg-black/30 rounded border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2"><Database size={16} /> Prometheus</span>
                <span className="text-xs text-cyber-accent px-2 py-1 bg-cyber-accent/10 rounded">Monitoring</span>
              </div>
              <div className="p-4 bg-black/30 rounded border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2"><Zap size={16} /> n8n Automation</span>
                <span className="text-xs text-cyber-accent px-2 py-1 bg-cyber-accent/10 rounded">Workflow</span>
              </div>
            </div>
          </div>

          {/* Center: Network Tunnel */}
          <div className="flex flex-col items-center justify-center min-h-[100px] xl:min-h-auto relative z-10">
            <div className="xl:hidden h-16 w-0.5 border-l-2 border-dashed border-slate-600"></div>
            
            <div className="bg-cyber-black border border-slate-700 rounded-full p-4 z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <Wifi className="text-slate-400 animate-pulse" size={24} />
            </div>
            <p className="mt-2 text-xs font-mono text-slate-500 uppercase tracking-widest">Secure Tunnel</p>
            
            {/* Animated Data Flow (Horizontal for Desktop) */}
            <div className="hidden xl:block absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10">
               <div className="h-0.5 w-full bg-slate-800 relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyber-neon to-transparent animate-flow-right opacity-50"></div>
               </div>
            </div>

             <div className="xl:hidden h-16 w-0.5 border-l-2 border-dashed border-slate-600"></div>
          </div>

          {/* Right Node: Core */}
          <div className="flex-1 bg-cyber-slate/50 backdrop-blur-sm border border-cyber-primary/30 rounded-xl p-6 relative overflow-hidden group hover:border-cyber-primary/60 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyber-primary"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyber-primary/10 rounded-lg">
                <Server className="text-cyber-primary" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">School GPU Server</h3>
                <p className="text-sm text-cyber-primary font-mono">NVIDIA A100 / RTX 3090</p>
              </div>
            </div>

            <div className="space-y-4">
               <div className="p-4 bg-black/30 rounded border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2"><Server size={16} /> Docker Host</span>
                <span className="text-xs text-cyber-primary px-2 py-1 bg-cyber-primary/10 rounded">Running</span>
              </div>
              <div className="p-4 bg-black/30 rounded border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2"><ShieldCheck size={16} /> Ollama API</span>
                <span className="text-xs text-cyber-primary px-2 py-1 bg-cyber-primary/10 rounded">Port 11434</span>
              </div>
              <div className="p-4 bg-cyber-primary/10 rounded border border-cyber-primary/30 flex items-center justify-between shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                <span className="text-white font-semibold flex items-center gap-2"><Zap size={16} className="text-yellow-400" /> Llama 3 Model</span>
                <span className="text-xs text-white px-2 py-1 bg-cyber-primary rounded">AI Engine</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;