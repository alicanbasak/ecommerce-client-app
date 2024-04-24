import { Product } from "@/types";
import { Category } from "@/types";

const products: Product[] = [
  {
    id: 1,
    category: {
      id: 1,
      name: "Ayakkabi",
      billboard: {
        id: 1,
        label: "Yeni Koleksiyon",
        imageUrl: "/assets/product.webp",
      },
      slug: "ayakkabi",
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
      name: "Siyah",
      value: "#000000",
    },
    images: [
      {
        id: 1,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
      {
        id: 2,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
      {
        id: 3,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
    ],
    slug: "ayakkabi-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies,purus odio aliquet nunc, nec tristique nunc libero nec dolor. Sed vel neque in tellus euismod tincidunt. Nullam auctor, nunc nec ultricies ultricies,purus odio aliquet nunc, nec tristique nunc libero nec dolor. Sed vel neque in tellus euismod tincidunt.",
  },
  {
    id: 2,
    category: {
      id: 2,
      name: "Ayakkabi",
      slug: "ayakkabi",
      billboard: {
        id: 2,
        label: "Yeni Koleksiyon",
        imageUrl: "/assets/product.webp",
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
      name: "Siyah",
      value: "#000000",
    },
    images: [
      {
        id: 1,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
      {
        id: 2,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
      {
        id: 3,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
    ],
    slug: "ayakkabi-2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies,purus odio aliquet nunc, nec tristique nunc libero nec dolor. Sed vel neque in tellus euismod tincidunt. Nullam auctor, nunc nec ultricies ultricies,purus odio aliquet nunc, nec tristique nunc libero nec dolor. Sed vel neque in tellus euismod tincidunt.",
  },
  {
    id: 3,
    category: {
      id: 3,
      name: "Ayakkabi",
      slug: "ayakkabi",
      billboard: {
        id: 3,
        label: "Yeni Koleksiyon",
        imageUrl: "/assets/product.webp",
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
      name: "Siyah",
      value: "#000000",
    },
    images: [
      {
        id: 1,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
      {
        id: 2,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
      {
        id: 3,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
    ],
    slug: "ayakkabi-3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies,purus odio aliquet nunc, nec tristique nunc libero nec dolor. Sed vel neque in tellus euismod tincidunt. Nullam auctor, nunc nec ultricies ultricies,purus odio aliquet nunc, nec tristique nunc libero nec dolor. Sed vel neque in tellus euismod tincidunt.",
  },
  {
    id: 4,
    category: {
      id: 4,
      name: "Ayakkabi",
      slug: "ayakkabi",
      billboard: {
        id: 4,
        label: "Yeni Koleksiyon",
        imageUrl: "/assets/product.webp",
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
      name: "Siyah",
      value: "#000000",
    },
    images: [
      {
        id: 1,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
      {
        id: 2,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
      {
        id: 3,
        url: "/assets/product.webp",
        alt: "Air Jordan 1 Retro High OG",
      },
    ],
    slug: "ayakkabi-4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies,purus odio aliquet nunc, nec tristique nunc libero nec dolor. Sed vel neque in tellus euismod tincidunt. Nullam auctor, nunc nec ultricies ultricies,purus odio aliquet nunc, nec tristique nunc libero nec dolor. Sed vel neque in tellus euismod tincidunt.",
  },
];

export default products;
