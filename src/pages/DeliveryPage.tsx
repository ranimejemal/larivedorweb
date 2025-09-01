import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function DeliveryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row mt-20">
      {/* Left Section */}
      <div className="w-full md:w-1/3 relative bg-gray-800 flex items-center justify-center overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br z-10"></div>

        {/* Image */}
        <img
          src="/Bar Menu (1).png"
          alt="Glovo Delivery Partner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          LIVRAISON AVEC GLOVO
        </h1>
        <p className="text-gray-700 mb-4">
          La Rive D'or® collabore avec notre partenaire de livraison Glovo pour vous apporter vos boissons préférées directement chez vous.
        </p>
        <p className="text-gray-700 mb-8">
          Rapide, fiable et simple : sélectionnez vos boissons, passez votre commande et laissez Glovo s'occuper du reste!
        </p>

        {/* Delivery Card aligned under the text */}
        <div className="flex justify-start">
          <Card className="rounded-2xl shadow-md overflow-hidden flex flex-col w-full max-w-sm">
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
                  className="rounded-full px-6 py-2 w-full text-white"
                  onClick={() => window.open("https://www.glovoapp.com/", "_blank")}
                >
                  Commander Maintenant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
