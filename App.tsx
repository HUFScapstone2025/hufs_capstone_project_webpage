import React from 'react';
import Hero from './components/Hero';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import Workflow from './components/Workflow';
import ScenarioShowcase from './components/ScenarioShowcase';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-slate-200 font-sans selection:bg-cyber-neon selection:text-black">
      <Hero />
      <ArchitectureDiagram />
      <Workflow />
      <ScenarioShowcase />
      <Benefits />
      <Footer />
    </div>
  );
};

export default App;