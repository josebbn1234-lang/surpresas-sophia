import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  type: 'heart' | 'star' | 'sparkle';
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

export const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clickSparkles, setClickSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate gentle background particles
    const items: Particle[] = [];
    const count = 22; // Balanced for high performance on iPhones and computers

    for (let i = 0; i < count; i++) {
      const types: ('heart' | 'star' | 'sparkle')[] = ['heart', 'heart', 'sparkle', 'star'];
      items.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        left: Math.random() * 96 + 2, // 2vw to 98vw
        size: Math.random() * 14 + 10, // 10px to 24px
        duration: Math.random() * 12 + 10, // 10s to 22s
        delay: Math.random() * 10,
        drift: Math.random() * 60 - 30, // -30px to +30px
        opacity: Math.random() * 0.4 + 0.25,
      });
    }
    setParticles(items);

    // Global click listener to create subtle floating hearts on tap
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      const newSparkle = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
      };

      setClickSparkles((prev) => [...prev.slice(-8), newSparkle]);

      setTimeout(() => {
        setClickSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 1200);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Floating Elements */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] select-none will-change-transform"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatParticle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            ['--drift' as string]: `${p.drift}px`,
          }}
        >
          {p.type === 'heart' && (
            <svg
              className="text-romance-400 fill-current drop-shadow-sm"
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {p.type === 'star' && (
            <svg
              className="text-gold-400 fill-current opacity-70"
              width={p.size * 0.8}
              height={p.size * 0.8}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.1-6.2-4.5-6.2 4.5 2.3-7.1-6.1-4.5h7.6z" />
            </svg>
          )}
          {p.type === 'sparkle' && (
            <span className="inline-block w-2 h-2 rounded-full bg-romance-300 blur-[0.5px]" />
          )}
        </span>
      ))}

      {/* Tap/Click Micro Hearts */}
      {clickSparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-tap-heart"
          style={{ left: sparkle.x, top: sparkle.y }}
        >
          <svg
            className="w-5 h-5 text-romance-500 fill-current drop-shadow"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: var(--tw-opacity, 0.6);
          }
          85% {
            opacity: var(--tw-opacity, 0.6);
          }
          100% {
            transform: translateY(-115vh) translateX(var(--drift, 20px)) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes tapHeart {
          0% {
            transform: translate(-50%, -50%) scale(0.4);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -120%) scale(1.4);
            opacity: 0;
          }
        }
        .animate-tap-heart {
          animation: tapHeart 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
