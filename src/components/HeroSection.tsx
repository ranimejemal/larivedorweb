import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";


const HeroSection = () => {
  

  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-poppins"
      >
        {/* Background Video */}
        <video
          src="/0730(1).mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div
          className={`text-center px-6 transition-all duration-1000 z-20 `}
        >
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/a1d7b4bf-c4c5-4edf-b952-c1678a48c68e.png"
              alt="La Rive d'Or Logo"
              className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mx-auto object-contain"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-7 h-10 border border-black rounded-full flex justify-center">
            <div className="w-1 h-2 bg-black rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
