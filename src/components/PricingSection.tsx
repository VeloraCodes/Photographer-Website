import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/content';
import { PricingPlan } from '../types';
import { Check, Sparkles, Zap } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'UAH' | 'USD' | 'EUR'>('UAH');

  const formatPrice = (plan: PricingPlan) => {
    switch (currency) {
      case 'UAH':
        return `${plan.priceUah} UAH`;
      case 'USD':
        return `$${plan.priceUsd}`;
      case 'EUR':
        return `€${plan.priceEur}`;
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-800/60">
      
      {/* Background Subtle Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f95738]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#f95738]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#f95738] uppercase">
              PACKAGES & RATES
            </span>
            <span className="w-8 h-[2px] bg-[#f95738]" />
          </div>

          <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-widest uppercase">
            PRICING PLANS
          </h2>

          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800 shadow-inner mt-2">
            {(['UAH', 'USD', 'EUR'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === curr
                    ? 'bg-[#f95738] text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Pricing Container Panel matching screenshot */}
        <div className="bg-[#141417] border border-zinc-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#1e1e24] border-2 border-[#f95738]/80 shadow-2xl scale-[1.02] z-10'
                    : 'bg-[#18181c] border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f95738] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="text-center pb-4 border-b border-zinc-800">
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-300">
                      {plan.name}
                    </h3>
                    <div className="mt-3">
                      <span className="text-2xl sm:text-3xl font-serif-custom font-extrabold text-white">
                        {formatPrice(plan)}
                      </span>
                      <span className="text-[11px] text-zinc-500 block font-mono mt-0.5">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <ul className="py-6 space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-[#f95738]/10 border border-[#f95738]/30 flex items-center justify-center shrink-0 text-[#f95738]">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-tight font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Orange Action Button precisely matching screenshot */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-3 rounded-lg bg-[#f95738] hover:bg-[#e04526] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-950/40 hover:scale-[1.02] active:scale-[0.98]"
                    id={`book-now-btn-${plan.id}`}
                  >
                    BOOK NOW
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
