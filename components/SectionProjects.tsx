import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Ember2024-Malware-Detection',
    url: 'https://github.com/fatihaydost/Ember2024-Malware-Detection',
    tech: ['Python', 'Pytorch', 'Deep Learning'],
    description: 'EMBER2024 dataset ile derin öğrenme modellerinin eğitimi ve interaktif arayüz geliştirilmesi',
    status: 'DEVELOPMENT',
  },
  {
    id: 2,
    title: 'brain-tumor-classifier',
    url: 'https://github.com/fatihaydost/brain-tumor-classifier',
    tech: ['Python', 'PyTorch', 'Deep Learning'],
    description: 'Beyin MR imajlarının sınıflandırılması için derin öğrenme modelleri ve interaktif arayüz',
    status: 'ONLINE',
  },
  {
    id: 3,
    title: 'file-organizer',
    url: 'https://github.com/fatihaydost/file-organizer',
    tech: ['Python', 'tkinter'],
    description: 'Dosya organizasyonu için Python (tkinter) tabanlı masaüstü uygulaması',
    status: 'ONLINE',
  },
];

const SectionProjects: React.FC = () => {
  return (
    <div className="mt-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-4 text-green-400/70 text-xs uppercase tracking-widest">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span>/var/www/html/projects_manifest.json</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="relative group bg-black/30 border border-green-900/60 hover:border-green-500/60 transition-all duration-300 rounded overflow-hidden block focus:outline-none focus:ring-2 focus:ring-green-500/60 focus:ring-offset-2 focus:ring-offset-green-950"
          >
            {/* Kartın üst başlık şeridi */}
            <div className="bg-green-950/30 p-2 border-b border-green-900/50 flex justify-between items-center">
              <span className="font-mono text-xs text-green-600">ID: 00{p.id}</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-800 group-hover:bg-green-500 transition-colors"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-800 group-hover:bg-green-500 delay-75 transition-colors"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-800 group-hover:bg-green-500 delay-150 transition-colors"></div>
              </div>
            </div>

            <div className="p-4 relative z-10">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-green-200 font-bold tracking-wider text-lg font-retro group-hover:text-white transition-colors">
                  {p.title}
                </h4>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    p.status === 'ONLINE'
                      ? 'border-green-700/50 text-green-400 bg-green-900/20'
                      : p.status === 'DEVELOPMENT'
                        ? 'border-yellow-700/50 text-yellow-400 bg-yellow-900/20'
                        : 'border-red-700/50 text-red-400 bg-red-900/20'
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="text-green-400/60 text-sm mb-4 leading-relaxed font-sans">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t, i) => (
                  <span key={i} className="text-[10px] text-green-300 bg-green-500/10 px-2 py-1 border border-green-500/20 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Dekoratif köşe çizgileri */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-green-600 opacity-30 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/5 pointer-events-none"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionProjects;
