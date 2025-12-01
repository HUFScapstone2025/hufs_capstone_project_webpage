import React from 'react';
import { Activity, Cpu, Server, Wifi } from 'lucide-react';

interface MonitorPanel {
  id: string;
  title: string;
  src: string;
  icon: React.ReactNode;
}

const panels: MonitorPanel[] = [
  {
    id: 'panel-4',
    title: 'Abnormal Pods',
    // Panel 4 (Dark)
    src: 'https://stage-bass-stage-yours.trycloudflare.com/d-solo/ad2htpb/aiops-monitoring?orgId=1&timezone=browser&theme=dark&panelId=panel-4&__feature.dashboardSceneSolo=true',
    icon: <Activity size={18} className="text-cyber-neon" />
  },
  {
    id: 'panel-3',
    title: 'Pod Status',
    // Panel 3 (Added theme=dark for consistency)
    src: 'https://stage-bass-stage-yours.trycloudflare.com/d-solo/ad2htpb/aiops-monitoring?orgId=1&timezone=browser&theme=dark&panelId=panel-3&__feature.dashboardSceneSolo=true',
    icon: <Cpu size={18} className="text-cyber-primary" />
  },
  {
    id: 'panel-2',
    title: 'Total Memory Usage',
    // Panel 2 (Dark)
    src: 'https://stage-bass-stage-yours.trycloudflare.com/d-solo/ad2htpb/aiops-monitoring?orgId=1&timezone=browser&theme=dark&panelId=panel-2&__feature.dashboardSceneSolo=true',
    icon: <Server size={18} className="text-cyber-accent" />
  },
  {
    id: 'panel-1',
    title: 'Cluster CPU Usage',
    // Panel 1 (Dark)
    src: 'https://stage-bass-stage-yours.trycloudflare.com/d-solo/ad2htpb/aiops-monitoring?orgId=1&timezone=browser&theme=dark&panelId=panel-1&__feature.dashboardSceneSolo=true',
    icon: <Wifi size={18} className="text-purple-400" />
  }
];

const LiveMonitor: React.FC = () => {
  return (
    <section className="py-20 bg-cyber-dark relative border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </div>
          <h2 className="text-3xl font-bold text-white">
            Live System <span className="text-cyber-neon">Monitoring</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {panels.map((panel) => (
            <div 
              key={panel.id}
              className="bg-cyber-slate/50 border border-slate-700 rounded-xl overflow-auto shadow-lg hover:border-cyber-neon/50 transition-all duration-300 group"
            >
              {/* Panel Header */}
              <div className="px-4 py-3 border-b border-slate-700 bg-black/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {panel.icon}
                  <span className="text-sm font-medium text-slate-300">{panel.title}</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyber-neon transition-colors"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
              </div>

              {/* Iframe Container */}
              <div className="relative w-full h-[250px] bg-cyber-black">
                <iframe
                  src={panel.src}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title={panel.title}
                  className="" // Optional: prevents scrolling inside the iframe if not needed
                ></iframe>
                
                {/* Overlay for "Offline" simulation if local IP isn't reachable (Optional visual flair) */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-cyber-black/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-slate-600 mt-6 font-mono">
          * Dashboard data sourced from local Prometheus instances via Grafana @ 192.168.0.5
        </p>
      </div>
    </section>
  );
};

export default LiveMonitor;