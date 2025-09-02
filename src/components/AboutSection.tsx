import { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-6">
              Our Story
            </h2>

            <div className="space-y-6 font-poppins text-black text-lg leading-relaxed">
              <p>
                Nestled in the heart of elegance,{" "}
                <span className="text-marron font-semibold">La Rive d'Or </span>
                represents more than just a café—it's a sanctuary where time
                slows down and every moment becomes precious.
              </p>

              <p>
                Our journey began with a simple vision: to create an oasis of
                luxury where the finest coffee meets artisanal craftsmanship.
                Every cup we serve tells a story of passion, precision, and the
                pursuit of perfection.
              </p>

              <p>
                From our carefully sourced beans to our handcrafted pastries,
                each creation is infused with care and attention to detail that
                makes La Rive d'Or an experience unlike any other.
              </p>

              <p className="text-black font-medium">
                Welcome to your moment of elegance. Welcome to La Rive d'Or.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 border border-marron/30 rounded-lg">
                <div className="font-playfair text-3xl font-bold text-black mb-2">
                  150+
                </div>
                <div className="font-poppins text-black text-sm">
                  Premium Blends
                </div>
              </div>
              <div className="text-center p-4 border border-marron/30 rounded-lg">
                <div className="font-playfair text-3xl font-bold text-black mb-2">
                  5★
                </div>
                <div className="font-poppins text-black text-sm">
                  Customer Rating
                </div>
              </div>
            </div>
          </div>

          {/* Image/Icon Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative h-96 border border-black bg-black rounded-lg flex items-center justify-center">
              <div className="text-center">
                {/* BIG CENTERED ICON */}
                <img
                  src="rvd.ico"
                  alt="La Rive D'Or"
                  className="w-32 md:w-48 mx-auto mb-6"
                />
                <p className="font-playfair text-xl text-white">
                  Experience Luxury
                </p>
                <p className="font-poppins text-sm text-white/70">
                  Every Visit, Every Sip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
