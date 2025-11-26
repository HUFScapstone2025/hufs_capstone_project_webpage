import React, { useState } from 'react';
import { SCENARIOS } from '../constants';
import { AlertTriangle, Terminal, Cpu } from 'lucide-react';

const ScenarioShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find(s => s.id === activeTab) || SCENARIOS[0];

  return (
    <section className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Scenario <span className="text-cyber-neon">Showcase</span>
        </h2>
        <p className="text-center text-slate-400 mb-12">See how the AI analyzes and fixes real-world Kubernetes issues</p>

        <div className="max-w-5xl mx-auto bg-cyber-slate/30 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-md">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-slate-700">
            {SCENARIOS.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveTab(scenario.id)}
                className={`
                  flex-1 py-4 px-6 text-sm md:text-base font-medium transition-all
                  ${activeTab === scenario.id 
                    ? 'bg-cyber-neon/10 text-cyber-neon border-b-2 border-cyber-neon' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}
                `}
              >
                {scenario.title}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: The Error */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-cyber-danger">
                <AlertTriangle size={20} />
                <h3 className="font-bold text-lg">Detected Failure</h3>
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-mono text-slate-500 uppercase">Error Code</span>
                <p className="text-white font-bold">{activeScenario.errorCode}</p>
              </div>

              <div className="bg-black rounded-lg p-4 border border-slate-800 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto h-64 custom-scrollbar">
                <div className="flex gap-2 mb-2 border-b border-slate-800 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-auto text-slate-600">k8s-pod-logs.txt</span>
                </div>
                <pre className="whitespace-pre-wrap">{activeScenario.logSnippet}</pre>
              </div>
            </div>

            {/* Right: The Solution */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-cyber-primary">
                <Cpu size={20} />
                <h3 className="font-bold text-lg">AI Diagnosis (Llama 3)</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-cyber-primary/5 border border-cyber-primary/20 rounded-lg p-5">
                  <p className="text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                    {activeScenario.aiAnalysis}
                  </p>
                </div>

                <div className="bg-cyber-accent/5 border border-cyber-accent/20 rounded-lg p-5">
                   <div className="flex items-center gap-2 mb-2 text-cyber-accent font-semibold text-sm">
                     <Terminal size={16} /> Recommended Fix
                   </div>
                   <p className="text-sm text-slate-200 font-mono">
                     {activeScenario.solution}
                   </p>
                </div>
                
                <button className="w-full py-3 bg-cyber-accent hover:bg-emerald-500 text-black font-bold rounded transition-colors shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  Approve Auto-Fix
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioShowcase;