import React from 'react';
import { Camera, Award, Calendar, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0d0d0f] overflow-hidden">
      {/* Background Decorative Aperture Watermark */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Overlapping Photographer Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none min-h-[480px] sm:min-h-[540px]">
              
              {/* Primary Top Right Photo - John Doe Portrait with Camera */}
              <div className="absolute top-0 right-0 w-[68%] sm:w-[65%] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/80 bg-zinc-900 group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                  alt="John Doe Photographer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-mono">
                  <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    <Camera className="w-3.5 h-3.5 text-amber-400" /> John Doe
                  </span>
                  <span className="text-zinc-400">85mm f/1.4</span>
                </div>
              </div>

              {/* Secondary Bottom Left Photo - Photographer on Coastal Rocks with Tripod */}
              <div className="absolute bottom-0 left-0 w-[68%] sm:w-[65%] h-[300px] sm:h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-700/60 bg-zinc-900 z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
                  alt="Photographer with Tripod in Night Landscape"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-mono">
                  <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-zinc-300">
                    Field Shoot • Dusk
                  </span>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute top-1/2 left-2 sm:-left-4 -translate-y-1/2 z-20 bg-[#18181c]/95 border border-amber-500/30 backdrop-blur-md px-5 py-4 rounded-xl shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">10+ Years</div>
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-sans">Excellence</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Text Bio & Description */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-500/80" />
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
                ABOUT ME
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
              Hi! My name is <span className="text-amber-200/90 font-serif-custom">John Doe</span>, <br className="hidden sm:inline" />
              I'm a photographer.
            </h1>

            {/* Paragraphs precisely matching screenshot style */}
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              <p className="first-letter:text-2xl first-letter:font-serif first-letter:text-white first-letter:mr-1">
                Nunc pulvinar sagittis turpis, eleifend ultrices magna pharetra vitae. Vivamus in metus ligula. Cras vitae dolor vel tellus laoreet mattis. Donec quis aliquet lorem, ac dapibus velit.
              </p>
              <p>
                Mauris accumsan quis purus ut pretium. Suspendisse nunc magna, mollis vel pellentesque quis, consectetur eget neque. Phasellus posuere lacus lacus. Nunc consectetur, nulla at sagittis aliquam, velit diam molestie quam, nec congue orci odio vitae leo. Praesent id purus neque. Integer ultrices, quam vel sagittis dictum, risus felis placerat erat, ac volutpat orci lacus vel velit.
              </p>
            </div>

            {/* Stats / Features Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-zinc-800/80">
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <div className="text-xl font-bold text-white font-serif-custom">500+</div>
                <div className="text-xs text-zinc-400 font-sans">Sessions Shot</div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <div className="text-xl font-bold text-white font-serif-custom">18 Awards</div>
                <div className="text-xs text-zinc-400 font-sans">International</div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 col-span-2 sm:col-span-1">
                <div className="text-xl font-bold text-amber-400 font-serif-custom">100%</div>
                <div className="text-xs text-zinc-400 font-sans">Satisfaction</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#f95738] hover:bg-[#e04526] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-950/30 flex items-center gap-2 group"
                id="about-book-btn"
              >
                <span>Book a Session</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
