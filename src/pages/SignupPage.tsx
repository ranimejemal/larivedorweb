import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
  newsletter: boolean;
  terms: boolean; // for accepting terms
  hasCard: boolean;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    newsletter: false,
    terms: false,
    hasCard: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Vous devez accepter les conditions d'utilisation pour continuer.");
      return;
    }
    console.log("Signup:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column */}
      <div className="flex-1 bg-white px-12 py-20 flex flex-col overflow-y-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-lg text-black hover:underline flex items-center font-sodo mb-8"
        >
          ← Retour
        </button>

        <div className="max-w-md ml-auto space-y-6 translate-x-[-11rem]">
          <h1 className="text-2xl font-sodo text-black">S'inscrire</h1>
          <p className="text-gray-600 text-sm">
            Rejoignez La Rive D'or® Rewards et gagnez des étoiles pour des produits et des boissons gratuits, des recharges gratuites, et ce quel que soit votre mode de paiement. Accédez aux commandes mobiles avec votre téléphone, à une récompense pour votre anniversaire et bien plus encore.
          </p>
          <p className="text-gray-600 text-sm">Les champs obligatoires sont marqués d'un astérisque*</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Info */}
            <h2 className="font-semibold text-black">Informations personnelles</h2>
            <input
              type="text"
              name="firstName"
              placeholder="* Prénom"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="* Nom"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />

            {/* Account Security */}
            <h2 className="font-semibold text-black">Sécurité du compte</h2>
            <input
              type="email"
              name="email"
              placeholder="* Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="* Mot de passe"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />

            {/* Birthday Section */}
            <div className="border p-4 rounded-md space-y-2">
              <h2 className="font-semibold text-black text-center">Date d'anniversaire (facultatif)</h2>
              <div className="flex items-center space-x-3">
                <img src="/bday3.png" alt="Birthday" className="w-40 h-40" />
                <p className="text-gray-600 text-sm">
                  Ajoutez votre date de naissance, afin de pouvoir vous envoyer tous nos vœux et vous offrir un coupon d'anniversaire.
                </p>
              </div>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-marron mt-2 text-black"
              />

              {/* Has Card toggle */}
              <div className="flex items-center mt-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="hasCard"
                    checked={formData.hasCard}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                  <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full peer-checked:translate-x-6 transition-all"></div>
                </label>
                <span className="ml-3 text-sm font-medium text-black">Vous avez déjà une carte ?</span>
              </div>
            </div>

            {/* Newsletter toggle */}
            <div className="border p-4 rounded-md space-y-2">
              <h2 className="font-semibold text-black text-center">La Rive D'or® E-Mails</h2>
              <div className="flex items-center mt-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                  <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full peer-checked:translate-x-6 transition-all"></div>
                </label>
                <span className="ml-3 text-sm font-medium text-black">
                  Oui. Je veux être informé des offres exclusives, annonces et nouveaux produits adaptés à mon compte.
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Restez informé. L'email est un excellent moyen de rester au courant des dernières offres et mises à jour de La Rive D'or.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Vous pouvez vous désinscrire à tout moment. Veuillez lire{" "}
                <button onClick={() => navigate("/privacy")} className="underline text-blue-600">
                  Politique de confidentialité
                </button>{" "}
                ou{" "}
                <button onClick={() => navigate("/contact")} className="underline text-blue-600">
                  Nous contacter
                </button>.
              </p>
            </div>

            {/* Terms and Conditions checkbox before submit */}
            <div className="flex items-center mt-4 mb-2">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">
                J’accepte les{" "}
                <button onClick={() => navigate("/terms")} className="underline text-blue-600">
                  Conditions d'utilisation
                </button>
                .
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-marron text-white py-2 rounded-full font-semibold hover:bg-marron/90 transition text-sm"
            >
              Rejoignez les récompenses
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center">
            Déjà un compte ?{" "}
            <button onClick={() => navigate("/login")} className="text-marron hover:underline">
              Se connecter
            </button>
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="hidden lg:flex flex-1 sticky top-0 h-screen">
        <img
          src="/AI-Crafted Iced Coffee Delights_ Cappuccino, Latte Macchiato & More! ☕️🌞.jpg"
          alt="Boissons"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignupPage;
