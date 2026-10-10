import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS, PhotoItem } from '../config';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (photo: PhotoItem, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIdx = (selectedIndex + 1) % GALLERY_PHOTOS.length;
    setSelectedIndex(nextIdx);
    setSelectedPhoto(GALLERY_PHOTOS[nextIdx]);
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIdx = (selectedIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setSelectedIndex(prevIdx);
    setSelectedPhoto(GALLERY_PHOTOS[prevIdx]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, selectedIndex]);

  return (
    <section id="galeria" className="relative py-16 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romance-100/70 border border-romance-200 text-wine-700 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3"
          >
            <Camera className="w-3.5 h-3.5 text-romance-600" />
            <span>Álbum de Memórias</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl text-wine-900 font-semibold tracking-tight mb-4"
          >
            Nossos momentos em fotos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-wine-800/80 font-cormorant text-xl sm:text-2xl italic max-w-xl mx-auto"
          >
            Cada registro guarda um pedaço do quanto sou feliz com você.
          </motion.p>
        </div>

        {/* Romantic Collage / Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {GALLERY_PHOTOS.map((photo, index) => {
            const rotations = ['rotate-[-1.5deg]', 'rotate-[1.5deg]', 'rotate-[-2deg]', 'rotate-[1deg]', 'rotate-[-1deg]', 'rotate-[2deg]'];
            const rot = rotations[index % rotations.length];

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => openLightbox(photo, index)}
                className={`cursor-pointer group ${rot} hover:rotate-0 transition-transform duration-300`}
              >
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-romance-100/90 flex flex-col h-full">
                  {/* Photo Frame */}
                  <div className="relative overflow-hidden rounded-xl bg-romance-50 aspect-[3/4] flex items-center justify-center">
                    {photo.image ? (
                      <img
                        src={photo.image}
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-500 rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-romance-50 via-cream-100 to-romance-100/60 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-romance-500 mb-3 group-hover:scale-110 transition-transform">
                          <Heart className="w-6 h-6 fill-current text-romance-400" />
                        </div>
                        <span className="font-serif font-semibold text-wine-800 text-lg mb-1">
                          {photo.title}
                        </span>
                        <p className="font-cormorant italic text-sm text-wine-600 line-clamp-2">
                          "{photo.caption}"
                        </p>
                        <span className="mt-3 text-[10px] text-romance-600 uppercase tracking-widest font-sans font-medium px-2 py-0.5 rounded-full bg-white/70">
                          Toque para ver
                        </span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-wine-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                      <div className="text-white">
                        <p className="text-xs font-semibold tracking-wider uppercase text-romance-200">
                          {photo.title}
                        </p>
                        <p className="font-cormorant italic text-sm text-white/90 line-clamp-1">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Polaroid caption footer */}
                  <div className="pt-3 pb-1 text-center">
                    <p className="font-cursive text-xl sm:text-2xl text-wine-800 leading-tight">
                      {photo.title}
                    </p>
                    <p className="text-xs text-wine-500/80 font-sans mt-0.5 line-clamp-1">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tip for editing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xs text-wine-500 mt-10"
        >
          Toque em qualquer fotografia para vê-la com carinho em tamanho ampliado
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wine-950/80 backdrop-blur-md"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Fechar foto ampliada"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 sm:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors focus:outline-none"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-3 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors focus:outline-none"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <div className="relative rounded-xl overflow-hidden bg-romance-50 max-h-[65vh] flex items-center justify-center">
                {selectedPhoto.image ? (
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                  />
                ) : (
                  <div className="py-20 px-8 text-center flex flex-col items-center justify-center bg-gradient-to-br from-romance-100 via-white to-pink-50 w-full">
                    <Heart className="w-16 h-16 text-romance-400 fill-current animate-pulse-subtle mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-wine-900 mb-2">
                      {selectedPhoto.title}
                    </h3>
                    <p className="font-cormorant text-xl text-wine-700 italic max-w-md">
                      "{selectedPhoto.caption}"
                    </p>
                  </div>
                )}
              </div>

              {/* Caption and Photo Counter */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-1.5 text-xs text-romance-600 font-semibold tracking-wider uppercase mb-1">
                  <Sparkles className="w-3 h-3 text-gold-500" />
                  <span>Foto {selectedIndex + 1} de {GALLERY_PHOTOS.length}</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-wine-900">
                  {selectedPhoto.title}
                </h4>
                <p className="font-cormorant text-lg text-wine-800/90 italic mt-1 max-w-lg mx-auto">
                  "{selectedPhoto.caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
