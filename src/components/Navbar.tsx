import React, { useState, useEffect } from 'react';
import { Camera, Film, ChevronDown, Menu, X, PhoneCall, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0d0f]/90 backdrop-blur-md border-b border-zinc-800/60 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-3 group"
            id="nav-logo-link"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-white group-hover:border-zinc-500 transition-colors shadow-lg">
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-sm font-medium text-zinc-200 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1"
            >
              About Us
            </a>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                onBlur={() => setTimeout(() => setPagesDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1"
                id="pages-dropdown-button"
              >
                <span>Pages</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {pagesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#18181c] border border-zinc-700/80 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => scrollToSection('skillset')}
                    className="w-full text-left px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    My Skillset
                  </button>
                  <button
                    onClick={() => scrollToSection('portfolio')}
                    className="w-full text-left px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    3D Showcase Gallery
                  </button>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="w-full text-left px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    Pricing Plans
                  </button>
                  <button
                    onClick={() => {
                      setPagesDropdownOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    Book a Session
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onOpenContact}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1"
              id="nav-contact-link"
            >
              Contact Us
            </button>
          </nav>

          {/* Contact Pill CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 rounded-full border border-zinc-600/80 hover:border-white text-xs font-semibold tracking-wider text-white uppercase bg-zinc-900/60 hover:bg-white hover:text-black transition-all duration-300 shadow-md backdrop-blur-sm"
              id="nav-cta-button"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-700 hover:text-white"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121215] border-b border-zinc-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="block text-base font-medium text-zinc-200 hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="block text-base font-medium text-zinc-300 hover:text-white"
          >
            About Us
          </a>
          <a
            href="#skillset"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skillset');
            }}
            className="block text-base font-medium text-zinc-300 hover:text-white"
          >
            My Skillset
          </a>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('portfolio');
            }}
            className="block text-base font-medium text-zinc-300 hover:text-white"
          >
            Gallery Showcase
          </a>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('pricing');
            }}
            className="block text-base font-medium text-zinc-300 hover:text-white"
          >
            Pricing Plans
          </a>
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-full border border-zinc-600 text-xs font-semibold uppercase tracking-wider text-white text-center hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#f95738] text-xs font-semibold uppercase tracking-wider text-white text-center hover:bg-[#e04526] transition-colors shadow-lg"
            >
              Book Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
