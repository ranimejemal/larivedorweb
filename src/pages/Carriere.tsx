import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Carriere() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/3 bg-black flex flex-col items-center justify-center text-white p-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-800 via-purple-700 to-yellow-500 opacity-60 mix-blend-multiply"></div>
        <div className="relative z-10 text-left w-full">
          <h2 className="text-4xl font-bold leading-tight mb-4"></h2>
          <div className="flex justify-center">
           <img
  src="/carriere1.png"
  alt="Employé Starbucks"
  className="rounded-2xl w-72 h-auto"
/>

          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          OPPORTUNITÉS DE CARRIÈRE
        </h1>
        <p className="text-gray-700 mb-4">
          Chez Starbucks, vous êtes bien plus qu’un simple employé, vous êtes un partenaire.
        </p>
        <p className="text-gray-700 mb-4">
          De nouveaux magasins, des équipes qui s'agrandissent et de nouvelles perspectives de carrières : Starbucks est une entreprise innovante qui continue d'élargir ses horizons.
        </p>
        <p className="text-gray-700 mb-8">
          Chez Starbucks, nos décisions prennent en compte la parole de chacun. Ici, vous êtes au cœur de tout 🌍
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-4 flex flex-col items-center">
             <img
  src="/carriere1.png"
  alt="Employé Starbucks"
  className="rounded-2xl w-72 h-auto"
/>

              <Button className="rounded-full px-6 py-2">Rejoignez-nous</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-4 flex flex-col items-center">
              <img
  src="/carriere1.png"
  alt="Employé Starbucks"
  className="rounded-2xl w-72 h-auto"
/>
              <Button variant="outline" className="rounded-full px-6 py-2">
                Suivez nos actualités carrières
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
