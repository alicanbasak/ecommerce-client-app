import { Category } from "../types";

const categories: Category[] = [
  {
    id: 1,
    name: "Ayakkabı",
    slug: "ayakkabi",
    billboard: {
      id: 1,
      label: "Havalar ısınıyor! 2024 Yaz Koleksiyonu",
      imageUrl: "@/assets/billboard.webp",
    },
  },
  {
    id: 2,
    name: "T-shirt",
    slug: "t-shirt",
    billboard: {
      id: 2,
      label: "Yazın en güzel t-shirtleri",
      imageUrl: "./assets/billboard.webp",
    },
  },
  {
    id: 3,
    name: "Pantolon",
    slug: "pantolon",
    billboard: {
      id: 3,
      label: "Yazın en güzel şortları",
      imageUrl: "./assets/billboard.webp",
    },
  },
  {
    id: 4,
    name: "Şapka",
    slug: "sapka",
    billboard: {
      id: 4,
      label: "Şapka modası",
      imageUrl: "./assets/billboard.webp",
    },
  },
];

export default categories;
