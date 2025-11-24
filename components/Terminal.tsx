import React, { useState, useRef, useEffect } from 'react';
import { Command, HistoryItem } from '../types';
import CommandHelper from './CommandHelper';
import SectionProjects from './SectionProjects';
import SectionAbout from './SectionAbout';

// Komut listesini tek noktadan yönetmek için özet dizi
const COMMAND_SUMMARY: Array<Omit<Command, 'action'>> = [
  { cmd: 'hakkinda', description: 'Kimlik kartı' },
  { cmd: 'projeler', description: 'Portfolyo' },
  { cmd: 'iletisim', description: 'Bağlantı kur' },
  { cmd: 'temizle', description: 'Ekranı sıfırla' },
];

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState('');
  const [bootSequence, setBootSequence] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (!window.getSelection()?.toString()) {
      inputRef.current?.focus();
    }
  };

  const addToHistory = (item: HistoryItem) => {
    setHistory((prev) => [...prev, item]);
  };

  const handleCommand = (cmdText: string, options?: { skipHistory?: boolean }) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    if (!options?.skipHistory) {
      addToHistory({
        id: `${Date.now()}-input`,
        type: 'input',
        content: cleanCmd,
      });
    }

    switch (cleanCmd) {
      case 'help':
      case 'yardim':
        addToHistory({
          id: `${Date.now()}-res`,
          type: 'output',
          content: (
            <div className="my-4 animate-fade-in bg-green-900/10 p-4 rounded border-l-2 border-green-600">
              <div className="text-white font-retro text-xl mb-3 tracking-wide">MEVCUT KOMUTLAR</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {COMMAND_SUMMARY.map((command) => (
                  <div
                    key={command.cmd}
                    className="flex items-center justify-between group cursor-pointer hover:bg-green-900/20 p-1 rounded transition-colors"
                    onClick={() => handleCommand(command.cmd)}
                  >
                    <span className="text-green-300 font-bold group-hover:text-white transition-colors font-mono">./{command.cmd}</span>
                    <span className="text-green-600 text-xs group-hover:text-green-400">{command.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
        });
        break;

      case 'clear':
      case 'temizle':
        setHistory([]);
        break;

      case 'hakkinda':
      case 'about':
        addToHistory({
          id: `${Date.now()}-comp`,
          type: 'component',
          content: <SectionAbout />,
        });
        break;

      case 'projeler':
      case 'projects':
        addToHistory({
          id: `${Date.now()}-comp`,
          type: 'component',
          content: <SectionProjects />,
        });
        break;

      case 'iletisim':
      case 'contact':
        addToHistory({
          id: `${Date.now()}-res`,
          type: 'output',
          content: (
            <div className="border border-green-800/50 p-4 my-4 rounded bg-black/40 animate-fade-in">
              <div className="text-green-300 font-bold mb-3 text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                İletişim Kanalları
              </div>
              <div className="grid gap-2 text-sm font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 w-24">E-POSTA</span>
                  <a
                    href="mailto:aydostfatihh@gmail.com"
                    className="text-green-200 hover:text-white hover:underline transition-colors"
                  >
                    aydostfatihh@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 w-24">GITHUB</span>
                  <a
                    href="https://github.com/fatihaydost"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-200 hover:text-white hover:underline transition-colors"
                  >
                    github.com/fatihaydost
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 w-24">LINKEDIN</span>
                  <a
                    href="https://www.linkedin.com/in/fatihaydost"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-200 hover:text-white hover:underline transition-colors"
                  >
                    linkedin.com/in/fatihaydost
                  </a>
                </div>
              </div>
            </div>
          ),
        });
        break;

      default:
        addToHistory({
          id: `${Date.now()}-err`,
          type: 'output',
          content: (
            <div className="text-red-400/80 text-sm mt-2 font-mono border-l-2 border-red-900 pl-2">
              <span className="font-bold">HATA:</span> Komut bulunamadı: '{cleanCmd}' <br />
              Kullanılabilir komutlar için{' '}
              <span className="text-green-400 cursor-pointer hover:underline" onClick={() => handleCommand('yardim', { skipHistory: true })}>
                'yardim'
              </span>{' '}
              yazın.
            </div>
          ),
        });
    }
  };

  useEffect(() => {
    if (!bootSequence) return;

    const steps = [
      { msg: 'INITIALIZING KERNEL...', delay: 200 },
      { msg: 'LOADING DRIVERS...', delay: 600 },
      { msg: 'MOUNTING VIRTUAL FILE SYSTEM...', delay: 1200 },
      { msg: 'ESTABLISHING SECURE CONNECTION...', delay: 1800 },
      { msg: 'NEURAL LINK: ONLINE', delay: 2400 },
      { msg: 'ACCESS GRANTED. WELCOME, USER.', delay: 3000 },
    ];

    const timeoutIds: number[] = [];

    steps.forEach((step, index) => {
      const timeoutId = window.setTimeout(() => {
        if (index === steps.length - 1) {
          setBootSequence(false);
          setTimeout(() => handleCommand('yardim', { skipHistory: true }), 500);
        } else {
          setHistory((prev) => [
            ...prev,
            {
              id: `boot-${index}`,
              type: 'output',
              content: (
                <div className="flex items-center gap-3 text-xs md:text-sm font-mono">
                  <span className="text-green-700 font-bold">[{new Date().toLocaleTimeString('tr-TR', { hour12: false })}]</span>
                  <span className="text-green-400">{step.msg}</span>
                  <span className="ml-auto text-green-800">[OK]</span>
                </div>
              ),
            },
          ]);
        }
      }, step.delay);

      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [bootSequence]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const commandButtons: Command[] = COMMAND_SUMMARY.map((cfg) => ({
    ...cfg,
    action: () => handleCommand(cfg.cmd),
  }));

  return (
    <div
      className="relative z-10 w-full max-w-4xl mx-auto h-[85vh] md:h-[80vh] flex flex-col rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,20,0,0.3)] border border-green-900/30"
      style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(2, 10, 5, 0.7)' }}
      onClick={handleContainerClick}
    >
      <div className="scanline absolute inset-0 pointer-events-none z-50 opacity-20 mix-blend-overlay"></div>
      <div className="crt-flicker"></div>

      <div className="bg-black/40 border-b border-green-900/30 p-3 flex justify-between items-center select-none">
        <div className="flex items-center gap-3">
          <div className="flex space-x-2 mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 border border-green-500/60"></div>
          </div>
          <div className="flex items-center text-green-600/60 text-xs font-mono">
            <span className="mr-2">visitor@portfolio:~/root</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] text-green-700 font-mono tracking-widest">ONLINE</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 font-mono text-sm md:text-base scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-transparent">
        {history.map((item) => (
          <div key={item.id} className="mb-3 break-words">
            {item.type === 'input' ? (
              <div className="flex items-center text-green-300/80 mt-6 mb-2">
                <span className="mr-2 text-green-500 font-bold text-xs">neo@root:$</span>
                <span className="text-white/90">{typeof item.content === 'string' ? item.content : ''}</span>
              </div>
            ) : (
              <div className="animate-fade-in">{item.content}</div>
            )}
          </div>
        ))}

        {!bootSequence && <CommandHelper commands={commandButtons} />}
        <div ref={bottomRef} />
      </div>

      <div className="p-4 bg-black/30 border-t border-green-900/30 flex items-center relative z-20">
        <span className="text-green-500 font-bold mr-3 text-lg">neo@root:$</span>
        <form onSubmit={onFormSubmit} className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-green-100 font-mono placeholder-green-800/40 text-base"
            placeholder={bootSequence ? 'Sistem başlatılıyor...' : 'Bir komut girin...'}
            autoFocus
            autoComplete="off"
            disabled={bootSequence}
            spellCheck={false}
            aria-label="Komut satırı girişi"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
