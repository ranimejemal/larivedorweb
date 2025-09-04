import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      // Here you would normally trigger password reset email
      setMessage(
        "Si cet email existe dans notre système, vous recevrez un lien pour réinitialiser votre mot de passe."
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column: Form */}
      <div className="flex-1 bg-white px-12 py-20 flex flex-col overflow-y-auto mt-20">
        <button
          onClick={() => navigate(-1)}
          className="text-lg text-black hover:underline flex items-center font-sodo mb-8"
        >
          ← Retour
        </button>

        <div className="max-w-md ml-auto space-y-6 translate-x-[-11rem]">
          <h1 className="text-3xl font-sodo mb-4 text-black">
            Mot de passe oublié
          </h1>
          <p className="text-gray-600 mb-6">
            Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="* Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />

            <button
              type="submit"
              className="w-full bg-marron text-white py-3 rounded-full font-semibold hover:bg-marron/90 transition flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                "Envoyer le lien"
              )}
            </button>

            {message && <p className="text-green-500 mt-2">{message}</p>}
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Retour à{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-marron hover:underline"
            >
              Se connecter
            </button>
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
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

export default ForgotPasswordPage;
