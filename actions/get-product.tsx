import { Product } from "@/types";

const getProducts = async (slug: string): Promise<Product> => {
  const respomse = await fetch(`https://fakestoreapi.com/products/${slug}`);
  const data = await respomse.json();
  return data;
};
