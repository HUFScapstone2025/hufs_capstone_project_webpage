import React from 'react';
import { TrendingDown, Shield, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-cyber-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-16">
          Why <span className="text-cyber-neon">Hybrid AIOps?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-cyber-slate rounded-xl border border-slate-800 hover:border-cyber-accent/50 transition-all group">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <TrendingDown className="text-cyber-accent" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cost Efficiency</h3>
            <p className="text-slate-400 text-sm">
              Leverages existing school GPU infrastructure for heavy inference, using low-power Raspberry Pi for 24/7 monitoring.
            </p>
          </div>

          <div className="p-8 bg-cyber-slate rounded-xl border border-slate-800 hover:border-cyber-primary/50 transition-all group">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="text-cyber-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Data Privacy</h3>
            <p className="text-slate-400 text-sm">
              Sensitive logs trigger local inference or secure tunnel transmission. No public cloud API dependencies.
            </p>
          </div>

          <div className="p-8 bg-cyber-slate rounded-xl border border-slate-800 hover:border-cyber-neon/50 transition-all group">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-cyber-neon" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Rapid Recovery</h3>
            <p className="text-slate-400 text-sm">
              Reduces Mean Time To Repair (MTTR) by automating root cause analysis and suggesting immediate patches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;