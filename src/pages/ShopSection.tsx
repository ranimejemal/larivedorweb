import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Search } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";



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

export const featuredItems = [
  { id: 6, name: "Café Glacé", category: "Boissons", image: "/boisson.png" },
  { id: 7, name: "Café Chaud", category: "Boissons", image: "/espress.png" },
  { id: 71, name: "Matcha", category: "Boissons", image: "/matchaclassic.png" },
  { id: 8, name: "Chocolats Chauds et Glacés", category: "Boissons", image: "/chocoo4.png" },
  { id: 9, name: "Tea Latte", category: "Boissons", image: "/tea.png" },
  { id: 10, name: "Refresha® et Thés Glacés", category: "Boissons", image: "/icedtea.png" },
  { id: 1, name: "Frappuccino®", category: "Boissons", image: "/frapp.png" },
  { id: 2, name: "Thés Chauds", category: "Boissons", image: "/hottea.png" },
];

export const eauEtJusItems = [
  { id: 11, name: "Eau & Jus", category: "Eau & Jus", image: "/waterr.png" },
];

export const patisserieEtDessertaItems = [
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

export const gammeSaleeItems = [
  { id: 21, name: "Croissant Salé", category: "Sandwiches", image: "/Design sans titre (86).png" },
  { id: 23, name: "Sandwiches", category: "Sandwiches", image: "/sandwiche.png" },
  { id: 24, name: "Pâté", category: "Sandwiches", image: "/Design sans titre (90).png" },
  { id: 25, name: "Pizza", category: "Sandwiches", image: "/Design sans titre (87).png" },
  
  

];

export const breakFastItems = [
  { id: 29, name: "Soft", category: "Breakfast", image: "/Design sans titre (91).png" },

];

export const subItemsMap = {
  "Café Chaud": [
    { id: 30, name: "Express", image: "/espress.png", nutrition: { energy: "300KJ / 70Kcal", fat: "0g", saturatedFat: "0g", carbs: "8g", sugar: "6g", fibre: "0g", protein: "1g", salt: "0g", caffeine: "90mg", allergens: [] } },
    { id: 31, name: "Americano", image: "/americanoo.png", nutrition: { energy: "250KJ / 60Kcal", fat: "0g", saturatedFat: "0g", carbs: "7g", sugar: "5g", fibre: "0g", protein: "1g", salt: "0g", caffeine: "95mg", allergens: [] } },
    { id: 35, name: "Cappucin", image: "/cappucin.png", nutrition: { energy: "950KJ / 225Kcal", fat: "6g", saturatedFat: "4g", carbs: "28g", sugar: "25g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "80mg", allergens: ["Lait"] } },
    { id: 36, name: "Café Crème", image: "/cafecreme.png", nutrition: { energy: "1050KJ / 250Kcal", fat: "7g", saturatedFat: "4g", carbs: "30g", sugar: "28g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "80mg", allergens: ["Lait"] } },
    { id: 43, name: "Cappuccino", image: "/cappuo.png", nutrition: { energy: "1000KJ / 240Kcal", fat: "6.5g", saturatedFat: "4g", carbs: "27g", sugar: "24g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "80mg", allergens: ["Lait"] } },
    { id: 45, name: "Macchiato", image: "/macchiatoo.png", nutrition: { energy: "320KJ / 75Kcal", fat: "0.5g", saturatedFat: "0.3g", carbs: "7g", sugar: "6g", fibre: "0g", protein: "1g", salt: "0g", caffeine: "90mg", allergens: ["Lait"] } },
    { id: 46, name: "Pumpkin Spice Latte", image: "/pumpkinss.png", nutrition: { energy: "1250KJ / 300Kcal", fat: "8g", saturatedFat: "5g", carbs: "38g", sugar: "32g", fibre: "1g", protein: "4g", salt: "0.1g", caffeine: "80mg", allergens: ["Lait"] } },
    { id: 47, name: "Tiramisu Latte", image: "/tiramisuhot.png", nutrition: { energy: "1300KJ / 310Kcal", fat: "9g", saturatedFat: "5g", carbs: "36g", sugar: "30g", fibre: "1g", protein: "4g", salt: "0.1g", caffeine: "75mg", allergens: ["Lait"] } },
  ],

  "Café Glacé": [
    { id: 33, name: "Iced Coffee Caramel", image: "/caramel.png", nutrition: { energy: "1400KJ / 335Kcal", fat: "10g", saturatedFat: "6g", carbs: "45g", sugar: "42g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "85mg", allergens: ["Lait"] } },
    { id: 37, name: "Iced Coffee Vanille", image: "/vanille.png", nutrition: { energy: "1380KJ / 330Kcal", fat: "9g", saturatedFat: "5g", carbs: "44g", sugar: "40g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "85mg", allergens: ["Lait"] } },
    { id: 38, name: "Iced Coffee Macchiato", image: "/macchiato.png", nutrition: { energy: "1420KJ / 340Kcal", fat: "10g", saturatedFat: "6g", carbs: "46g", sugar: "42g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "90mg", allergens: ["Lait"] } },
    { id: 39, name: "Iced Coffee Mocha", image: "/mocha.png", nutrition: { energy: "1450KJ / 345Kcal", fat: "11g", saturatedFat: "6g", carbs: "48g", sugar: "44g", fibre: "0g", protein: "4g", salt: "0.1g", caffeine: "90mg", allergens: ["Lait"] } },
    { id: 40, name: "Spanish Latte", image: "/spanish.png", nutrition: { energy: "1500KJ / 360Kcal", fat: "12g", saturatedFat: "7g", carbs: "50g", sugar: "45g", fibre: "0g", protein: "4g", salt: "0.1g", caffeine: "80mg", allergens: ["Lait"] } },
    { id: 41, name: "Iced Americano", image: "/americano.png", nutrition: { energy: "350KJ / 80Kcal", fat: "0g", saturatedFat: "0g", carbs: "9g", sugar: "7g", fibre: "0g", protein: "1g", salt: "0g", caffeine: "95mg", allergens: [] } },
    { id: 53, name: "Iced Pumpkin Spice Latte", image: "/pumkins.png", nutrition: { energy: "1320KJ / 315Kcal", fat: "9g", saturatedFat: "5g", carbs: "42g", sugar: "38g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "80mg", allergens: ["Lait"] } },
    { id: 54, name: "Tiramisu Iced Latte", image: "/tiramisuice.png", nutrition: { energy: "1340KJ / 320Kcal", fat: "10g", saturatedFat: "6g", carbs: "43g", sugar: "40g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "80mg", allergens: ["Lait"] } },
    { id: 55, name: "Iced White Mocha", image: "/whitemocha.png", nutrition: { energy: "1400KJ / 335Kcal", fat: "11g", saturatedFat: "6g", carbs: "45g", sugar: "42g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "85mg", allergens: ["Lait"] } },
  ],

  "Chocolats Chauds et Glacés": [
    { id: 35, name: "Chocolat Viennois Classique Chaud", image: "/cocohot.png", nutrition: { energy: "1400KJ / 335Kcal", fat: "12g", saturatedFat: "7g", carbs: "42g", sugar: "38g", fibre: "1g", protein: "4g", salt: "0.2g", caffeine: "10mg", allergens: ["Lait"] } },
    { id: 36, name: "Chocolat Viennois Classique Glacé", image: "/cocoice.png", nutrition: { energy: "1350KJ / 320Kcal", fat: "11g", saturatedFat: "6g", carbs: "40g", sugar: "36g", fibre: "1g", protein: "4g", salt: "0.2g", caffeine: "10mg", allergens: ["Lait"] } },
  ],

  "Matcha": [
    { id: 56, name: "Matcha Classic", image: "/matchaclassic.png", nutrition: { energy: "950KJ / 225Kcal", fat: "6g", saturatedFat: "4g", carbs: "28g", sugar: "25g", fibre: "1g", protein: "3g", salt: "0.1g", caffeine: "70mg", allergens: ["Lait"] } },
    { id: 57, name: "Matcha Caramel", image: "/caramelmatcha.png", nutrition: { energy: "980KJ / 230Kcal", fat: "7g", saturatedFat: "4g", carbs: "30g", sugar: "26g", fibre: "1g", protein: "3g", salt: "0.1g", caffeine: "70mg", allergens: ["Lait"] } },
    { id: 66, name: "Matcha Vanille", image: "/matchavanil.png", nutrition: { energy: "970KJ / 230Kcal", fat: "6.5g", saturatedFat: "4g", carbs: "29g", sugar: "25g", fibre: "1g", protein: "3g", salt: "0.1g", caffeine: "70mg", allergens: ["Lait"] } },
    { id: 67, name: "Matcha Mocha", image: "/matchachoco.png", nutrition: { energy: "1000KJ / 240Kcal", fat: "7g", saturatedFat: "4g", carbs: "31g", sugar: "27g", fibre: "1g", protein: "3g", salt: "0.1g", caffeine: "75mg", allergens: ["Lait"] } },
    { id: 68, name: "Matcha Coffee", image: "/matchacoffe.png", nutrition: { energy: "980KJ / 230Kcal", fat: "6g", saturatedFat: "4g", carbs: "30g", sugar: "25g", fibre: "1g", protein: "3g", salt: "0.1g", caffeine: "75mg", allergens: ["Lait"] } },
    { id: 69, name: "Matcha Strawberry", image: "/matchastraw.png", nutrition: { energy: "960KJ / 225Kcal", fat: "6g", saturatedFat: "4g", carbs: "28g", sugar: "24g", fibre: "1g", protein: "3g", salt: "0.1g", caffeine: "65mg", allergens: ["Lait"] } },
    { id: 70, name: "Matcha Banane", image: "/matchabanane.png", nutrition: { energy: "980KJ / 230Kcal", fat: "6.5g", saturatedFat: "4g", carbs: "29g", sugar: "26g", fibre: "1g", protein: "3g", salt: "0.1g", caffeine: "65mg", allergens: ["Lait"] } },
  ],
  "Tea Latte": [
    { id: 58, name: "Iced Chai Latte", image: "/tea.png", nutrition: { energy: "1100KJ / 265Kcal", fat: "7g", saturatedFat: "4g", carbs: "35g", sugar: "30g", fibre: "1g", protein: "4g", salt: "0.1g", caffeine: "60mg", allergens: ["Lait"] } },
    { id: 59, name: "Chai Latte", image: "/chaihoot.png", nutrition: { energy: "1050KJ / 250Kcal", fat: "6g", saturatedFat: "4g", carbs: "32g", sugar: "28g", fibre: "1g", protein: "4g", salt: "0.1g", caffeine: "60mg", allergens: ["Lait"] } },
  ],

  "Refresha® et Thés Glacés": [
    { id: 35, name: "Refresha® Cool Lime", image: "/icedtea.png", nutrition: { energy: "400KJ / 95Kcal", fat: "0g", saturatedFat: "0g", carbs: "22g", sugar: "20g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 36, name: "Refresha® Strawberry", image: "/refreshastarw.png", nutrition: { energy: "410KJ / 98Kcal", fat: "0g", saturatedFat: "0g", carbs: "23g", sugar: "21g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 72, name: "Refresha® Very Berry", image: "/refberry.png", nutrition: { energy: "420KJ / 100Kcal", fat: "0g", saturatedFat: "0g", carbs: "24g", sugar: "22g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "0mg", allergens: [] } },
  ],

  "Frappuccino®": [
    { id: 60, name: "Creme Brulee Frappuccino", image: "/brulee.png", nutrition: { energy: "1450KJ / 345Kcal", fat: "11g", saturatedFat: "6g", carbs: "45g", sugar: "42g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "80mg", allergens: ["Lait"] } },
    { id: 61, name: "Tiramisu Frappuccino", image: "/tiramfrap.png", nutrition: { energy: "1480KJ / 350Kcal", fat: "12g", saturatedFat: "7g", carbs: "46g", sugar: "43g", fibre: "0g", protein: "4g", salt: "0.1g", caffeine: "75mg", allergens: ["Lait"] } },
    { id: 73, name: "Frappuccino Café Caramel", image: "/frapbrule.png", nutrition: { energy: "1500KJ / 360Kcal", fat: "12g", saturatedFat: "7g", carbs: "48g", sugar: "45g", fibre: "0g", protein: "4g", salt: "0.1g", caffeine: "85mg", allergens: ["Lait"] } },
    { id: 74, name: "Frappucciono Café", image: "/frapcafe.png", nutrition: { energy: "1420KJ / 340Kcal", fat: "10g", saturatedFat: "6g", carbs: "44g", sugar: "40g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "85mg", allergens: ["Lait"] } },
    { id: 75, name: "Frappuccino Mocha", image: "/frapmocha.png", nutrition: { energy: "1480KJ / 350Kcal", fat: "12g", saturatedFat: "7g", carbs: "46g", sugar: "43g", fibre: "0g", protein: "4g", salt: "0.1g", caffeine: "85mg", allergens: ["Lait"] } },
  ],

  "Thés Chauds": [
    { id: 62, name: "English Breakfast Tea (infusiant)", image: "/hottea.png", nutrition: { energy: "10KJ / 2Kcal", fat: "0g", saturatedFat: "0g", carbs: "0g", sugar: "0g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "40mg", allergens: [] } },
    { id: 63, name: "Earl Grey Tea (infusiant)", image: "/earltea.png", nutrition: { energy: "10KJ / 2Kcal", fat: "0g", saturatedFat: "0g", carbs: "0g", sugar: "0g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "40mg", allergens: [] } },
    { id: 76, name: "Mint Citrus Green Tea (infusiant)", image: "/citrus.png", nutrition: { energy: "15KJ / 3Kcal", fat: "0g", saturatedFat: "0g", carbs: "1g", sugar: "0g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "20mg", allergens: [] } },
    { id: 77, name: "Thé à la menthe", image: "/thementhe.png", nutrition: { energy: "20KJ / 5Kcal", fat: "0g", saturatedFat: "0g", carbs: "1g", sugar: "0g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "15mg", allergens: [] } },
    { id: 78, name: "Thé à l'amande", image: "/amande.png", nutrition: { energy: "80KJ / 20Kcal", fat: "1g", saturatedFat: "0.1g", carbs: "2g", sugar: "1g", fibre: "0g", protein: "0.5g", salt: "0g", caffeine: "15mg", allergens: ["Amande"] } },
    { id: 79, name: "Thé aux pignon", image: "/pignon.png", nutrition: { energy: "85KJ / 20Kcal", fat: "1g", saturatedFat: "0.1g", carbs: "2g", sugar: "1g", fibre: "0g", protein: "0.5g", salt: "0g", caffeine: "15mg", allergens: ["Pignon"] } },
  ],

  "Eau & Jus": [
    { id: 64, name: "Jus D'orange", image: "/jusorange.png", nutrition: { energy: "180KJ / 43Kcal", fat: "0g", saturatedFat: "0g", carbs: "10g", sugar: "9g", fibre: "0g", protein: "0.5g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 65, name: "Jus De Fraise", image: "/jusfraise.png", nutrition: { energy: "170KJ / 40Kcal", fat: "0g", saturatedFat: "0g", carbs: "9g", sugar: "8g", fibre: "0g", protein: "0.5g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 80, name: "Jus De Citron", image: "/lemonade.png", nutrition: { energy: "160KJ / 38Kcal", fat: "0g", saturatedFat: "0g", carbs: "9g", sugar: "8g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 81, name: "Jus De Pomme", image: "/applejus.png", nutrition: { energy: "180KJ / 43Kcal", fat: "0g", saturatedFat: "0g", carbs: "11g", sugar: "10g", fibre: "0g", protein: "0.5g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 82, name: "Jus De Kiwi", image: "/juskiwi.png", nutrition: { energy: "170KJ / 40Kcal", fat: "0g", saturatedFat: "0g", carbs: "10g", sugar: "9g", fibre: "1g", protein: "0.5g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 83, name: "Jus De Banane", image: "/jusbanane.png", nutrition: { energy: "210KJ / 50Kcal", fat: "0g", saturatedFat: "0g", carbs: "12g", sugar: "10g", fibre: "1g", protein: "0.5g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 84, name: "Cocktail La Rive D'or", image: "/cocktail.png", nutrition: { energy: "550KJ / 130Kcal", fat: "0.5g", saturatedFat: "0.1g", carbs: "32g", sugar: "30g", fibre: "1g", protein: "0.5g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 85, name: "Red Smoothie", image: "/redsmoothie.png", nutrition: { energy: "600KJ / 145Kcal", fat: "0.5g", saturatedFat: "0.1g", carbs: "35g", sugar: "32g", fibre: "2g", protein: "1g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 86, name: "Green Smoothie", image: "/greennsmoothie.png", nutrition: { energy: "620KJ / 148Kcal", fat: "0.5g", saturatedFat: "0.1g", carbs: "36g", sugar: "33g", fibre: "2g", protein: "1g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 87, name: "Lemon Water Sparkling", image: "/lemonspark.png", nutrition: { energy: "50KJ / 12Kcal", fat: "0g", saturatedFat: "0g", carbs: "3g", sugar: "2g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 88, name: "Lemon Mojito", image: "/lemonmojito.png", nutrition: { energy: "120KJ / 28Kcal", fat: "0g", saturatedFat: "0g", carbs: "7g", sugar: "6g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 89, name: "Strawberry Mojito", image: "/strawmojito.png", nutrition: { energy: "140KJ / 33Kcal", fat: "0g", saturatedFat: "0g", carbs: "8g", sugar: "7g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 90, name: "Red Mojito", image: "/mojitored.png", nutrition: { energy: "145KJ / 35Kcal", fat: "0g", saturatedFat: "0g", carbs: "8g", sugar: "7g", fibre: "0g", protein: "0g", salt: "0g", caffeine: "0mg", allergens: [] } },
    { id: 154, name: "Mira 1L", image: "/icedchoco.png", nutrition: { energy: "1700KJ / 400Kcal", fat: "12g", saturatedFat: "7g", carbs: "65g", sugar: "60g", fibre: "0g", protein: "6g", salt: "0.2g", caffeine: "5mg", allergens: ["Lait"] } },
    { id: 155, name: "Mira 500 ml", image: "/icedchoco.png", nutrition: { energy: "850KJ / 200Kcal", fat: "6g", saturatedFat: "3.5g", carbs: "32g", sugar: "30g", fibre: "0g", protein: "3g", salt: "0.1g", caffeine: "2.5mg", allergens: ["Lait"] } },
    { id: 156, name: "Garci 1L", image: "/icedchoco.png", nutrition: { energy: "1600KJ / 380Kcal", fat: "11g", saturatedFat: "6g", carbs: "62g", sugar: "58g", fibre: "0g", protein: "6g", salt: "0.2g", caffeine: "5mg", allergens: ["Lait"] } },
  ],

  "Viennoiseries": [
  { id: 91, name: "Croissant", image: "/croissant.png", nutrition: { energy: "1200KJ / 290Kcal", fat: "14g", saturatedFat: "8g", carbs: "33g", sugar: "6g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 92, name: "Pain au Chocolat", image: "/painchoco.png", nutrition: { energy: "1500KJ / 360Kcal", fat: "18g", saturatedFat: "10g", carbs: "36g", sugar: "12g", fibre: "2g", protein: "7g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 93, name: "New York Rolls", image: "/newyorkrolls.png", nutrition: { energy: "1400KJ / 335Kcal", fat: "15g", saturatedFat: "9g", carbs: "35g", sugar: "8g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 94, name: "Dubai Croissant", image: "/dubaicroi.png", nutrition: { energy: "1250KJ / 300Kcal", fat: "13g", saturatedFat: "7g", carbs: "32g", sugar: "6g", fibre: "2g", protein: "5g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 95, name: "Cinnamon Rolls (cuit sur place)", image: "/cinnamon.png", nutrition: { energy: "1600KJ / 380Kcal", fat: "16g", saturatedFat: "9g", carbs: "50g", sugar: "20g", fibre: "2g", protein: "6g", salt: "0.4g", allergens: ["Gluten", "Lait"] } },
],

"Pancakes & Crêpe": [
  { id: 96, name: "Crêpe au Chocolat", image: "/icedchoco.png", nutrition: { energy: "900KJ / 215Kcal", fat: "8g", saturatedFat: "5g", carbs: "28g", sugar: "12g", fibre: "1g", protein: "5g", salt: "0.2g", allergens: ["Gluten", "Lait"] } },
  { id: 97, name: "Crêpe Nutella", image: "/icedchoco.png", nutrition: { energy: "1000KJ / 240Kcal", fat: "10g", saturatedFat: "6g", carbs: "30g", sugar: "15g", fibre: "1g", protein: "5g", salt: "0.2g", allergens: ["Gluten", "Lait", "Noisette"] } },
  { id: 98, name: "Crêpe Choco Luxe", image: "/icedchoco.png", nutrition: { energy: "1050KJ / 250Kcal", fat: "10g", saturatedFat: "6g", carbs: "31g", sugar: "14g", fibre: "1g", protein: "5g", salt: "0.2g", allergens: ["Gluten", "Lait"] } },
  { id: 99, name: "Crêpe Colden Twist", image: "/icedchoco.png", nutrition: { energy: "1100KJ / 265Kcal", fat: "11g", saturatedFat: "6g", carbs: "32g", sugar: "15g", fibre: "1g", protein: "5g", salt: "0.2g", allergens: ["Gluten", "Lait"] } },
  { id: 100, name: "Crêpe Royale Banane", image: "/icedchoco.png", nutrition: { energy: "950KJ / 230Kcal", fat: "9g", saturatedFat: "5g", carbs: "28g", sugar: "12g", fibre: "2g", protein: "5g", salt: "0.2g", allergens: ["Gluten", "Lait"] } },
  // Add Trio Pancakes
  { id: 104, name: "Trio Pancake au beurre et miel", image: "/icedchoco.png", nutrition: { energy: "1250KJ / 300Kcal", fat: "12g", saturatedFat: "7g", carbs: "40g", sugar: "15g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 105, name: "Trio Pancake chocolat", image: "/icedchoco.png", nutrition: { energy: "1350KJ / 320Kcal", fat: "14g", saturatedFat: "8g", carbs: "42g", sugar: "18g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 106, name: "Trio Pancake Nutella", image: "/icedchoco.png", nutrition: { energy: "1400KJ / 335Kcal", fat: "15g", saturatedFat: "8g", carbs: "45g", sugar: "20g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait", "Noisette"] } },
  { id: 107, name: "Trio Pancake Golden Twist", image: "/icedchoco.png", nutrition: { energy: "1450KJ / 345Kcal", fat: "15g", saturatedFat: "8g", carbs: "46g", sugar: "21g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 108, name: "Trio Pancake Royale Banane", image: "/icedchoco.png", nutrition: { energy: "1300KJ / 310Kcal", fat: "12g", saturatedFat: "7g", carbs: "42g", sugar: "18g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 109, name: "Trio Pancake Choco Luxe", image: "/icedchoco.png", nutrition: { energy: "1350KJ / 325Kcal", fat: "14g", saturatedFat: "8g", carbs: "44g", sugar: "19g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
],

"Loaf Cakes & Rolls": [
  { id: 110, name: "Chocolate Vanille Loaf", image: "/icedchoco.png", nutrition: { energy: "1600KJ / 380Kcal", fat: "18g", saturatedFat: "10g", carbs: "45g", sugar: "25g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 111, name: "Chocolate Loaf", image: "/icedchoco.png", nutrition: { energy: "1650KJ / 395Kcal", fat: "19g", saturatedFat: "10g", carbs: "46g", sugar: "26g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 112, name: "Almond Loaf", image: "/icedchoco.png", nutrition: { energy: "1700KJ / 405Kcal", fat: "20g", saturatedFat: "11g", carbs: "44g", sugar: "22g", fibre: "3g", protein: "7g", salt: "0.3g", allergens: ["Gluten", "Lait", "Amande"] } },
  { id: 113, name: "Cake Citron", image: "/icedchoco.png", nutrition: { energy: "1500KJ / 360Kcal", fat: "16g", saturatedFat: "9g", carbs: "42g", sugar: "22g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 114, name: "Cinnamon Roll Cuit sur place", image: "/icedchoco.png", nutrition: { energy: "1600KJ / 380Kcal", fat: "17g", saturatedFat: "9g", carbs: "50g", sugar: "20g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
],

"Gâteaux à la part": [
  { id: 115, name: "Chocolate Lover Cake", image: "/icedchoco.png", nutrition: { energy: "1700KJ / 405Kcal", fat: "22g", saturatedFat: "12g", carbs: "40g", sugar: "25g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 116, name: "Cheese cake Biscoff", image: "/icedchoco.png", nutrition: { energy: "1800KJ / 430Kcal", fat: "23g", saturatedFat: "13g", carbs: "42g", sugar: "26g", fibre: "2g", protein: "7g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
],

"Muffins": [
  { id: 115, name: "Muffin Double chocolat fourré au chocolat noir", image: "/icedchoco.png", nutrition: { energy: "1600KJ / 380Kcal", fat: "18g", saturatedFat: "10g", carbs: "44g", sugar: "25g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 116, name: "Muffin Double chocolat fourré au cacao", image: "/icedchoco.png", nutrition: { energy: "1550KJ / 370Kcal", fat: "17g", saturatedFat: "10g", carbs: "42g", sugar: "24g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 117, name: "Muffin Double Amande", image: "/icedchoco.png", nutrition: { energy: "1650KJ / 390Kcal", fat: "18g", saturatedFat: "10g", carbs: "45g", sugar: "26g", fibre: "3g", protein: "7g", salt: "0.3g", allergens: ["Gluten", "Lait", "Amande"] } },
],

"Donuts": [
  { id: 118, name: "Donut Chocolat Fourré au Cacao", image: "/icedchoco.png", nutrition: { energy: "1400KJ / 335Kcal", fat: "15g", saturatedFat: "9g", carbs: "40g", sugar: "20g", fibre: "1g", protein: "5g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
],

"Cookies": [
  { id: 119, name: "Cookie pépites (cuit sur place)", image: "/icedchoco.png", nutrition: { energy: "1000KJ / 240Kcal", fat: "10g", saturatedFat: "6g", carbs: "32g", sugar: "16g", fibre: "1g", protein: "4g", salt: "0.2g", allergens: ["Gluten", "Lait"] } },
  { id: 120, name: "Cookie tout chocolat (cuit sur place)", image: "/icedchoco.png", nutrition: { energy: "1050KJ / 250Kcal", fat: "11g", saturatedFat: "7g", carbs: "33g", sugar: "18g", fibre: "1g", protein: "4g", salt: "0.2g", allergens: ["Gluten", "Lait"] } },
  { id: 121, name: "Cookie Red Velvet (cuit sur place)", image: "/icedchoco.png", nutrition: { energy: "1100KJ / 260Kcal", fat: "12g", saturatedFat: "7g", carbs: "34g", sugar: "19g", fibre: "1g", protein: "4g", salt: "0.2g", allergens: ["Gluten", "Lait"] } },
],

"Brownies": [
  { id: 122, name: "Brownies Chocolat", image: "/icedchoco.png", nutrition: { energy: "1500KJ / 360Kcal", fat: "20g", saturatedFat: "12g", carbs: "40g", sugar: "25g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
  { id: 123, name: "Brookies", image: "/icedchoco.png", nutrition: { energy: "1600KJ / 380Kcal", fat: "21g", saturatedFat: "12g", carbs: "42g", sugar: "26g", fibre: "2g", protein: "6g", salt: "0.3g", allergens: ["Gluten", "Lait"] } },
],

"Yaourts & Fruits": [
  { id: 124, name: "Yaourt Fraise Banane", image: "/icedchoco.png", nutrition: { energy: "500KJ / 120Kcal", fat: "2g", saturatedFat: "1g", carbs: "18g", sugar: "14g", fibre: "1g", protein: "4g", salt: "0.1g", allergens: ["Lait"] } },
  { id: 125, name: "Yaourt Cocktail", image: "/icedchoco.png", nutrition: { energy: "550KJ / 130Kcal", fat: "2g", saturatedFat: "1g", carbs: "20g", sugar: "15g", fibre: "1g", protein: "4g", salt: "0.1g", allergens: ["Lait"] } },
  { id: 126, name: "Very Berry Yaourt", image: "/icedchoco.png", nutrition: { energy: "600KJ / 140Kcal", fat: "2g", saturatedFat: "1g", carbs: "22g", sugar: "16g", fibre: "2g", protein: "4g", salt: "0.1g", allergens: ["Lait"] } },
],

"Croissant Salé": [
  { id: 127, name: "Croissant Jambon Fromage", image: "/icedchoco.png", nutrition: { energy: "1600KJ / 380Kcal", fat: "18g", saturatedFat: "10g", carbs: "32g", sugar: "4g", fibre: "2g", protein: "12g", salt: "1g", allergens: ["Gluten", "Lait"] } },
  { id: 128, name: "Croissant aux Epinards", image: "/icedchoco.png", nutrition: { energy: "1500KJ / 360Kcal", fat: "16g", saturatedFat: "9g", carbs: "32g", sugar: "3g", fibre: "3g", protein: "8g", salt: "0.8g", allergens: ["Gluten", "Lait"] } },
  { id: 129, name: "Croissant Poulet Fromage", image: "/icedchoco.png", nutrition: { energy: "1650KJ / 390Kcal", fat: "18g", saturatedFat: "10g", carbs: "33g", sugar: "4g", fibre: "2g", protein: "14g", salt: "1g", allergens: ["Gluten", "Lait"] } },
],

"Sandwiches": [
  { id: 130, name: "Eggtoast Epinard (cuit sur place)", image: "/icedchoco.png", nutrition: { energy: "1400KJ / 335Kcal", fat: "10g", saturatedFat: "4g", carbs: "35g", sugar: "3g", fibre: "3g", protein: "12g", salt: "0.8g", allergens: ["Gluten", "Lait", "Oeuf"] } },
  { id: 131, name: "Eggtoast Poulet (cuit sur place)", image: "/icedchoco.png", nutrition: { energy: "1500KJ / 360Kcal", fat: "12g", saturatedFat: "5g", carbs: "36g", sugar: "3g", fibre: "3g", protein: "14g", salt: "0.9g", allergens: ["Gluten", "Lait", "Oeuf"] } },
  { id: 132, name: "Egg & Jambon Muffin (cuit sur place)", image: "/icedchoco.png", nutrition: { energy: "1450KJ / 345Kcal", fat: "11g", saturatedFat: "5g", carbs: "34g", sugar: "3g", fibre: "2g", protein: "13g", salt: "0.9g", allergens: ["Gluten", "Lait", "Oeuf"] } },
  // Add remaining sandwiches in the same pattern
],

"Paté": [
  { id: 133, name: "Paté Thon", image: "/icedchoco.png", nutrition: { energy: "900KJ / 215Kcal", fat: "7g", saturatedFat: "2g", carbs: "10g", sugar: "1g", fibre: "1g", protein: "20g", salt: "1g", allergens: ["Poisson", "Lait"] } },
  { id: 134, name: "Paté Poulet", image: "/icedchoco.png", nutrition: { energy: "950KJ / 225Kcal", fat: "8g", saturatedFat: "2g", carbs: "10g", sugar: "1g", fibre: "1g", protein: "20g", salt: "1g", allergens: ["Poulet", "Lait"] } },
  { id: 135, name: "Paté Fromage", image: "/icedchoco.png", nutrition: { energy: "1000KJ / 240Kcal", fat: "9g", saturatedFat: "5g", carbs: "12g", sugar: "2g", fibre: "1g", protein: "10g", salt: "1g", allergens: ["Lait"] } },
],

"Pizza": [
  { id: 136, name: "Mini Pizza", image: "/icedchoco.png", nutrition: { energy: "1800KJ / 430Kcal", fat: "15g", saturatedFat: "7g", carbs: "50g", sugar: "6g", fibre: "3g", protein: "18g", salt: "1.2g", allergens: ["Gluten", "Lait"] } },
],

"Breakfast": [
  { id: 150, name: "Soft", image: "/icedchoco.png", nutrition: { energy: "1400KJ / 335Kcal", fat: "10g", saturatedFat: "4g", carbs: "35g", sugar: "5g", fibre: "3g", protein: "12g", salt: "0.8g", allergens: ["Gluten", "Lait", "Oeuf"] } },
  { id: 151, name: "Eveil Doré", image: "/icedchoco.png", nutrition: { energy: "1450KJ / 345Kcal", fat: "11g", saturatedFat: "5g", carbs: "36g", sugar: "5g", fibre: "3g", protein: "13g", salt: "0.9g", allergens: ["Gluten", "Lait", "Oeuf"] } },
  { id: 152, name: "Healthy", image: "/icedchoco.png", nutrition: { energy: "1200KJ / 285Kcal", fat: "6g", saturatedFat: "2g", carbs: "30g", sugar: "3g", fibre: "4g", protein: "10g", salt: "0.6g", allergens: ["Gluten", "Lait", "Oeuf"] } },
  { id: 153, name: "Grand Prestige", image: "/icedchoco.png", nutrition: { energy: "1600KJ / 380Kcal", fat: "12g", saturatedFat: "6g", carbs: "40g", sugar: "6g", fibre: "3g", protein: "14g", salt: "1g", allergens: ["Gluten", "Lait", "Oeuf"] } },
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
  const navigate = useNavigate();


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
    
    {/* Search Tab / Retour */}
    {!activeItem && !activeCategory && activeTab === "Recherche" && (
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            setActiveTab("Menu");
            setSearchQuery(""); // clear search when returning
          }}
          className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#ffffff] transition-colors font-sodo"
        >
          <span className="text-base font-sodo">&lt;</span>
          <span>Retour</span>
        </button>
        <h1 className="text-4xl md:text-5xl text-[#ffffff] font-sodo">
          Recherche
        </h1>
      </div>
    )}

    {/* Tabs */}
    {!activeItem && !activeCategory && activeTab !== "Recherche" && (
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

    {/* Search Bar */}
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
                    onClick={() =>
                      navigate(`/item/${encodeURIComponent(item.name)}`)
                    }
                    className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
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
                    onClick={() =>
                      navigate(`/item/${encodeURIComponent(item.name)}`)
                    }
                    className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
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
        {/* Image container */}
        <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 md:w-60 md:h-60 object-contain"
          />
        </div>

        {/* Title under the picture */}
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
        {/* Image container */}
        <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 md:w-60 md:h-60 object-contain"
          />
        </div>
                     {/* Title under the picture */}
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
        {/* Image container */}
        <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 md:w-60 md:h-60 object-contain"
          />
        </div>
                     {/* Title under the picture */}
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
        {/* Image container */}
        <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 md:w-60 md:h-60 object-contain"
          />
        </div>
                     {/* Title under the picture */}
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
        {/* Image container */}
        <div className="w-12 h-12 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-tr from-[#3a2e2b] to-black flex items-center justify-center shadow-lg group-hover:shadow-[#d9b382]/50 transition-shadow duration-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 md:w-60 md:h-60 object-contain"
          />
        </div>
                     {/* Title under the picture */}
        <p className="mt-4 text-[#f1e0d6] font-thin text-lg md:text-sm font-sodo">
          {renderTrademark(item.name)}
        </p>
      </div>
    ))}
</div>

            </>
          )}
        </div>
      </main>
    </section>
  );
}
