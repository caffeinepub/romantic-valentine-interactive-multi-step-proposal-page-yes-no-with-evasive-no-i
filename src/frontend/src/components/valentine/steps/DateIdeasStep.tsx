import { Heart, ArrowLeft, MapPin, Coffee, Camera, Music as MusicIcon, Gamepad2, MessageCircle } from 'lucide-react';
import { DATE_IDEAS } from '../content';

interface DateIdeasStepProps {
  onBack: () => void;
}

const iconMap: Record<number, React.ReactNode> = {
  0: <MapPin className="w-5 h-5" />,
  1: <MapPin className="w-5 h-5" />,
  2: <Camera className="w-5 h-5" />,
  3: <MapPin className="w-5 h-5" />,
  4: <Camera className="w-5 h-5" />,
  5: <MapPin className="w-5 h-5" />,
  6: <MapPin className="w-5 h-5" />,
  7: <Coffee className="w-5 h-5" />,
  8: <MessageCircle className="w-5 h-5" />,
  9: <MusicIcon className="w-5 h-5" />,
  10: <Camera className="w-5 h-5" />,
  11: <Gamepad2 className="w-5 h-5" />,
  12: <Coffee className="w-5 h-5" />,
};

export function DateIdeasStep({ onBack }: DateIdeasStepProps) {
  return (
    <div className="space-y-6 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-rose-200 dark:border-rose-800 animate-fade-in max-h-[90vh] overflow-y-auto">
      <div className="text-center space-y-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm pb-4 z-10">
        <div className="flex justify-center">
          <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-rose-600 dark:text-rose-400">
          Our virtual Date ideas
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300">
          Adventures waiting for us
        </p>
      </div>

      <div className="space-y-3">
        {DATE_IDEAS.map((idea, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-rose-100 dark:border-rose-800"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md">
              {iconMap[index] || <Heart className="w-5 h-5" />}
            </div>
            
            <div className="flex-1 pt-1">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {idea}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6 pb-4 space-y-4">
        <div className="flex justify-center">
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 italic">
          Can't wait to make these memories with you! 💕
        </p>
      </div>

      <div className="flex justify-center pt-4 sticky bottom-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      <footer className="text-center pt-8 pb-2 text-sm text-gray-500 dark:text-gray-400 border-t border-rose-200 dark:border-rose-800 mt-8">
        <p>
          Built with <Heart className="inline w-4 h-4 text-rose-500 fill-rose-500" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-500 hover:text-rose-600 underline"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
