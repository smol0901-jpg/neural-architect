'use client';

import { NeuralTitle } from '@/components/NeuralTitle';
import { NeuralParticles } from '@/components/NeuralParticles';
import { NeuralButton } from '@/components/NeuralButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Фоновые нейро-частицы */}
      <NeuralParticles />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Заголовок с нейро-вайб эффектом */}
        <NeuralTitle />
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <NeuralButton 
            variant="primary"
            onClick={() => alert('NeuralCore активирован!')}
          >
            Создать новый проект
          </NeuralButton>
          
          <NeuralButton variant="secondary">
            Посмотреть примеры
          </NeuralButton>
        </div>
      </div>
    </main>
  );
}