
import { useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MenuPreview from '@/components/MenuPreview';
import ShopSection from '@/pages/ShopSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <MenuPreview />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
