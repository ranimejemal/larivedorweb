import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", formData);
    // 👉 Ici tu fais ton appel API connexion
  };

  return (
    <div className="min-h-screen flex">
      {/* Colonne gauche : Formulaire */}
      <div className="flex-1 bg-white px-12 py-20 flex flex-col overflow-y-auto mt-20">
        <button
          onClick={() => navigate(-1)}
          className="text-lg text-black hover:underline flex items-center font-sodo mb-8"
        >
          ← Retour
        </button>

        <div className="max-w-md ml-auto space-y-6 translate-x-[-11rem]">
          <h1 className="text-3xl font-sodo mb-4 text-black">Se connecter</h1>
          <p className="text-gray-600 mb-6">
            Connectez-vous à votre compte pour profiter de nos services et avantages.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="* Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="* Mot de passe"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />

            {/* Lien mot de passe oublié */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-marron hover:underline"
              >
                Mot de passe oublié ?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-marron text-white py-3 rounded-full font-semibold hover:bg-marron/90 transition"
            >
              Se connecter
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Pas encore de compte ?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-marron hover:underline"
            >
              S'inscrire
            </button>
          </p>
        </div>
      </div>

      {/* Colonne droite : Image */}
       <div className="hidden lg:flex flex-1 sticky top-0 h-screen mt-20">
        <img
          src="/AI-Crafted Iced Coffee Delights_ Cappuccino, Latte Macchiato & More! ☕️🌞.jpg"
          alt="Boissons"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
