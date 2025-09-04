import { useParams, useNavigate } from "react-router-dom";
import { subItemsMap, featuredItems, eauEtJusItems } from "./ShopSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ItemDetail() {
  const { itemName } = useParams<{ itemName: string }>();
  const navigate = useNavigate();

  // Find item details
  const item =
    Object.entries(subItemsMap)
      .flatMap(([cat, items]) => items.map((i) => ({ ...i, category: cat })))
      .find((i) => i.name === itemName) ||
    featuredItems.find((i) => i.name === itemName) ||
    eauEtJusItems.find((i) => i.name === itemName);

  if (!item) return <p>Produit non trouvé.</p>;

  const nutrition = item.nutrition; 

  return (
    <section className="bg-black min-h-screen text-white">
      <Navigation />
      <div className="p-10 mt-20">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-[#ffffff]"
        >
          &lt; Retour
        </button>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center items-start bg-[#3b230a] rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full max-w-md h-auto object-contain "
            />
          </div>

          {/* Right: Product details */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl font-semibold">{item.name}</h1>
            <p className="text-lg text-gray-200">
              Description du produit ici. Vous pouvez ajouter plus de détails
              comme ingrédients, prix, et options.
            </p>

            {/* Nutrition Table */}
            {nutrition && (
              <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="font-bold text-lg mb-4">Nutrition</h2>
                <table className="w-full text-left">
                  <tbody>
                    <tr>
                      <td className="font-semibold">Energy</td>
                      <td>{nutrition.energy}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Fat</td>
                      <td>{nutrition.fat}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Saturated Fat</td>
                      <td>{nutrition.saturatedFat}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Carbohydrates</td>
                      <td>{nutrition.carbs}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Sugar</td>
                      <td>{nutrition.sugar}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Fibre</td>
                      <td>{nutrition.fibre}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Protein</td>
                      <td>{nutrition.protein}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Salt</td>
                      <td>{nutrition.salt}</td>
                    </tr>
                    {nutrition.caffeine && (
                      <tr>
                        <td className="font-semibold">Caffeine</td>
                        <td>{nutrition.caffeine}</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {nutrition.allergens && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Allergens</h3>
                    <p>{nutrition.allergens.join(", ")}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
    </section>
  );
}
