import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioItem } from '../types';
import { ChevronLeft, ChevronRight, Eye, Maximize2, Camera } from 'lucide-react';

interface CoverflowGalleryProps {
  onSelectPhoto: (photo: PortfolioItem) => void;
}

export const CoverflowGallery: React.FC<CoverflowGalleryProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const categories = ['All', 'Portraits', 'Landscapes', 'Commercial', 'Weddings', 'Studio'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Helper to calculate 3D coverflow styling for each index relative to active index
  const getCardStyle = (index: number) => {
    const total = filteredItems.length;
    let offset = index - activeIndex;

    // Handle wrap around offset calculations
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);

    if (absOffset > 3) {
      return { display: 'none' };
    }

    const isActive = offset === 0;
    const rotateY = offset < 0 ? 35 : offset > 0 ? -35 : 0;
    const translateX = offset * 140; // pixel offset
    const translateZ = isActive ? 100 : -absOffset * 100;
    const scale = isActive ? 1 : Math.max(0.7, 1 - absOffset * 0.15);
    const opacity = isActive ? 1 : Math.max(0.3, 1 - absOffset * 0.35);
    const zIndex = 20 - absOffset * 5;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    };
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#09090b] relative overflow-hidden border-t border-zinc-800/60">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial from-amber-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Coverflow Container Panel matching screenshot */}
        <div className="bg-[#18181c] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative">
          
          {/* Header Title */}
          <div className="text-center space-y-3 mb-8">
            <h2 className="font-serif-custom text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-200 tracking-wide">
              Something That We Have
            </h2>
            <div className="w-16 h-[2px] bg-amber-500 mx-auto rounded-full" />

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveIndex(0);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3D Coverflow Stage */}
          <div className="relative h-[420px] sm:h-[480px] flex items-center justify-center perspective-1000 my-4 overflow-hidden">
            
            {/* Left Control Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-30 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-amber-500 hover:text-black transition-all shadow-xl hover:scale-110 active:scale-95"
              aria-label="Previous Slide"
              id="coverflow-prev-btn"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Control Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-30 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-amber-500 hover:text-black transition-all shadow-xl hover:scale-110 active:scale-95"
              aria-label="Next Slide"
              id="coverflow-next-btn"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 3D Cards Stack */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[340px] sm:h-[400px] flex items-center justify-center transform-style-3d">
              {filteredItems.map((item, idx) => {
                const isCurrent = idx === activeIndex;
                const cardStyle = getCardStyle(idx);

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (!isCurrent) {
                        setActiveIndex(idx);
                      } else {
                        onSelectPhoto(item);
                      }
                    }}
                    style={cardStyle}
                    className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer border ${
                      isCurrent
                        ? 'border-zinc-400 ring-2 ring-amber-500/40'
                        : 'border-zinc-800/80 grayscale-[40%]'
                    } bg-zinc-950 group`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                    {/* Card Title & Info on Hover/Current */}
                    <div className="absolute bottom-16 left-4 right-4 text-center">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-serif-custom font-bold text-white mt-1">
                        {item.title}
                      </h3>
                    </div>

                    {/* "SEE MORE" Button placed at bottom matching screenshot */}
                    {isCurrent && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-40">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectPhoto(item);
                          }}
                          className="px-5 py-2 rounded-lg bg-[#539091] hover:bg-[#437879] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg flex items-center gap-1.5 border border-teal-300/30 hover:scale-105"
                          id={`see-more-btn-${item.id}`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>SEE MORE</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {filteredItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? 'w-6 bg-amber-400'
                    : 'bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
