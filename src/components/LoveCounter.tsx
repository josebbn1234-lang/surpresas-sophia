import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Sparkles, Calendar, Activity } from 'lucide-react';
import { DATA_INICIO_NAMORO, COUPLE_DATA } from '../config';

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  monthsApprox: number;
  heartbeatsApprox: string;
}

export const LoveCounter: React.FC = () => {
  const [time, setTime] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    monthsApprox: 18,
    heartbeatsApprox: '0',
  });

  useEffect(() => {
    // Parse AAAA-MM-DD safely across all browsers/timezones
    const [year, month, day] = DATA_INICIO_NAMORO.split('-').map(Number);
    const startDate = new Date(year, (month || 1) - 1, day || 1, 0, 0, 0);

    const updateTimer = () => {
      const now = new Date();
      const diffMs = Math.max(0, now.getTime() - startDate.getTime());
      const totalSeconds = Math.floor(diffMs / 1000);

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      // Approximate months and heartbeats (~75 bpm)
      const months = Math.floor(days / 30.4375);
      const beats = Math.floor((totalSeconds / 60) * 75);

      setTime({
        days,
        hours,
        minutes,
        seconds,
        totalDays: days,
        monthsApprox: months,
        heartbeatsApprox: beats.toLocaleString('pt-BR'),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { value: time.days, label: 'Dias' },
    { value: String(time.hours).padStart(2, '0'), label: 'Horas' },
    { value: String(time.minutes).padStart(2, '0'), label: 'Minutos' },
    { value: String(time.seconds).padStart(2, '0'), label: 'Segundos' },
  ];

  return (
    <section id="contador" className="relative py-16 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romance-100/70 border border-romance-200 text-wine-700 text-xs sm:text-sm font-medium tracking-wider uppercase mb-4"
        >
          <Clock className="w-3.5 h-3.5 text-romance-600" />
          <span>Nosso Tempo Juntos</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl text-wine-900 font-semibold tracking-tight mb-4"
        >
          Nosso amor em números
        </motion.h2>

        {/* Highlight Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-10 px-4"
        >
          <div className="relative p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-romance-200/70 shadow-sm">
            <Heart className="w-6 h-6 text-romance-400 fill-current absolute -top-3 left-1/2 -translate-x-1/2 drop-shadow-sm" />
            <p className="font-cormorant text-xl sm:text-2xl text-wine-800 italic leading-relaxed">
              "{COUPLE_DATA.counterPhrase}"
            </p>
          </div>
        </motion.div>

        {/* Live Counters Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto mb-10"
        >
          {timeBlocks.map((block, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-romance-300/80 group"
            >
              <div className="text-3xl sm:text-5xl font-serif font-bold text-wine-700 tracking-tight group-hover:scale-105 transition-transform duration-300 font-mono">
                {block.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-romance-600 font-sans">
                {block.label}
              </div>
              <div className="w-6 h-0.5 bg-romance-200 rounded-full mt-3 group-hover:bg-romance-400 group-hover:w-10 transition-all duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Romantic Micro Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/60 backdrop-blur-sm border border-romance-100 text-left">
            <div className="p-2.5 rounded-lg bg-romance-100/70 text-romance-600">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-wine-600 font-medium">Marco de Amor</div>
              <div className="text-sm font-semibold text-wine-900 font-serif">1 ano e 6 meses (18 meses)</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/60 backdrop-blur-sm border border-romance-100 text-left">
            <div className="p-2.5 rounded-lg bg-romance-100/70 text-romance-600">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-xs text-wine-600 font-medium">Batimentos Juntos</div>
              <div className="text-sm font-semibold text-wine-900 font-serif">~{time.heartbeatsApprox}</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/60 backdrop-blur-sm border border-romance-100 text-left">
            <div className="p-2.5 rounded-lg bg-romance-100/70 text-romance-600">
              <Sparkles className="w-4 h-4 text-gold-500" />
            </div>
            <div>
              <div className="text-xs text-wine-600 font-medium">História Escrita</div>
              <div className="text-sm font-semibold text-wine-900 font-serif">{time.totalDays} dias de carinho</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
