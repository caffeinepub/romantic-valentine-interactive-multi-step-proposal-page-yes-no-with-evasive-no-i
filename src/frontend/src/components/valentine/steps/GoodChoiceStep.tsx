import { Heart, ArrowRight } from 'lucide-react';
import { COUPLE_IMAGE } from '../assets';

interface GoodChoiceStepProps {
  onNext: () => void;
}

export function GoodChoiceStep({ onNext }: GoodChoiceStepProps) {
  return (
    <div className="space-y-6 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-rose-200 dark:border-rose-800 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-bounce" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-rose-600 dark:text-rose-400">
          Good choice! 💖
        </h2>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <img
          src={COUPLE_IMAGE}
          alt="Beautiful couple"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex justify-center pt-4">
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
