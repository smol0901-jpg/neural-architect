'use client';

import { ReactNode } from 'react';

interface NeuralButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function NeuralButton({ 
  children, 
  variant = 'primary',
  onClick,
  className = '' 
}: NeuralButtonProps) {
  const baseClasses = "px-8 py-4 rounded-2xl font-semibold transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 hover:scale-105 active:scale-95 text-white shadow-lg shadow-cyan-500/25",
    secondary: "bg-transparent border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-105 active:scale-95",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}