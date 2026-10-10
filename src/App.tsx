import React, { useState, useEffect, useRef } from 'react';
import { FloatingParticles } from './components/FloatingParticles';
import { MusicPlayer } from './components/MusicPlayer';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { LoveCounter } from './components/LoveCounter';
import { OurStory } from './components/OurStory';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveLetter } from './components/LoveLetter';
import { SurpriseSection } from './components/SurpriseSection';
import { FinalScreen } from './components/FinalScreen';
import { Play, Pause, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState<boolean>(false);
  const [isAutoTourActive, setIsAutoTourActive] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const autoTourTimerRef = useRef<number | null>(null);

  // Sections sequence for automatic presentation mode
  const tourSteps = [
    { id: 'contador', name: 'Nosso Amor em Números', duration: 7500 },
    { id: 'historia', name: 'Nossa Linha do Tempo', duration: 9000 },
    { id: 'galeria', name: 'Álbum de Fotos', duration: 8000 },
    { id: 'carta', name: 'Carta de Amor', duration: 11000 },
    { id: 'surpresa', name: 'Surpresa Especial', duration: 8500 },
    { id: 'final', name: 'Para Sempre', duration: 8000 },
  ];

  const handleStartExperience = (enableAutoTour = true) => {
    setIsStarted(true);
    setAutoPlayMusic(true);

    if (enableAutoTour) {
      // Inicia o modo automático após 1.5s para transição suave
      setTimeout(() => {
        setIsAutoTourActive(true);
        setCurrentStepIndex(0);
      }, 1500);
    }
  };

  const toggleAutoTour = () => {
    setIsAutoTourActive((prev) => !prev);
  };

  // Auto-tour progression logic
  useEffect(() => {
    if (!isAutoTourActive || !isStarted) {
      if (autoTourTimerRef.current) {
        clearTimeout(autoTourTimerRef.current);
      }
      return;
    }

    const currentStep = tourSteps[currentStepIndex];
    if (!currentStep) {
      setIsAutoTourActive(false);
      return;
    }

    const targetElement = document.getElementById(currentStep.id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    autoTourTimerRef.current = window.setTimeout(() => {
      if (currentStepIndex < tourSteps.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      } else {
        setIsAutoTourActive(false);
      }
    }, currentStep.duration);

    return () => {
      if (autoTourTimerRef.current) {
        clearTimeout(autoTourTimerRef.current);
      }
    };
  }, [isAutoTourActive, currentStepIndex, isStarted]);

  return (
    <div id="top" className="min-h-screen relative text-wine-900 selection:bg-romance-200 selection:text-wine-900">
      {/* Background Floating Petals & Hearts */}
      <FloatingParticles />

      {/* Floating Music Control */}
      <MusicPlayer autoPlayTrigger={autoPlayMusic} />

      {/* Cinematic Intro Screen */}
      <IntroScreen
        onStart={() => handleStartExperience(true)}
        isStarted={isStarted}
      />

      {/* Main Experience (Visible when started) */}
      <div
        className={`transition-opacity duration-1000 ${
          isStarted ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Navigation & Progress Bar */}
        <Navbar />

        {/* Floating Auto-Tour Control Bar */}
        {isStarted && (
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none max-w-[92vw]">
            <div className="glass-card rounded-full px-4 py-2 flex items-center gap-3 shadow-lg border border-romance-200/80 bg-white/90 backdrop-blur-md">
              <button
                onClick={toggleAutoTour}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-romance-500 to-wine-600 text-white text-xs font-semibold shadow-sm hover:from-romance-600 hover:to-wine-700 transition-all transform active:scale-95"
              >
                {isAutoTourActive ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pausar Modo Automático</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Continuar Modo Automático</span>
                  </>
                )}
              </button>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-wine-700 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-romance-500" />
                <span>
                  {isAutoTourActive
                    ? `Apresentando: ${tourSteps[currentStepIndex]?.name}`
                    : 'Passeio automático pausado'}
                </span>
              </div>

              {isAutoTourActive && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-romance-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-romance-500"></span>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Main Content Sections */}
        <main className="relative z-10 pt-12 sm:pt-16 pb-20">
          {/* Section 1: Love Counter */}
          <LoveCounter />

          {/* Section 2: Our Story Timeline */}
          <OurStory />

          {/* Section 3: Photo Gallery */}
          <PhotoGallery />

          {/* Section 4: Love Letter */}
          <LoveLetter />

          {/* Section 5: Surprise Section */}
          <SurpriseSection />

          {/* Section 6: Final Screen */}
          <FinalScreen />
        </main>
      </div>
    </div>
  );
};

export default App;
