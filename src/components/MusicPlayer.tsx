import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';
import { COUPLE_DATA } from '../config';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isSynthesizer, setIsSynthesizer] = useState<boolean>(false);
  const [audioLoaded, setAudioLoaded] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Web Audio romantic melody synth fallback
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  // Gentle romantic music box notes (Pentatonic scale: C, D, E, G, A, C)
  const notes = [
    261.63, 329.63, 392.0, 523.25, 392.0, 329.63,
    293.66, 349.23, 440.0, 587.33, 440.0, 349.23,
    329.63, 392.0, 523.25, 659.25, 523.25, 392.0,
    349.23, 440.0, 587.33, 698.46, 587.33, 440.0,
  ];

  const playSynthNote = (freq: number) => {
    try {
      if (!synthCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        synthCtxRef.current = new AudioContextClass();
      }
      const ctx = synthCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft sine tone with warm harmonics
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.9);
    } catch {
      // AudioContext not allowed or failed
    }
  };

  const startSynthMelody = () => {
    setIsSynthesizer(true);
    let noteIndex = 0;
    const step = () => {
      playSynthNote(notes[noteIndex % notes.length]);
      noteIndex++;
      synthTimerRef.current = window.setTimeout(step, 650);
    };
    step();
  };

  const stopSynthMelody = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (synthCtxRef.current && synthCtxRef.current.state === 'running') {
      synthCtxRef.current.suspend();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current && !isSynthesizer) {
        audioRef.current.pause();
      }
      stopSynthMelody();
      setIsPlaying(false);
    } else {
      if (audioRef.current && audioLoaded) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setIsSynthesizer(false);
          })
          .catch(() => {
            // If mp3 fails or is missing, use romantic synth fallback
            startSynthMelody();
            setIsPlaying(true);
          });
      } else {
        // Fallback directly to romantic ambient melody
        startSynthMelody();
        setIsPlaying(true);
      }
    }
  };

  // Trigger play when autoPlayTrigger becomes true (e.g. Maria Sophia clicks start)
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      togglePlay();
    }
  }, [autoPlayTrigger]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopSynthMelody();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-40 select-none">
      <audio
        ref={audioRef}
        src={COUPLE_DATA.audioPath}
        loop
        preload="auto"
        onCanPlay={() => setAudioLoaded(true)}
        onError={() => setAudioLoaded(false)}
      />

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar música romântica" : "Tocar música romântica"}
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-white/90 border-romance-300 text-wine-800 shadow-romance-200/50 scale-102'
            : 'bg-white/70 backdrop-blur-md border-pink-100/80 text-wine-600 hover:bg-white hover:border-romance-200'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Disc
            className={`w-4 h-4 text-romance-500 transition-transform ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-romance-500 animate-ping" />
          )}
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[11px] font-semibold tracking-wide text-wine-800 leading-tight">
            {isPlaying ? "Tocando nossa trilha" : "Música de fundo"}
          </span>
          <span className="text-[9px] text-romance-600 font-medium leading-none">
            {isPlaying ? "Clique para pausar" : "Clique para ouvir"}
          </span>
        </div>

        <div className="ml-0.5 text-romance-600">
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 opacity-60" />
          )}
        </div>
      </button>
    </div>
  );
};
