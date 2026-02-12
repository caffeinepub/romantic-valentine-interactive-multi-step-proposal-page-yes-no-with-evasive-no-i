import { Heart, ArrowRight, ArrowLeft, Play, Pause, Music } from 'lucide-react';
import { SONGS } from '../content';
import { useSingleAudioPlayer } from '../hooks/useSingleAudioPlayer';

interface MusicStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function MusicStep({ onNext, onBack }: MusicStepProps) {
  const { currentTrack, isPlaying, error, play, pause } = useSingleAudioPlayer();

  const handleTogglePlay = (songId: string, audioPath: string) => {
    if (currentTrack === songId && isPlaying) {
      pause();
    } else {
      play(songId, audioPath);
    }
  };

  return (
    <div className="space-y-6 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-rose-200 dark:border-rose-800 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Music className="w-12 h-12 text-rose-500" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-rose-600 dark:text-rose-400">
          Our Playlist
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300">
          Songs that remind me of us
        </p>
      </div>

      <div className="space-y-3">
        {SONGS.map((song, index) => {
          const isCurrentTrack = currentTrack === song.id;
          const isCurrentlyPlaying = isCurrentTrack && isPlaying;
          const hasError = isCurrentTrack && error;

          return (
            <div
              key={song.id}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                isCurrentTrack
                  ? 'bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 shadow-md'
                  : 'bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <button
                onClick={() => handleTogglePlay(song.id, song.audioPath)}
                disabled={!!hasError}
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  hasError
                    ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                {isCurrentlyPlaying ? (
                  <Pause className="w-5 h-5 text-white fill-white" />
                ) : (
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                )}
              </button>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-rose-500 dark:text-rose-400 font-semibold">
                    {index + 1}.
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {song.title}
                  </span>
                </div>
                {hasError && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Audio unavailable
                  </p>
                )}
              </div>

              {isCurrentlyPlaying && (
                <div className="flex gap-1">
                  <span className="w-1 h-4 bg-rose-500 rounded-full animate-pulse" />
                  <span className="w-1 h-4 bg-rose-500 rounded-full animate-pulse delay-75" />
                  <span className="w-1 h-4 bg-rose-500 rounded-full animate-pulse delay-150" />
                </div>
              )}
            </div>
          );
        })}
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
