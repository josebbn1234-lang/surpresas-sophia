import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { FINAL_SECTION, COUPLE_DATA } from '../config';

export const FinalScreen: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="final" className="relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-b from-transparent via-[#ffe8ee]/40 to-[#ffd9e4]/70">
      {/* Decorative ambient glowing circles */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-romance-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border border-white/80 shadow-2xl relative"
        >
          {/* Couple badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-romance-200 text-wine-700 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-romance-500" />
            <span>{COUPLE_DATA.authorName} & {COUPLE_DATA.partnerName}</span>
            <Sparkles className="w-3.5 h-3.5 text-romance-500" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-4xl text-wine-900 font-bold leading-relaxed sm:leading-tight mb-6">
            {FINAL_SECTION.headline}
          </h2>

          {/* Love Declaration */}
          <p className="font-cormorant text-2xl sm:text-3xl text-romance-600 font-semibold italic mb-8">
            "{FINAL_SECTION.loveDeclaration}"
          </p>

          {/* Signature */}
          <div className="mb-10">
            <p className="font-cursive text-3xl sm:text-5xl text-wine-800">
              {FINAL_SECTION.signature}
            </p>
          </div>

          {/* Pulsing Animated Heart with halo rings */}
          <div className="relative inline-flex items-center justify-center my-4">
            <div className="absolute w-16 h-16 rounded-full bg-romance-400/20 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="relative p-4 rounded-full bg-gradient-to-tr from-romance-500 to-wine-600 text-white shadow-lg shadow-romance-600/30 animate-pulse-subtle">
              <Heart className="w-7 h-7 fill-current" />
            </div>
          </div>

          {/* Back to top button */}
          <div className="mt-10 pt-6 border-t border-romance-200/60 flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white text-wine-700 hover:text-romance-600 text-xs sm:text-sm font-medium border border-romance-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Voltar ao início do nosso site</span>
            </button>
            <p className="text-[11px] text-wine-500/70 mt-4 tracking-wide font-sans">
              Feito com todo o amor do mundo especialmente para Maria Sophia ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
