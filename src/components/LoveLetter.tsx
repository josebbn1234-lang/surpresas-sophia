import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MailOpen, Heart, Sparkles, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LOVE_LETTER } from '../config';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleLetter = () => {
    if (!isOpen) {
      // Gentle romantic sparkle burst upon opening
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#ff8fab', '#ffe3ec', '#d4af37'],
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="carta" className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-romance-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romance-100/70 border border-romance-200 text-wine-700 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3"
          >
            <Feather className="w-3.5 h-3.5 text-romance-600" />
            <span>Escrito do Coração</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl text-wine-900 font-semibold tracking-tight mb-4"
          >
            {LOVE_LETTER.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-wine-800/80 font-cormorant text-xl sm:text-2xl italic max-w-lg mx-auto"
          >
            Palavras sinceras para a mulher que transformou a minha vida.
          </motion.p>
        </div>

        {/* Envelope & Letter Container */}
        <div className="flex flex-col items-center">
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={toggleLetter}
              className="cursor-pointer group relative w-full max-w-md bg-gradient-to-br from-[#ffeef3] to-[#ffdce6] rounded-2xl p-8 sm:p-10 shadow-xl border border-romance-200/90 text-center flex flex-col items-center overflow-hidden"
            >
              {/* Envelope flap graphics */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-romance-200/60 to-transparent pointer-events-none" />

              {/* Wax Seal / Stamp */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wine-700 via-wine-600 to-romance-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ring-4 ring-gold-400/40">
                  <div className="w-16 h-16 rounded-full border border-gold-300/60 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-gold-300 fill-current animate-pulse-subtle" />
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-gold-400 absolute -top-1 -right-1 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-wine-900 mb-2">
                Uma carta para Maria Sophia
              </h3>
              <p className="font-cormorant italic text-lg text-wine-700 mb-6">
                De: Neto • Com todo o carinho
              </p>

              <button
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-wine-700 text-white font-medium text-sm group-hover:bg-wine-800 transition-colors shadow-md"
              >
                <Mail className="w-4 h-4 text-romance-200" />
                <span>Toque para abrir a carta</span>
              </button>
            </motion.div>
          )}

          {/* Opened Letter */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full relative"
              >
                {/* Physical digital letter paper */}
                <div className="letter-paper rounded-2xl p-7 sm:p-12 border border-romance-200 shadow-2xl relative">
                  {/* Decorative corner ribbons */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-romance-100/80 border border-romance-200 text-wine-700 text-xs font-semibold">
                      <MailOpen className="w-3.5 h-3.5 text-romance-600" />
                      <span>Carta Aberta</span>
                    </div>
                  </div>

                  {/* Stamp */}
                  <div className="inline-block p-2 border-2 border-dashed border-romance-300 rounded-lg mb-8 bg-white/70">
                    <div className="text-center">
                      <Heart className="w-5 h-5 text-romance-500 fill-current mx-auto" />
                      <span className="text-[9px] font-bold tracking-widest text-wine-700 uppercase block mt-0.5">
                        1 ano & 6 meses
                      </span>
                    </div>
                  </div>

                  {/* Salutation */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-wine-900 font-bold mb-6">
                    {LOVE_LETTER.salutation}
                  </h3>

                  {/* Letter Body Paragraphs */}
                  <div className="space-y-4 font-sans text-wine-900 text-base sm:text-lg leading-relaxed sm:leading-loose">
                    {LOVE_LETTER.paragraphs.map((p, idx) => (
                      <p key={idx} className="indent-4 sm:indent-6">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Final Note */}
                  <div className="mt-8 pt-4 border-t border-romance-200/60">
                    <p className="font-serif text-xl sm:text-2xl text-romance-600 font-semibold mb-6">
                      {LOVE_LETTER.finalNote}
                    </p>

                    {/* Signature */}
                    <div className="text-right">
                      <p className="font-cormorant italic text-lg sm:text-xl text-wine-700">
                        Com todo o meu amor,
                      </p>
                      <p className="font-cursive text-4xl sm:text-5xl text-wine-800 mt-1">
                        Neto.
                      </p>
                    </div>
                  </div>

                  {/* Close button option */}
                  <div className="mt-10 text-center">
                    <button
                      onClick={toggleLetter}
                      className="text-xs text-wine-500 hover:text-romance-600 underline font-sans transition-colors"
                    >
                      Guardar carta de volta no envelope
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
