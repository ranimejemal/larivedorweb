import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Search } from "lucide-react";

const categories = [
  { 
    title: "Boissons", 
    items: [
      "Café Glacé", 
      "Café Chaud", 
      "Matcha",
      "Chocolats Chauds et Glacés", 
      "Tea Latte", 
      "Refresha® et Thés Glacés",
      "Frappuccino®", 
      "Thés Chauds"
    ] 
  },
  { title: "Eau & Jus", items: ["Eau & Jus"] },
  { 
    title: "Pâtisseries & Desserts", 
    items: [
      "Viennoiseries",
      "Pancakes & Crêpe",
      "Loaf Cakes & Rolls",
      "Gâteaux à la part",
      "Muffins",
      "Donuts",
      "Cookies",
      "Brownies",
      "Yaourts & Fruits"
    ] 
  },
  { title: "Gamme Salée", items: [
    "Croissant Salé",
    "Sandwiches",
    "Pâté",
    "Pizza"
  ] },
  { title: "Breakfast & GO", items: ["Breakfast"] },
];

const featuredItems = [
  { id: 6, name: "Café Glacé", category: "Boissons", image: "/boisson.png" },
  { id: 7, name: "Café Chaud", category: "Boissons", image: "/espress.png" },
  { id: 71, name: "Matcha", category: "Boissons", image: "/matchaclassic.png" },
  { id: 8, name: "Chocolats Chauds et Glacés", category: "Boissons", image: "/chocoo4.png" },
  { id: 9, name: "Tea Latte", category: "Boissons", image: "/tea.png" },
  { id: 10, name: "Refresha® et Thés Glacés", category: "Boissons", image: "/icedtea.png" },
  { id: 1, name: "Frappuccino®", category: "Boissons", image: "/frapp.png" },
  { id: 2, name: "Thés Chauds", category: "Boissons", image: "/hottea.png" },
];

const eauEtJusItems = [
  { id: 11, name: "Eau & Jus", category: "Eau & Jus", image: "/waterr.png" },
];

const patisserieEtDessertaItems = [
  { id: 20, name: "Viennoiseries", category: "Pâtisseries & Desserts", image: "/croissant.png" },
  { id: 12, name: "Pancakes & Crêpe", category: "Pâtisseries & Desserts", image: "/pancake.png" },
  { id: 13, name: "Loaf Cakes & Rolls", category: "Pâtisseries & Desserts", image: "/loaf.png" },
  { id: 14, name: "Gâteaux à la part", category: "Pâtisseries & Desserts", image: "/cake.png" },
  { id: 15, name: "Muffins", category: "Pâtisseries & Desserts", image: "/muffin.png" },
  { id: 16, name: "Donuts", category: "Pâtisseries & Desserts", image: "/donut.png" },
  { id: 17, name: "Cookies", category: "Pâtisseries & Desserts", image: "/4b2b5c9d-a3a9-4dc9-be48-89e80c7b5180.png" },
  { id: 18, name: "Brownies", category: "Pâtisseries & Desserts", image: "/brownie.png" },
  { id: 19, name: "Yaourts & Fruits", category: "Pâtisseries & Desserts", image: "/yaourt.png" },
];

const gammeSaleeItems = [
  { id: 21, name: "Croissant Salé", category: "Sandwiches", image: "/Design sans titre (86).png" },
  { id: 23, name: "Sandwiches", category: "Sandwiches", image: "/sandwiche.png" },
  { id: 24, name: "Pâté", category: "Sandwiches", image: "/Design sans titre (90).png" },
  { id: 25, name: "Pizza", category: "Sandwiches", image: "/Design sans titre (87).png" },
  
  

];

const breakFastItems = [
  { id: 29, name: "Soft", category: "Breakfast", image: "/Design sans titre (91).png" },

];

const subItemsMap = {
  "Café Chaud": [
    { id: 30, name: "Express", image: "/espress.png" },
    { id: 31, name: "Americano", image: "/americanoo.png" },
    { id: 35, name: "Cappucin", image: "/cappucin.png" },
    { id: 36, name: "Café Crème", image: "/cafecreme.png" },
    { id: 43, name: "Cappuccino", image: "/cappuo.png" },
    { id: 45, name: "Macchiato", image: "/macchiatoo.png" },
    { id: 46, name: "Pumpkin Spice Latte", image: "/pumpkinss.png" },
    { id: 47, name: "Tiramisu Latte", image: "/tiramisuhot.png" },
  ],
  "Café Glacé": [
    { id: 33, name: "Iced Coffee Caramel", image: "/caramel.png" },
    { id: 37, name: "Iced Coffee Vanille", image: "/vanille.png" },
    { id: 38, name: "Iced Coffee Macchiato ", image: "/macchiato.png" },
    { id: 39, name: "Iced Coffee Mocha", image: "/mocha.png" },
    { id: 40, name: "Spanish Latte", image: "/spanish.png" },
    { id: 41, name: "Iced Americano", image: "/americano.png" },
    { id: 53, name: "Iced Pumpkin Spice Latte", image: "/pumkins.png" },
    { id: 54, name: "Tiramisu Iced Latte", image: "/tiramisuice.png" },
    { id: 55, name: "Iced White Mocha", image: "/whitemocha.png" },

  ],
  "Chocolats Chauds et Glacés": [
    { id: 35, name: "Chocolat Viennois Classique Chaud", image: "/cocohot.png" },
    { id: 36, name: "Chocolat Viennois Classique Glacé", image: "/cocoice.png" },
  ],
  "Matcha": [
    { id: 56, name: "Matcha Classic", image: "/matchaclassic.png" },
    { id: 57, name: "Matcha Caramel", image: "/caramelmatcha.png" },
    { id: 66, name: "Matcha Vanille", image: "/matchavanil.png" },
    { id: 67, name: "Matcha Mocha", image: "/matchachoco.png" },
    { id: 68, name: "Matcha Coffee", image: "/matchacoffe.png" },
    { id: 69, name: "Matcha Strawberry", image: "/matchastraw.png" },
    { id: 70, name: "Matcha Banane", image: "/matchabanane.png" },

  ],

  "Tea Latte": [
    { id: 58, name: "Iced Chai Latte", image: "/tea.png" },
    { id: 59, name: "Chai Latte", image: "/chaihoot.png" },
  ],

  "Refresha® et Thés Glacés": [
    { id: 35, name: "Refresha® Cool Lime", image: "/icedtea.png" },
    { id: 36, name: "Refresha® Strawberry", image: "/refreshastarw.png" },
    { id: 72, name: "Refresha® Very Berry", image: "/refberry.png" },
  ],

  "Frappuccino®": [
    { id: 60, name: "Creme Brulee Frappuccino", image: "/brulee.png" },
    { id: 61, name: "Tiramisu Frappuccino", image: "/tiramfrap.png" },
    { id: 73, name: "Frappuccino Café Caramel", image: "/frapbrule.png" },
    { id: 74, name: "Frappucciono Café", image: "/frapcafe.png" },
    { id: 75, name: "Frappuccino Mocha", image: "/frapmocha.png" },
  ],

  "Thés Chauds": [
    { id: 62, name: "English Breakfast Tea (infusiant)", image: "/hottea.png" },
    { id: 63, name: "Earl Grey Tea (infusiant)", image: "/earltea.png" },
    { id: 76, name: "Mint Citrus Green Tea (infusiant)", image: "/citrus.png" },
    { id: 77, name: "Thé à la menthe", image: "/thementhe.png" },
    { id: 78, name: "Thé à l'amande", image: "/amande.png" },
    { id: 79, name: "Thé aux pignon", image: "/pignon.png" },

  ],

  "Eau & Jus": [
    { id: 64, name: "Jus D'orange", image: "/jusorange.png" },
    { id: 65, name: "Jus De Fraise", image: "/jusfraise.png" },
    { id: 80, name: "Jus De Citron", image: "/lemonade.png" },
    { id: 81, name: "Jus De Pomme", image: "/applejus.png" },
    { id: 82, name: "Jus De Kiwi", image: "/juskiwi.png" },
    { id: 83, name: "Jus De Banane", image: "/jusbanane.png" },
    { id: 84, name: "Cocktail La Rive D'or", image: "/cocktail.png" },
    { id: 85, name: "Red Smoothie", image: "/redsmoothie.png" },
    { id: 86, name: "Green Smoothie", image: "/greennsmoothie.png" },
    { id: 87, name: "Lemon Water Sparkling", image: "/lemonspark.png" },
    { id: 88, name: "Lemon Mojito", image: "/lemonmojito.png" },
    { id: 89, name: "Strawberry Mojito", image: "/strawmojito.png" },
    { id: 90, name: "Red Mojito", image: "/mojitored.png" },
    { id: 154, name: "Mira 1L", image: "/icedchoco.png" },
    { id: 155, name: "Mira 500 ml", image: "/icedchoco.png" },
    { id: 156, name: "Garci 1L", image: "/icedchoco.png" },

  ],

  
  "Viennoiseries": [
    { id: 91, name: "Croissant", image: "/croissant.png" },
    { id: 92, name: "Pain au Chocolat", image: "/painchoco.png" },
    { id: 93, name: "New York Rolls", image: "/newyorkrolls.png" },
    { id: 94, name: "Dubai Croissant", image: "/dubaicroi.png" },
    { id: 95, name: "Cinnamon Rolls (cuit sur place)", image: "/cinnamon.png" },
  ],
  
   "Pancakes & Crêpe": [
    
    { id: 96, name: "Crêpe au Chocolat", image: "/icedchoco.png" },
    { id: 97, name: "Crêpe Nutella ", image: "/icedchoco.png" },
    { id: 98, name: "Crêpe Choco Luxe", image: "/icedchoco.png" },
    { id: 99, name: "Crêpe Colden Twist", image: "/icedchoco.png" },
    { id: 100, name: "Crêpe Royale Banane", image: "/icedchoco.png" },
   
    { id: 104, name: "Trio Pancake au beurre et miel", image: "/icedchoco.png" },
    { id: 105, name: "Trio Pancake chocolat", image: "/icedchoco.png" },
    { id: 106, name: "Trio Pancake Nutella", image: "/icedchoco.png" },
    { id: 107, name: "Trio Pancake Golden Twist", image: "/icedchoco.png" },
    { id: 108, name: "Trio Pancake Royale Banane", image: "/icedchoco.png" },
    { id: 109, name: "Trio Pancake Choco Luxe", image: "/icedchoco.png" },



  ],

  "Loaf Cakes & Rolls": [
    { id: 110, name: "Chocolate Vanille Loaf", image: "/icedchoco.png" },
    { id: 111, name: "Chocolate Loaf", image: "/icedchoco.png" },
    { id: 112, name: "Almond Loaf", image: "/icedchoco.png" },
    { id: 113, name: "Cake Citron", image: "/icedchoco.png" },
    { id: 114, name: "Cinnamon Roll Cuit sur place", image: "/icedchoco.png" },

  ],

  "Gâteaux à la part": [
    { id: 115, name: "Chocolate Lover Cake", image: "/icedchoco.png" },
    { id: 116, name: "Cheese cake Biscoff", image: "/icedchoco.png" },

  ],

  "Muffins": [
    { id: 115, name: "Muffin Double chocolat fourré au chocolat noir", image: "/icedchoco.png" },
    { id: 116, name: "Muffin Double chocolat fourré au cacao", image: "/icedchoco.png" },
    { id: 117, name: "Muffin Double Amande", image: "/icedchoco.png" },

  ],

  "Donuts": [
    { id: 118, name: "Donut Chocolat Fourré au Cacao ", image: "/icedchoco.png" },
  ],

  "Cookies": [
    { id: 119, name: "Cookie pépites (cuit sur place)", image: "/icedchoco.png" },
    { id: 120, name: "Cookie tout chocolat (cuit sur place)", image: "/icedchoco.png" },
    { id: 121, name: "Cookie Red Velvet (cuit sur place)", image: "/icedchoco.png" },
  ],

  "Brownies": [
    { id: 122, name: "Brownies Chocolat", image: "/icedchoco.png" },
    { id: 123, name: "Brookies", image: "/icedchoco.png" },
  ],

  "Yaourts & Fruits": [
    { id: 124, name: "Yaourt Fraise Banane", image: "/icedchoco.png" },
    { id: 125, name: "Yaourt Cocktail", image: "/icedchoco.png" },
    { id: 126, name: "Very Berry Yaourt", image: "/icedchoco.png" },
  ],

  "Croissant Salé": [
    { id: 127, name: "Croissant Jambon Fromage", image: "/icedchoco.png" },
    { id: 128, name: "Croissant aux Epinards", image: "/icedchoco.png" },
    { id: 129, name: "Croissant Poulet Fromage", image: "/icedchoco.png" },
  ],

  "Sandwiches": [
    { id: 130, name: "Eggtoast Epinard (cuit sur place)", image: "/icedchoco.png" },
    { id: 131, name: "Eggtoast Poulet (cuit sur place)", image: "/icedchoco.png" },
    { id: 132, name: "Egg & Jambon Muffin (cuit sur place)", image: "/icedchoco.png" },
    { id: 142, name: "Egg & Poulet Muffin (cuit sur place)", image: "/icedchoco.png" },
    { id: 143, name: "Jambon Club (cuit sur place)", image: "/icedchoco.png" },
    { id: 144, name: "Poulet Club (cuit sur place)", image: "/icedchoco.png" },
    { id: 145, name: "Chicken Ceasar Style Wrap (cuit sur place)", image: "/icedchoco.png" },
    { id: 146, name: "Ranch Vegetarian Wrap (cuit sur place)", image: "/icedchoco.png" },
    { id: 147, name: "Toastie Jambon Fromage (cuit sur place)", image: "/icedchoco.png" },
    { id: 148, name: "Toastie 5 Fromages (cuit sur place)", image: "/icedchoco.png" },
    { id: 149, name: "Toastie Poulet Jambon (cuit sur place)", image: "/icedchoco.png" },
  ],

  "Paté": [
    { id: 133, name: "Paté Thon", image: "/icedchoco.png" },
    { id: 134, name: "Paté Poulet", image: "/icedchoco.png" },
    { id: 135, name: "Paté Fromage", image: "/icedchoco.png" },
  ],

  "Pizza": [
    { id: 136, name: "Mini Pizza", image: "/icedchoco.png" },
    
  ],

   "Breakfast": [
    { id: 150, name: "Soft", image: "/icedchoco.png" },
    { id: 151, name: "Eveil Doré", image: "/icedchoco.png" },
    { id: 152, name: "Healthy ", image: "/icedchoco.png" },
    { id: 153, name: "Grand Prestige", image: "/icedchoco.png" },
  ],



};


const renderTrademark = (text: string) => {
  const parts = text.split(/(®)/g);
  return parts.map((part, index) =>
    part === "®" ? <sup key={index}>®</sup> : part
  );
};

// 🔑 Flatten all items into a single array
const allItems = [
  ...featuredItems,
  ...eauEtJusItems,
  ...patisserieEtDessertaItems,
  ...gammeSaleeItems,
  ...breakFastItems,
  ...Object.entries(subItemsMap).flatMap(([category, items]) =>
    items.map((item) => ({ ...item, category }))
  ),
];

export default function ShopSection() {
  const [activeTab, setActiveTab] = useState("Menu");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Displayed items depending on selection
  let displayedItems: any[] = [];
  if (activeItem) {
    displayedItems =
      subItemsMap[activeItem] ||
      featuredItems.filter((item) => item.name === activeItem) ||
      eauEtJusItems.filter((item) => item.name === activeItem);
  } else if (activeCategory) {
    displayedItems =
      activeCategory === "Eau & Jus"
        ? eauEtJusItems
        : featuredItems.filter((item) => item.category === activeCategory);
  }

  // ✅ Fixed search
  // Flatten only subItemsMap into an array
const subItems = Object.entries(subItemsMap).flatMap(([category, items]) =>
  items.map((item) => ({ ...item, category }))
);

// Filter search results only from subItems
const filteredResults =
  searchQuery.trim() === ""
    ? []
    : subItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );


  return (
    <section className="bg-gradient-to-b from-black to-black min-h-screen flex flex-col md:flex-row font-serif">
      <Navigation />

      {/* Sidebar */}
      <aside className="md:w-1/4 p-8 md:p-8 md:pl-16 flex flex-col items-center md:items-start mt-20 font-sans">
        <h1 className="mb-10 tracking-wide whitespace-nowrap overflow-x-auto pb-3">
          {activeCategory || activeItem ? (
            <button
              onClick={() => {
                setActiveCategory(null);
                setActiveItem(null);
              }}
              className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#ffffff] transition-colors font-sodo"
            >
              <span className="text-base font-sodo">&lt;</span>
              <span>Retour</span>
            </button>
          ) : (
            <span className="text-5xl text-white font-sodo">Menu</span>
          )}
        </h1>

        <div className="max-h-[73vh] overflow-y-auto pr-20 custom-scrollbar">
          {categories.map((cat) => (
            <div key={cat.title} className="mb-8">
              <h2
                className="font-thin font-sodo text-base md:text-lg text-white mb-3 cursor-pointer "
                
              >
                {cat.title}
              </h2>
              <ul className="space-y-2 pl-4">
                {cat.items.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setActiveItem(item);
                      setActiveCategory(null);
                    }}
                    className=" cursor-pointer text-slate-200 hover:text-[#5e4424] text-sm md:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap overflow-x-auto"
                  >
                    {renderTrademark(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col mt-40 h-[calc(100vh-8rem)]">
               {/* Sticky Tabs + Search Bar */}
<div className="sticky top-32 z-50 bg-black w-full px-4 py-4">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    {/* Tabs or Recherche label */}
    {!activeItem && !activeCategory && (
      <>
        {activeTab === "Recherche" ? (
          <h1 className="text-4xl md:text-5xl text-[#ffffff] font-sodo mb-2">
            Recherche
          </h1>
        ) : (
          <div className="flex gap-8 font-sodo text-sm">
            {["Menu", "En vedette"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-lg md:text-sm font-sodo ${
                  activeTab === tab
                    ? "border-b-2 border-[#804d2b] text-[#804d2b]"
                    : "text-gray-300 hover:text-[#804d2b] transition-colors duration-150"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </>
    )}

    {/* Search bar */}
    <div className="relative w-full max-w-md">
      <div className="flex items-center gap-2 text-white bg-[#000000] rounded-full px-4 py-2">
        <Search size={18} />
        <input
          type="text"
          value={searchQuery}
          onFocus={() => setActiveTab("Recherche")}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Menu de recherche"
          className="bg-transparent focus:outline-none text-sm md:text-base w-full font-sodo"
        />
      </div>
    </div>
  </div>
</div>


        
          

        {/* Scrollable Content */}
<div className="flex-1 overflow-y-auto p-4 md:p-10 scrollbar-transparent pt-10">
  {activeItem || activeCategory ? (
    <>
      <h2 className="text-4xl text-[#ffffff] font-sodo mb-6">
        {activeItem || activeCategory}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center w-full">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 md:w-60 md:h-60 object-contain"
              />
            </div>
            <p className="mt-4 text-[#f1e0d6] font-thin text-lg md:text-sm font-sodo">
              {renderTrademark(item.name)}
            </p>
          </div>
        ))}
      </div>
    </>
  ) : activeTab === "Recherche" ? (
    <>
     
      {searchQuery.trim() === "" ? (
        <p className="text-gray-400 text-sm">Tapez pour rechercher un produit...</p>
      ) : filteredResults.length === 0 ? (
        <p className="text-gray-400 text-sm">Aucun résultat trouvé.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center w-full">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 md:w-60 md:h-60 object-contain"
                />
              </div>
              <p className="mt-4 text-[#f1e0d6] font-thin text-lg md:text-sm font-sodo">
                {renderTrademark(item.name)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  ) : (
    <>
              {/* Default view with all sections */}
              <h2 className="text-2xl text-[#ffffff] font-thin mb-6 font-sodo">Boissons</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center w-full">
                {featuredItems
                  .filter(item => item.category === "Boissons")
                  .map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setActiveItem(item.name)}
                      className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 md:w-60 md:h-60 object-contain"
                        />
                      </div>
                      <p className="mt-4 text-[#f1e0d6] font-thin text-lg md:text-sm font-sodo">
                        {renderTrademark(item.name)}
                      </p>
                    </div>
                  ))}
              </div>

              <h2 className="text-2xl text-[#ffffff] font-thin mt-12 mb-6 font-sodo">Eau & Jus</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center w-full">
                {eauEtJusItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item.name)}
                    className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 md:w-60 md:h-60 object-contain"
                      />
                    </div>
                    <p className="mt-4 text-[#f1e0d6] font-thin text-lg md:text-sm font-sodo">
                      {renderTrademark(item.name)}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl text-[#ffffff] font-thin mt-12 mb-6 font-sodo">Pâtisseries & Desserts</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center w-full">
                {patisserieEtDessertaItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item.name)}
                    className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 md:w-60 md:h-60 object-contain"
                      />
                    </div>
                    <p className="mt-4 text-[#f1e0d6] font-thin text-lg md:text-sm font-sodo">
                      {renderTrademark(item.name)}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl text-[#ffffff] font-thin mt-12 mb-6 font-sodo">Gamme Salée</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center w-full">
                {gammeSaleeItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item.name)}
                    className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 md:w-60 md:h-60 object-contain"
                      />
                    </div>
                    <p className="mt-4 text-[#f1e0d6] font-thin text-lg md:text-sm font-sodo">
                      {renderTrademark(item.name)}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl text-[#ffffff] font-thin mt-12 mb-6 font-sodo">Breakfast & GO</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center w-full">
                {breakFastItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item.name)}
                    className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 md:w-60 md:h-60 object-contain"
                      />
                    </div>
                    <p className="mt-4 text-[#f1e0d6] font-thin text-lg md:text-sm font-sodo">
                      {renderTrademark(item.name)}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="mb-10 tracking-wide whitespace-nowrap overflow-x-auto pb-3 font-sodo">
  Crêpe
</h2>




            </>
          )}
        </div>
      </main>
    </section>
  );
}
