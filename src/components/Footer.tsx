import { Facebook, Instagram, Twitter, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + À propos */}
        <div>
          <img
            src="la rive dor WHITE.png"
            alt="La Rive D'Or"
            className="w-16 mb-4"
          />
          <h3 className="font-semibold mb-3">À propos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">À propos</a></li>
            <li><a href="#">Nos Cafés</a></li>
            <li><a href="#">La Rive D'Or Stories & News</a></li>
            <li><a href="#">La Rive D'Or® Ready to Drink</a></li>
            <li><a href="#">Food Service</a></li>
            <li><a href="#">Accessibilité</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Carrière</a></li>
            <li><a href="#">Service Client</a></li>
          </ul>
        </div>

        {/* Impact social */}
        <div>
          <h3 className="font-semibold mb-3">Impact Social et Environnemental</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Responsabilité</a></li>
          </ul>
        </div>

        {/* Carte La Rive D'Or */}
        <div>
          <h3 className="font-semibold mb-3">Carte La Rive D'Or</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">La Rive D'Or Cartes Cadeaux</a></li>
            <li><a href="#">Conditions générales de la Carte La Rive D'Or</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom links */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300">
          <div className="flex flex-wrap gap-6">
            <a href="#">Politique de Confidentialité</a>
            <a href="#">Conditions d’utilisations et Mentions Légales</a>
            <a href="#">Avis relatif aux cookies</a>
            <a href="#">Conditions générales du programme de fidélité La Rive D'Or® Rewards</a>
            <a href="#">Cookies</a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 text-white text-lg">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Music2 size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
