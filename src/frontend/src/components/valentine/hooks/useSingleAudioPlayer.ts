import { useState, useRef, useCallback, useEffect } from 'react';

export function useSingleAudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const play = useCallback((trackId: string, audioPath: string) => {
    // Stop current track if playing
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Create new audio element
    const audio = new Audio(audioPath);
    audioRef.current = audio;

    audio.addEventListener('error', () => {
      setError(`Failed to load audio`);
      setIsPlaying(false);
      setCurrentTrack(trackId);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    audio.addEventListener('canplay', () => {
      setError(null);
      setCurrentTrack(trackId);
      setIsPlaying(true);
      audio.play().catch(() => {
        setError(`Playback failed`);
        setIsPlaying(false);
      });
    });

    audio.load();
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  return {
    currentTrack,
    isPlaying,
    error,
    play,
    pause,
  };
}
