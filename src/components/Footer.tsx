import React from 'react';
import { Film, MapPin, Phone, Mail, Twitter, Facebook, Instagram, Dribbble, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface FooterProps {
  onOpenContact: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0b0b0d] border-t border-zinc-800/80 text-zinc-400 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/80">
          
          {/* Left Column - Brand & Bio */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white shadow-lg">
                <Film className="w-5 h-5 text-zinc-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-custom text-xl tracking-wider font-bold text-white uppercase leading-none">
                  Vigraph
                </span>
                <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-sans uppercase">
                  Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Dribbble, href: '#', label: 'Dribbble' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Our Store / Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">
              Our Store
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skillset')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Portfolio Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column - Get in Touch */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-tight">{CONTACT_INFO.address}</span>
              </li>
              {CONTACT_INFO.phones.map((phone, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="text-center sm:text-left">
            Copyright © 2025 vigraph | Powered by vigraph
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group p-2"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
