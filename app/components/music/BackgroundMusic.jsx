'use client';
import { useEffect, useRef, useState } from 'react';

export default function HeroMusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
 
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Still blocked"));
        window.removeEventListener('click', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 group">
      <audio ref={audioRef} src="/bg/kingt.mp3"  preload="auto" />
      
      <button
        onClick={togglePlay}
        className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-2xl"
      >
        {/* Animated Visualizer Bars */}
        <div className="flex items-end gap-[3px] h-4">
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={`w-1 bg-indigo-400 rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-bounce-slow' : 'h-1'
              }`}
              style={{ 
                animationDelay: `${bar * 0.1}s`,
                height: isPlaying ? '100%' : '20%' 
              }}
            />
          ))}
        </div>

        <span className="text-xs font-medium tracking-widest uppercase text-white/80">
          {isPlaying ? 'Now Playing' : 'Click to Play'}
        </span>
      </button>

      {/* Subtle song info */}
      <p className="text-[10px] text-white/40 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity">
        Tulsa — Background Score
      </p>
      
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.2); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}