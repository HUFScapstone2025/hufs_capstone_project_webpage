import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-cyber-black border-t border-slate-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-slate-500 text-sm">
            Powered by <span className="text-cyber-accent">Raspberry Pi 5</span> & Open Source AI
          </p>
          <p className="text-slate-600 text-xs mt-1">
            Cloud Failure Response AIOps System © {new Date().getFullYear()}
          </p>
        </div>
        
        <a 
          href="#" 
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors text-sm font-medium"
        >
          <Github size={18} />
          View Repository
        </a>
      </div>
    </footer>
  );
};

export default Footer;