import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MapPin } from "lucide-react";

interface NavigationProps {
  handleLogoClick?: () => void;
}

const Navigation = ({ handleLogoClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState<string>("home"); // Track active link

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveLink(id); // Set active on click
    } else {
      navigate("/", { state: { scrollTo: id } });
      setIsMenuOpen(false);
      setActiveLink(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNav(false);
      else setShowNav(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 font-poppins ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${location.pathname === "/" ? "bg-transparent" : "bg-black"}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="cursor-pointer outline-none ml-10 font-sodo text-2xl text-white"
          onClick={() => navigate("/")}
        >
          La Rive D'or
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-[70%]">
          <button
            onClick={() => scrollToSection("home")}
            className={`relative group font-sodo ${
              activeLink === "home" ? "text-white" : "text-white"
            }`}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-marron transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button
            onClick={() => scrollToSection("menu")}
            className={`relative group font-sodo ${
              activeLink === "menu" ? "text-marron" : "text-white"
            }`}
          >
            Menu
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-marron transition-all duration-300 group-hover:w-full"></span>
          </button>

          <Link
            to="/shopsection"
            onClick={() => setActiveLink("order")}
            className={`relative group font-sodo ${
              activeLink === "shopsection" ? "text-marron" : "text-white"
            }`}
          >
            Order Now
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-marron transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/rewardsection"
            className={`relative group font-sodo ${
              location.pathname === "/rewardsection" ? "text-marron" : "text-white"
            }`}
          >
            Rewards
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-marron transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/carrieresection"
            className={`relative group font-sodo ${
              location.pathname === "/carrieresection" ? "text-marron" : "text-white"
            }`}
          >
            Carrière
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-marron transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center space-x-6 mr-10">
          <button className="flex items-center space-x-2 text-white font-sodo">
            <MapPin size={18} />
            <span>Trouver un salon</span>
          </button>

          <Link
            to="/signup"
            className="px-4 py-2 bg-white text-black font-sodo rounded-full border border-black"
          >
            S'inscrire
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 border border-white text-white font-sodo rounded-full"
          >
            Se connecter
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 space-y-4 md:hidden">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-white ${activeLink === "home" ? "text-marron" : "text-white"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className={`text-white ${activeLink === "menu" ? "text-marron" : "text-white"}`}
            >
              Menu
            </button>
            <Link
              to="/shopsection"
              onClick={() => setActiveLink("order")}
              className={`text-white ${activeLink === "order" ? "text-marron" : "text-white"}`}
            >
              Order Now
            </Link>
            <Link to="/rewardsection" className="text-white">
              Rewards
            </Link>
            <Link to="/carrieresection" className="text-white">
              Carrière
            </Link>
            <button className="flex items-center space-x-2 text-white">
              <MapPin size={18} />
              <span>Trouver un salon</span>
            </button>

            <Link
              to="/signup"
              className="px-4 py-2 bg-white text-black font-sodo rounded-full border border-black"
            >
              S'inscrire
            </Link>

            <Link
              to="/login"
              className="px-3 py-2 bg-black text-white border border-black rounded-full"
            >
              Se connecter
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
