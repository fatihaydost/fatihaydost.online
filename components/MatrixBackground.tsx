import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Katakana + Latin + rakam karışımı karakter seti
    const chars = 'アァカサタナハマヤラワガギグゲゴザジズゼゾパピプペポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = width / fontSize;

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Her sütun rastgele yükseklikten başlar
    }

    const draw = () => {
      // Hafif yeşil tonlu yarı saydam arka plan, iz bırakma efekti
      ctx.fillStyle = 'rgba(2, 4, 2, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));

        // Nadiren parlak harf göndererek Matrix parlamasını taklit et
        const isBright = Math.random() > 0.99;
        if (isBright) {
          ctx.fillStyle = '#86efac';
          ctx.shadowBlur = 4;
          ctx.shadowColor = '#4ade80';
        } else {
          ctx.fillStyle = '#14532d';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Alt limite ulaştığında sütunu yukarı sar
        if (drops[i] * fontSize > height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 50); // 50ms: daha sakin akış

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.4 }} // Opaklığı düşük tutarak terminal içeriğinin öne çıkmasını sağla
    />
  );
};

export default MatrixBackground;
