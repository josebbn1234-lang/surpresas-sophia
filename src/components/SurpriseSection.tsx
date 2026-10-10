import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Sparkles, X, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SURPRISE_DATA } from '../config';

export const SurpriseSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSecondary, setShowSecondary] = useState<boolean>(false);

  const triggerConfettiShow = () => {
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#ff5c8a', '#ff8fab', '#be124e', '#ffd0dd', '#d4af37'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleOpenSurprise = () => {
    setIsOpen(true);
    setShowSecondary(false);
    triggerConfettiShow();

    // Reveal secondary message gently after 3 seconds
    setTimeout(() => {
      setShowSecondary(true);
    }, 2800);
  };

  return (
    <section id="surpresa" className="relative py-16 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Card Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border border-romance-200/90 shadow-xl relative overflow-hidden"
        >
          {/* Subtle glowing sphere background */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-romance-300/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-pink-300/20 rounded-full blur-2xl pointer-events-none" />

          {/* Gift Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-tr from-romance-100 to-white border border-romance-200 text-romance-600 shadow-md mb-6">
            <Gift className="w-8 h-8 animate-bounce" style={{ animationDuration: '2.5s' }} />
          </div>

          {/* Teaser Headline */}
          <h2 className="font-serif text-2xl sm:text-4xl text-wine-900 font-semibold mb-3">
            {SURPRISE_DATA.teaser}
          </h2>

          <p className="font-cormorant italic text-lg sm:text-2xl text-wine-700/90 mb-8 max-w-lg mx-auto">
            Uma mensagem guardada a sete chaves para fazer você sorrir.
          </p>

          {/* Surprise Button */}
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-romance-400 via-pink-500 to-wine-600 rounded-full blur-md opacity-50 group-hover:opacity-85 transition duration-500 group-hover:scale-105" />
            <button
              onClick={handleOpenSurprise}
              className="relative flex items-center gap-3 px-8 sm:px-12 py-4 bg-gradient-to-r from-romance-600 to-wine-600 hover:from-romance-500 hover:to-wine-500 text-white font-medium rounded-full shadow-lg shadow-romance-600/30 transform transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-romance-300"
            >
              <Heart className="w-5 h-5 fill-current text-white animate-pulse" />
              <span>{SURPRISE_DATA.buttonText}</span>
              <Sparkles className="w-4 h-4 text-gold-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Romantic Surprise Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wine-950/85 backdrop-blur-lg"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none z-50"
              aria-label="Fechar surpresa"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="relative max-w-xl w-full bg-gradient-to-b from-white via-cream-50 to-[#fff0f4] rounded-3xl p-7 sm:p-12 shadow-2xl border border-romance-200/90 text-center overflow-hidden"
            >
              {/* Floating Hearts Graphic */}
              <div className="flex justify-center items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-romance-300 fill-current animate-pulse-subtle" />
                <div className="p-3.5 rounded-full bg-romance-100 text-romance-600 shadow-inner">
                  <Heart className="w-10 h-10 fill-current animate-pulse" />
                </div>
                <Heart className="w-6 h-6 text-romance-300 fill-current animate-pulse-subtle" />
              </div>

              {/* Primary Quote */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <p className="font-serif text-2xl sm:text-3xl text-wine-900 font-bold leading-relaxed sm:leading-snug">
                  "{SURPRISE_DATA.primaryQuote}"
                </p>
              </motion.div>

              {/* Secondary Message (Appears smoothly after primary quote) */}
              <AnimatePresence>
                {showSecondary ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="p-5 sm:p-6 rounded-2xl bg-white/80 border border-romance-200 shadow-sm mb-6"
                  >
                    <p className="font-cormorant text-xl sm:text-2xl text-wine-800 italic leading-relaxed font-semibold">
                      {SURPRISE_DATA.secondaryMessage}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    className="py-4 text-xs tracking-wider text-wine-500 uppercase font-sans animate-pulse"
                  >
                    Mais uma coisinha para você...
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={triggerConfettiShow}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-romance-100 text-wine-700 hover:bg-romance-200 text-sm font-medium transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Mais corações ❤️</span>
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-wine-700 text-white hover:bg-wine-800 text-sm font-medium transition-colors shadow-sm"
                >
                  Guardar no coração
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
