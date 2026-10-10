import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
import { TIMELINE_EVENTS } from '../config';

export const OurStory: React.FC = () => {
  return (
    <section id="historia" className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-romance-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romance-100/70 border border-romance-200 text-wine-700 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-romance-600" />
            <span>Nossa Linha do Tempo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl text-wine-900 font-semibold tracking-tight mb-4"
          >
            Nossa história
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-wine-800/80 font-cormorant text-xl sm:text-2xl italic max-w-xl mx-auto"
          >
            Cada segundo ao seu lado é uma página bonita que guardo para sempre.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 w-0.5 sm:-translate-x-1/2 bg-gradient-to-b from-romance-200 via-romance-400 to-wine-400/40" />

          {/* Timeline Cards */}
          <div className="space-y-12 sm:space-y-16">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Heart Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-romance-400 shadow-md">
                    <Heart className="w-3.5 h-3.5 text-romance-600 fill-current" />
                  </div>

                  {/* Card Content Container */}
                  <div
                    className={`ml-14 sm:ml-0 w-[calc(100%-3.5rem)] sm:w-[calc(50%-2.5rem)] ${
                      isEven ? 'sm:mr-auto sm:pr-2' : 'sm:ml-auto sm:pl-2'
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:shadow-xl hover:border-romance-300/80 group">
                      {/* Badge / Tag */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-romance-600 bg-romance-100/80 px-2.5 py-1 rounded-full">
                          {event.tag}
                        </span>
                        <span className="text-xs text-wine-500 font-medium">
                          {event.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-wine-900 mb-2.5 group-hover:text-romance-600 transition-colors">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-wine-800/80 text-sm sm:text-base leading-relaxed mb-4 font-sans">
                        {event.description}
                      </p>

                      {/* Photo / Photo placeholder */}
                      <div className="mt-4 rounded-xl overflow-hidden border border-romance-100 bg-romance-50/50 shadow-inner">
                        {event.image || event.video ? (
                          <div className="relative group/img overflow-hidden">
                            {event.video ? (
                              <video
                                src={event.video}
                                poster={event.image}
                                muted
                                autoPlay
                                loop
                                playsInline
                                preload="metadata"
                                className="w-full aspect-[3/4] object-cover object-[center_25%]"
                              />
                            ) : (
                              <img
                                src={event.image}
                                alt={event.title}
                                loading="lazy"
                                className="w-full aspect-[3/4] object-cover object-[center_25%] transition-transform duration-700 group-hover/img:scale-105"
                              />
                            )}
                            {event.caption && (
                              <div className="p-2.5 bg-white/90 backdrop-blur-sm text-center">
                                <p className="font-cormorant italic text-sm text-wine-800">
                                  "{event.caption}"
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="p-6 text-center flex flex-col items-center justify-center bg-gradient-to-br from-white/90 to-romance-50/70 min-h-[140px]">
                            <div className="w-10 h-10 rounded-full bg-romance-100/80 flex items-center justify-center text-romance-500 mb-2">
                              <ImageIcon className="w-5 h-5 opacity-70" />
                            </div>
                            <p className="font-cormorant italic text-base text-wine-700">
                              "{event.caption || 'Uma lembrança guardada com todo o amor.'}"
                            </p>
                            <span className="text-[10px] text-wine-400 mt-1 uppercase tracking-wider">
                              Momento especial de nós dois
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
