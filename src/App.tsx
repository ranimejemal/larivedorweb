import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShopSection from "./pages/ShopSection";
import Navigation from "@/components/Navigation";
import Carriere from "./pages/Carriere";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// Import UserProvider from your context
import { UserProvider } from "./context/UserContext"; // adjust path

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("introSeen");
    if (!seen) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("introSeen", "true");
  };

  const handleLogoClick = () => {
    setShowIntro(true);
  };

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <>
              <Navigation handleLogoClick={handleLogoClick} />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shopsection" element={<ShopSection />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/carrieresection" element={<Carriere />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </UserProvider>
  );
};

export default App;
