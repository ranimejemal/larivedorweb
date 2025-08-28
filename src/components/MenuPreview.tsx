import { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

// Menu pages (excluding the cover)
const menuImages = [
  { id: 1, src: "/larivedorr.png", alt: "Menu Page 1" },
  { id: 2, src: "/larivedorr (1).png", alt: "Menu Page 2" },
  { id: 3, src: "/larivedorr (2).png", alt: "Menu Page 3" },
  { id: 4, src: "/larivedorr (17).png", alt: "Menu Page 4" },
  { id: 5, src: "/larivedorr (3).png", alt: "Menu Page 5" },
  { id: 6, src: "/larivedorr (4).png", alt: "Menu Page 6" },
  { id: 7, src: "/larivedorr (5).png", alt: "Menu Page 7" },
  { id: 8, src: "/larivedorr (6).png", alt: "Menu Page 8" },
  { id: 9, src: "/larivedorr (7).png", alt: "Menu Page 9" },
  { id: 10, src: "/larivedorr (8).png", alt: "Menu Page 10" },
  { id: 11, src: "/larivedorr (9).png", alt: "Menu Page 11" },
  
  { id: 17, src: "/larivedorr (19).png", alt: "Menu Page 17" },
  { id: 18, src: "/larivedorr (16).png", alt: "Menu Page 18" },
];

const MenuPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const flipBook = useRef<React.ElementRef<typeof HTMLFlipBook>>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    const el = document.getElementById("menu");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Our Menu
          </h2>
          <p className="font-poppins text-lg text-white/80 max-w-2xl mx-auto">
            Explore our complete menu of carefully crafted beverages and delicious treats.
          </p>
        </div>

        <div className="flex justify-center">
          {/* @ts-ignore */}
          {/* @ts-ignore */}
<HTMLFlipBook
  width={450} 
  height={600}
  size="fixed"
  minWidth={300}
  maxWidth={600}
  minHeight={400}
  maxHeight={800}
  maxShadowOpacity={0.5}
  showCover={false}  
  mobileScrollSupport={true}
  drawShadow={true}
  flippingTime={700}
  clickEventForward={true}
  startPage={0}  
  className="shadow-2xl rounded-xl"
  ref={flipBook}
  style={{ margin: "0 auto" }}
>
  {menuImages.map(({ id, src, alt }) => (
    <div
      key={id}
      className="bg-black flex items-center justify-center"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  ))}
</HTMLFlipBook>

        </div>
      </div>
    </section>
  );
};

export default MenuPreview;