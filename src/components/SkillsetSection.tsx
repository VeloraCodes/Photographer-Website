import React from 'react';
import { SKILLSET_ITEMS } from '../data/content';
import { UserCheck, Mountain, Building2, HeartHandshake, Camera, Sliders } from 'lucide-react';

export const SkillsetSection: React.FC = () => {
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'portrait':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
            <UserCheck className="w-6 h-6" />
          </div>
        );
      case 'landscape':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
            <Mountain className="w-6 h-6" />
          </div>
        );
      case 'corporate':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
            <Building2 className="w-6 h-6" />
          </div>
        );
      case 'wedding':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
            <HeartHandshake className="w-6 h-6" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Camera className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <section id="skillset" className="py-20 md:py-28 bg-[#111115] relative overflow-hidden border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-500/80" />
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
              MY SKILLSET
            </span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            I'm very talented. Check what I can do!
          </h2>
          <div className="w-full h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-700/60 to-transparent mt-6" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: 2x2 Skills Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SKILLSET_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 space-y-3 hover:bg-zinc-900/80"
              >
                {renderSkillIcon(item.iconName)}
                <h3 className="text-lg font-serif-custom font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: 3-Photo Layered Studio Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full min-h-[420px] sm:min-h-[480px]">
              
              {/* Top Studio Lighting Photo */}
              <div className="w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 group">
                <img
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800"
                  alt="Photography Studio Setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-zinc-300 border border-white/10 font-mono">
                  Pro Lighting Studio
                </div>
              </div>

              {/* Overlapping Bottom Left Photo - Street Skateboarder / Low Angle Shot */}
              <div className="absolute -bottom-6 left-0 sm:-left-4 w-[52%] sm:w-[50%] h-[200px] sm:h-[220px] rounded-2xl overflow-hidden shadow-2xl border-2 border-zinc-900 bg-zinc-900 z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80&w=600"
                  alt="Action Street Photography"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                  Action & Street
                </span>
              </div>

              {/* Overlapping Bottom Right Photo - Hands holding camera lens */}
              <div className="absolute -bottom-6 right-0 sm:-right-4 w-[52%] sm:w-[50%] h-[200px] sm:h-[220px] rounded-2xl overflow-hidden shadow-2xl border-2 border-zinc-900 bg-zinc-900 z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600"
                  alt="Hands Holding Lens"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                  Gear & Precision
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
