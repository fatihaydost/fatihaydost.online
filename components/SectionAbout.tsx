import React from 'react';

const SectionAbout: React.FC = () => {
  // GitHub Pages'de base yolu dikkate alarak profil görselini çöz
  const profileSrc = `${import.meta.env.BASE_URL}profile.jpeg`;

  return (
    <div className="font-mono text-sm md:text-base text-green-300/80 my-4 animate-fade-in">
      <div className="bg-green-950/10 border border-green-900/50 p-6 rounded relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute top-4 right-4 text-green-800/30 font-retro text-4xl select-none">SYS_USER</div>

        {/* Kimlik kartı ve beceri özetini taşıyan ana blok */}
        <div className="relative z-10 grid gap-6">
          <div className="flex items-center gap-4 border-b border-green-900/30 pb-4">
            <div className="w-16 h-16 rounded border border-green-800 bg-green-900/30 overflow-hidden shadow-[0_0_20px_-8px_rgba(74,222,128,0.8)]">
              <img
                src={profileSrc}
                alt="Hakkında profili"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div className="text-xs text-green-600 uppercase tracking-widest mb-1">Identity</div>
              <h2 className="text-2xl font-retro text-white text-glow tracking-wide">FATIH AYDOST</h2>
              <div className="text-xs text-green-500/60">Yönetim Bilişim Sistemleri Uzmanı</div>
              <div className="text-xs text-green-500/60">Developer</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-600/70 text-xs font-bold">
                <span>//</span> <span>about.txt</span>
              </div>
              <p className="leading-relaxed text-green-200/90 text-sm">
                Backend geliştirme ve veri mühendisliği alanında çalışan bir geliştiriciyim. C# ve Python ile ölçeklenebilir servisler tasarlar, veri işleme hatlarını kurar ve sistemlerin güvenilir şekilde çalışmasını önceliklendiririm.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600/70 text-xs font-bold">
                <span>//</span> <span>SKILL.JSON</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-black/20 p-2 rounded border border-green-900/30">
                  <span className="block text-green-600 mb-1">Frontend</span>
                  <span className="text-green-100">.NET MAUI, Flutter</span>
                </div>
                <div className="bg-black/20 p-2 rounded border border-green-900/30">
                  <span className="block text-green-600 mb-1">Backend</span>
                  <span className="text-green-100">C#(.NET), Python</span>
                </div>
                <div className="bg-black/20 p-2 rounded border border-green-900/30">
                  <span className="block text-green-600 mb-1">ML / DL</span>
                  <span className="text-green-100">Pandas, Numpy, PyTorch</span>
                </div>
                <div className="bg-black/20 p-2 rounded border border-green-900/30">
                  <span className="block text-green-600 mb-1">DevOps</span>
                  <span className="text-green-100">Docker, Git, SQL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-3 border-t border-green-900/30 flex justify-between items-center text-xs font-mono text-green-600">
            <span>UPTIME: 99.9%</span>
            <span>LOC: TZX_TR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
