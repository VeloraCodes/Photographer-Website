import React from 'react';
import { PortfolioItem } from '../types';
import { X, Camera, MapPin, Calendar, Aperture, Sliders, Share2, Download, Check } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!item) return null;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="bg-[#141417] border border-zinc-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row text-zinc-100 max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo View Side */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        {/* Information & EXIF Details Side */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#18181c]">
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded">
                {item.category}
              </span>
              <h2 className="text-2xl font-serif-custom font-bold text-white mt-2">
                {item.title}
              </h2>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              {item.description}
            </p>

            <div className="space-y-2 pt-2 text-xs text-zinc-400 border-t border-zinc-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>{item.date}</span>
              </div>
            </div>

            {/* EXIF Data Grid */}
            <div className="pt-4 border-t border-zinc-800">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-amber-400" /> EXIF Shot Specs
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">Camera</span>
                  <span className="text-zinc-200">{item.exif.camera}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">Lens</span>
                  <span className="text-zinc-200">{item.exif.lens}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">ISO</span>
                  <span className="text-zinc-200">{item.exif.iso}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">Aperture</span>
                  <span className="text-zinc-200">{item.exif.aperture}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-zinc-800 flex items-center gap-3">
            <button
              onClick={handleCopyShare}
              className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs text-white font-medium flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Link Copied' : 'Share Photo'}</span>
            </button>
            <a
              href={item.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black transition-colors"
              title="View Original High Res"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
