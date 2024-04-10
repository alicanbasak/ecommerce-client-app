import { Product } from "@/types";

const product: Product = {
  id: 1,
  category: {
    id: 1,
    name: "Shoes",
    slug: "shoes",
    billboard: {
      id: 1,
      label: "New Collection",
      imageUrl: "/images/billboards/shoes.jpg",
    },
  },
  name: "Air Jordan 1 Retro High OG",
  price: 170,
  isFeatured: true,
  isNew: true,
  isSale: false,
  size: {
    id: 1,
    name: "US",
    value: "10",
  },
  color: {
    id: 1,
    name: "Black",
    value: "#000000",
  },
  images: [
    {
      id: 1,
      url: "/images/products/air-jordan-1-retro-high-og-1.jpg",
    },
    {
      id: 2,
      url: "/images/products/air-jordan-1-retro-high-og-2.jpg",
    },
    {
      id: 3,
      url: "/images/products/air-jordan-1-retro-high-og-3.jpg",
    },
  ],
};
