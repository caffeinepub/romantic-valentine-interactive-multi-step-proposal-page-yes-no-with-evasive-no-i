import { Heart, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { QUOTES } from '../content';

interface QuotesStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function QuotesStep({ onNext, onBack }: QuotesStepProps) {
  return (
    <div className="space-y-6 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-rose-200 dark:border-rose-800 animate-fade-in max-h-[90vh] overflow-y-auto">
      <div className="text-center space-y-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm pb-4 z-10">
        <div className="flex justify-center">
          <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-rose-600 dark:text-rose-400">
          Things My heart feels for you
        </h2>
      </div>

      <div className="space-y-4">
        {QUOTES.map((quote, index) => (
          <div
            key={index}
            className="relative p-6 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 border border-rose-200 dark:border-rose-800"
          >
            <Sparkles className="absolute top-4 right-4 w-5 h-5 text-rose-400 opacity-50" />
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed italic">
              "{quote}"
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4 sticky bottom-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm pt-4">
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
