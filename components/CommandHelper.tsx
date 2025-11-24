import React from 'react';
import { Command } from '../types';

interface Props {
  commands: Command[];
}

// Terminal komutlarını buton olarak göstermek için küçük yardımcı panel
const CommandHelper: React.FC<Props> = ({ commands }) => {
  return (
    <div className="mt-8 pt-4 border-t border-dashed border-green-900/30 opacity-80 hover:opacity-100 transition-opacity">
      <div className="text-[10px] text-green-700 mb-3 font-mono uppercase tracking-widest flex items-center gap-2">
        <span>Hızlı Erişim Paneli</span>
        <span className="h-px flex-1 bg-green-900/30"></span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {commands.map((command) => (
          <button
            key={command.cmd}
            onClick={command.action}
            className="group relative px-4 py-2 overflow-hidden rounded-sm bg-green-950/20 border border-green-800/30 hover:border-green-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 w-0 bg-green-500/10 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
            <div className="relative flex items-center gap-2">
              <span className="text-[10px] text-green-700 font-bold group-hover:text-green-500">./</span>
              <span className="text-xs font-mono text-green-400 group-hover:text-green-100 uppercase tracking-wide">
                {command.cmd}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommandHelper;
