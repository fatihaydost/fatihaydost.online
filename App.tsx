import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Terminal from './components/Terminal';

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 md:p-8 relative overflow-hidden bg-black">
      {/* Matrix yağmuru tüm ekranın alt katmanında akıyor */}
      <MatrixBackground />
      
      {/* Terminal ana katmanı */}
      <Terminal />

      {/* Küçük durum etiketi */}
      <div className="absolute bottom-2 right-4 text-[10px] text-green-900 z-20 font-mono hidden md:block">
        SYSTEM_STATUS: STABLE | POWERED BY REACT & LOCAL_SIMULATION
      </div>
    </div>
  );
}

export default App;
