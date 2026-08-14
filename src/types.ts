export interface SkillItem {
  id: string;
  title: string;
  description: string;
  iconName: 'portrait' | 'landscape' | 'corporate' | 'wedding';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Portraits' | 'Landscapes' | 'Commercial' | 'Weddings' | 'Studio';
  imageUrl: string;
  description: string;
  date: string;
  location: string;
  exif: {
    camera: string;
    lens: string;
    iso: string;
    aperture: string;
    shutter: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  priceUah: number;
  priceUsd: number;
  priceEur: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  planId: string;
  date: string;
  location: string;
  notes: string;
}
