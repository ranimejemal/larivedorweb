import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Carriere() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row mt-20">
      {/* Left Section */}
      <div className="w-full md:w-1/3 relative bg-black flex items-center justify-center overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br z-10"></div>

        {/* Image */}
        <img
          src="/employe.png"
          alt="Employé La Rive D'or"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        </div>


      {/* Right Section */}
      <div className="w-full md:w-2/3 p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          OPPORTUNITÉS DE CARRIÈRE
        </h1>
        <p className="text-gray-700 mb-4">
          Chez La Rive D'or, vous êtes bien plus qu’un simple employé, vous êtes un partenaire.
        </p>
        <p className="text-gray-700 mb-4">
          De nouveaux magasins, des équipes qui s'agrandissent et de nouvelles perspectives de carrières : La Rive D'or est une entreprise innovante qui continue d'élargir ses horizons.
        </p>
        <p className="text-gray-700 mb-8">
          Chez La Rive D'or, nos décisions prennent en compte la parole de chacun. Ici, vous êtes au cœur de tout ☕
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* First Card */}
  <Card className="rounded-2xl shadow-md overflow-hidden flex flex-col">
    <CardContent className="p-0 flex flex-col items-center">
      <div className="w-full">
        <img
          src="/pexels-bertellifotografia-22873807.jpg"
          alt="Employé La Rive D'or"
          className="w-full h-64 object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4 flex flex-col items-center w-full space-y-3">
  <Button
    variant="outline"
    className="rounded-full px-6 py-2 w-full text-white"
    onClick={() => window.open("https://form.jotform.com/252395859338574", "_blank")}
  >
    Rejoignez-nous
  </Button>
</div>

    </CardContent>
  </Card>

  {/* Second Card */}
  <Card className="rounded-2xl shadow-md overflow-hidden flex flex-col">
    <CardContent className="p-0 flex flex-col items-center">
      <div className="w-full">
        <img
          src="/pexels-thirdman-8936942.jpg"
          alt="Employé La Rive D'or"
          className="w-full h-64 object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4 flex flex-col items-center w-full space-y-3">
        <Button variant="outline" className="rounded-full px-6 py-2 w-full text-white">
          Suivez nos actualités carrières
        </Button>
      </div>
    </CardContent>
  </Card>
</div>

      </div>
    </div>
  );
}
