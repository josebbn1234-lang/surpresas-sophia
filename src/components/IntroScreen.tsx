import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { COUPLE_DATA } from '../config';

interface IntroScreenProps {
  onStart: () => void;
  isStarted: boolean;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart, isStarted }) => {
  const handleStart = () => {
    // Delicately burst hearts & rose gold sparkles
    const count = 40;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#ff8fab', '#ff5c8a', '#be124e'],
      shapes: ['circle'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#ffe3ec', '#f3ce65', '#ffffff'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#f43f7a', '#ffc2d1', '#e11d62'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#ffd0dd', '#d4af37'],
    });

    onStart();
  };

  return (
    <div
      className={`fixed inset-0 z-30 flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center bg-gradient-to-b from-[#fff5f7] via-[#fffbfd] to-[#ffeef3] transition-all duration-1000 ${
        isStarted ? 'pointer-events-none opacity-0 -translate-y-12' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-gradient-to-tr from-romance-200/40 via-romance-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-100/40 rounded-full blur-2xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center"
      >
        {/* Subtle romantic tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-romance-200/80 shadow-sm text-wine-700 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-romance-500 animate-pulse" />
          <span>Com amor para sempre</span>
          <Sparkles className="w-3.5 h-3.5 text-romance-500 animate-pulse" />
        </motion.div>

        {/* Couple names typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mb-3"
        >
          <h2 className="font-cursive text-4xl sm:text-6xl text-wine-700 drop-shadow-sm flex items-center justify-center gap-2">
            <span>{COUPLE_DATA.authorName}</span>
            <span className="text-romance-500 inline-block animate-pulse-subtle">❤️</span>
            <span>{COUPLE_DATA.partnerName}</span>
          </h2>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="font-serif text-2xl sm:text-4xl text-wine-900 font-semibold tracking-tight leading-snug sm:leading-tight mb-4 max-w-md"
        >
          {COUPLE_DATA.heroTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="text-wine-800/80 font-cormorant text-lg sm:text-2xl italic leading-relaxed mb-8 max-w-lg px-2"
        >
          "{COUPLE_DATA.heroSubtitle}"
        </motion.p>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-romance-400 to-romance-600 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500 group-hover:scale-105" />
          <button
            onClick={handleStart}
            className="relative flex items-center gap-3 px-8 sm:px-10 py-4 bg-gradient-to-r from-romance-600 to-wine-600 hover:from-romance-500 hover:to-wine-500 text-white font-medium rounded-full shadow-lg shadow-romance-700/25 transform transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-romance-300"
          >
            <Heart className="w-5 h-5 fill-current text-white animate-pulse" />
            <span>{COUPLE_DATA.heroButtonText}</span>
            <ChevronDown className="w-5 h-5 opacity-80 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Touch hint for mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-6 text-xs text-wine-600/70 tracking-wide font-sans"
        >
          Toque no botão para abrir nosso presente digital
        </motion.p>
      </motion.div>
    </div>
  );
};
