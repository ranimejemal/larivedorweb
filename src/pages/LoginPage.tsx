import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // adjust path

const LoginPage = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useUser(); // get context setter

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      let users = JSON.parse(localStorage.getItem("users") || "[]");
      const existingUser = users.find(
        (u: any) =>
          u.email === formData.email && u.password === formData.password
      );

      if (!existingUser) {
        setError("Email ou mot de passe incorrect !");
        setLoading(false);
        return;
      }

      // Save current user in localStorage and context
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      setCurrentUser(existingUser); // update Navbar immediately
      setLoading(false);
      navigate("/"); // redirect home
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
          <h1 className="text-3xl font-sodo mb-4 text-black">Se connecter</h1>
          <p className="text-gray-600 mb-6">
            Connectez-vous à votre compte pour profiter de nos services et avantages.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="* Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="* Mot de passe"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-marron"
              required
            />

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-marron hover:underline"
              >
                Mot de passe oublié ?
              </button>
            </div>

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
                "Se connecter"
              )}
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}
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

export default LoginPage;
