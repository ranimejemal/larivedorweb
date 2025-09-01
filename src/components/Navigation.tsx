import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useUser } from "../context/UserContext";

interface NavigationProps {
  handleLogoClick?: () => void;
}

const Navigation = ({ handleLogoClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loadingLogout, setLoadingLogout] = useState(false);

  const { currentUser, setCurrentUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    setLoadingLogout(true);
    setTimeout(() => {
      localStorage.removeItem("currentUser");
      setCurrentUser(null); // immediately update navbar
      setIsMenuOpen(false);
      setLoadingLogout(false);
      navigate("/");
    }, 300);
  };

  const renderAuthButtons = () => {
    if (loadingLogout) {
      return (
        <div className="flex items-center justify-center px-4 py-2">
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
        </div>
      );
    }

    if (currentUser) {
      return (
        <div className="flex items-center space-x-3 transition-opacity duration-300">
          <span className="text-white font-sodo">👋 Hi, {currentUser.firstName}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-white text-white font-sodo rounded-full hover:bg-white hover:text-black transition"
          >
            Logout
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-3 transition-opacity duration-300">
        <Link
          to="/signup"
          className="px-4 py-2 bg-white text-black font-sodo rounded-full border border-black hover:bg-gray-100 transition"
        >
          S'inscrire
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 border border-white text-white font-sodo rounded-full hover:bg-white hover:text-black transition"
        >
          Se connecter
        </Link>
      </div>
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    else navigate("/", { state: { scrollTo: id } });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 font-poppins ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${location.pathname === "/" ? "bg-transparent" : "bg-black"}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => {
            handleLogoClick?.();
            navigate("/");
          }}
          className="cursor-pointer font-brownsugar text-2xl text-white  translate-x-[5rem]"
        >
          La Rive D'or
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-[2rem] translate-x-[7rem]">
          <button onClick={() => scrollToSection("home")} className="text-white font-sodo">
            Home
          </button>
          <Link to="/shopsection" className="text-white font-sodo">
            Menu
          </Link>
          <Link to="/deliverysection" className="text-white font-sodo">
            Delivers
          </Link>
          <Link to="/carrieresection" className="text-white font-sodo">
            Carrière
          </Link>
        </div>

        {/* Desktop Auth + Trouver un salon */}
        <div className="hidden md:flex items-center space-x-6 translate-x-[-1rem]">
          <button className="flex items-center space-x-2 text-white font-sodo">
            <MapPin size={18} />
            <span>Localisation</span>
          </button>
          {renderAuthButtons()}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 space-y-4 md:hidden">
          <button onClick={() => scrollToSection("home")} className="text-white">
            Home
          </button>
          <button onClick={() => scrollToSection("menu")} className="text-white">
            Menu
          </button>
          <Link to="/shopsection" className="text-white">
            Order Now
          </Link>
          <Link to="/rewardsection" className="text-white">
            Rewards
          </Link>
          <Link to="/carrieresection" className="text-white">
            Carrière
          </Link>
          {/* Auth buttons */}
          {renderAuthButtons()}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
