import { Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { SHAYARI } from '../content';

interface ShayariStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function ShayariStep({ onNext, onBack }: ShayariStepProps) {
  return (
    <div className="space-y-6 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-rose-200 dark:border-rose-800 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-rose-600 dark:text-rose-400">
          For You
        </h2>
      </div>

      <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-2xl p-8 shadow-inner">
        <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed text-center font-serif whitespace-pre-line">
          {SHAYARI}
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
