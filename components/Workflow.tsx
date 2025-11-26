import React from 'react';
import { Activity, Database, Brain, FileText, CheckCircle } from 'lucide-react';
import { WORKFLOW_STEPS } from '../constants';

const icons: Record<string, React.ReactNode> = {
  Activity: <Activity size={24} />,
  Database: <Database size={24} />,
  Brain: <Brain size={24} />,
  FileText: <FileText size={24} />,
  CheckCircle: <CheckCircle size={24} />,
};

const Workflow: React.FC = () => {
  return (
    <section className="py-20 bg-cyber-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          Automated <span className="text-cyber-accent">Resolution Workflow</span>
        </h2>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300
                  border-2 bg-cyber-slate
                  ${index === 2 ? 'border-cyber-primary shadow-[0_0_15px_rgba(14,165,233,0.4)]' : 'border-slate-600 group-hover:border-cyber-accent'}
                `}>
                  <div className={`${index === 2 ? 'text-cyber-primary' : 'text-slate-400 group-hover:text-cyber-accent'}`}>
                    {icons[step.iconName]}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 font-mono mb-2 px-2 h-10">{step.tool}</p>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;