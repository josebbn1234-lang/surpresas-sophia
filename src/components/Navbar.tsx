import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { COUPLE_DATA } from '../config';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 pointer-events-none transition-all duration-300">
      {/* Scroll progress bar */}
      <div className="w-full h-1 bg-romance-100/50">
        <div
          className="h-full bg-gradient-to-r from-romance-400 via-pink-500 to-wine-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating glass bar */}
      <div
        className={`max-w-4xl mx-auto px-4 py-2.5 transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        <div className="glass-card rounded-full px-4 sm:px-6 py-2 flex items-center justify-between shadow-sm pointer-events-auto border border-white/80">
          <a
            href="#top"
            className="flex items-center gap-2 font-cursive text-xl sm:text-2xl text-wine-800 hover:text-romance-600 transition-colors"
          >
            <span>{COUPLE_DATA.authorName}</span>
            <Heart className="w-3.5 h-3.5 text-romance-500 fill-current inline" />
            <span>{COUPLE_DATA.partnerName}</span>
          </a>

          <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-wine-700">
            <a href="#contador" className="hover:text-romance-600 transition-colors">Contador</a>
            <a href="#historia" className="hover:text-romance-600 transition-colors">Nossa História</a>
            <a href="#galeria" className="hover:text-romance-600 transition-colors">Fotos</a>
            <a href="#carta" className="hover:text-romance-600 transition-colors">Carta</a>
            <a href="#surpresa" className="hover:text-romance-600 transition-colors">Surpresa</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
