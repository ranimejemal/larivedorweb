import React from "react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-white flex flex-col items-center px-6 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-4xl">
        Dites bonjour à l’élégance, au choix infini et – oui, à{" "}
        <span className="text-black font-brownsugar text-5xl">La Rive d’Or</span>.
      </h1>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mb-12">
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/AI-Crafted Iced Coffee Delights_ Cappuccino, Latte Macchiato & More! ☕️🌞.jpg"
            alt="Élégance"
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
          />
          <h2 className="font-semibold mb-2">Un lieu d’élégance</h2>
          <p className="text-gray-600">
            Chaque visite est une expérience unique, conçue pour éveiller vos sens et célébrer l’instant présent.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/Bar Menu (1).png"
            alt="Artisanat"
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
          />
          <h2 className="font-semibold mb-2">Un artisanat raffiné</h2>
          <p className="text-gray-600">
            De nos cafés soigneusement sélectionnés à nos pâtisseries maison, chaque détail compte.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/pexels-bertellifotografia-22873807.jpg"
            alt="Moment unique"
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
          />
          <h2 className="font-semibold mb-2">Votre moment précieux</h2>
          <p className="text-gray-600">
            Plus qu’un café, <span className="text-marron font-medium">La Rive d’Or</span> est un refuge où chaque instant devient inoubliable.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mb-16">
        <button
          onClick={() => navigate("/shopsection")}
          className="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition"
        >
          Découvrir
        </button>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 rounded-full border border-black text-black font-semibold hover:bg-gray-100 transition"
        >
          Nous rejoindre
        </button>
      </div>

      {/* Bottom Card */}
     <div className="flex justify-center w-full">
  <Card className="rounded-2xl shadow-md overflow-hidden flex flex-col w-full max-w-xl">
    <CardContent className="p-0 flex flex-col w-full">
      {/* Image container */}
      <div className="w-full h-64 relative">
        <img
          src="/glovo.avif"
          alt="Delivery La Rive D'or"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Button */}
      <div className="p-4 flex flex-col items-center w-full">
        <Button
          variant="outline"
          className="rounded-full px-6 py-2 w-full text-white bg-black hover:bg-gray-900"
          onClick={() => navigate("/deliverysection")}
        >
          Commander Maintenant
        </Button>
      </div>
    </CardContent>
  </Card>
</div>



    </section>
  );
};

export default AboutSection;
