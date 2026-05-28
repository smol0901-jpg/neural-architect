'use client';

import { useEffect, useState } from 'react';

interface NeuralTitleProps {
  className?: string;
}

export function NeuralTitle({ className = '' }: NeuralTitleProps) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-center ${className}`}>
      {/* NEURAL */}
      <h1 
        className={`text-5xl sm:text-7xl md:text-8xl font-black tracking-tight ${
          glitch ? 'neural-glitch' : ''
        }`}
      >
        <span className="neural-gradient-text">NEURAL</span>
      </h1>
      
      {/* ARCHITECT */}
      <h1 
        className={`text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mt-2 ${
          glitch ? 'neural-glitch' : ''
        }`}
      >
        <span className="text-white">ARCHITECT</span>
      </h1>
      
      {/* PREMIUM++ */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="text-3xl sm:text-5xl md:text-6xl font-bold neural-gradient-text">
          PREMIUM
        </span>
        <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-cyan-400">
          ++
        </span>
      </div>

      {/* Нейро-эффект линия */}
      <div className="neural-line w-64 sm:w-96 mx-auto mt-6" />
      
      {/* Подзаголовок */}
      <p className="mt-4 text-lg sm:text-xl text-gray-400 font-medium">
        NEXT-GEN SITE ENGINE
      </p>
    </div>
  );
}