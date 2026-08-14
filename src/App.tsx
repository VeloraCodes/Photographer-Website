import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { SkillsetSection } from './components/SkillsetSection';
import { CoverflowGallery } from './components/CoverflowGallery';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { ContactModal } from './components/ContactModal';
import { PortfolioItem, PricingPlan } from './types';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const handleOpenBooking = (plan?: PricingPlan) => {
    setSelectedPlan(plan || null);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-zinc-100 selection:bg-amber-500 selection:text-black font-sans antialiased">
      {/* Navigation Header */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main id="home">
        {/* Section 1: Hero / About Me */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 2: My Skillset */}
        <SkillsetSection />

        {/* Section 3: 3D Coverflow Portfolio Showcase ("Something That We Have") */}
        <CoverflowGallery onSelectPhoto={(photo) => setLightboxItem(photo)} />

        {/* Section 4: Pricing Plans */}
        <PricingSection onSelectPlan={(plan) => handleOpenBooking(plan)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals & Overlays */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedPlan={selectedPlan}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
