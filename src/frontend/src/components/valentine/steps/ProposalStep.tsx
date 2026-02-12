import { Heart } from 'lucide-react';
import { useEvasiveButton } from '../hooks/useEvasiveButton';

interface ProposalStepProps {
  onAccept: () => void;
}

export function ProposalStep({ onAccept }: ProposalStepProps) {
  const { position, handlePointerMove, handleTouchStart, containerRef } = useEvasiveButton();

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[500px] flex flex-col items-center justify-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-rose-200 dark:border-rose-800"
    >
      <div className="text-center space-y-8 mb-12">
        <div className="flex justify-center">
          <Heart className="w-20 h-20 text-rose-500 fill-rose-500 animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-rose-600 dark:text-rose-400 leading-tight">
          Will you be my Valentine?
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I have something special to share with you...
        </p>
      </div>

      <div className="flex gap-6 items-center justify-center">
        <button
          onClick={onAccept}
          className="px-12 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Yes! 💕
        </button>

        <button
          onPointerMove={handlePointerMove}
          onTouchStart={handleTouchStart}
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
          className="px-12 py-4 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-xl font-semibold rounded-full shadow-lg transition-all duration-200 cursor-pointer"
        >
          No
        </button>
      </div>
    </div>
  );
}
