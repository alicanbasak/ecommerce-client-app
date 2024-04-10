import { Product } from "@/types";
import qs from "query-string";

const URL = "https://api.example.com/products";

interface Query {
  categoryId: number;
  colorId: number;
  sizeId: number;
  isFeatured: boolean;
  isNew: boolean;
  isSale: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
      isNew: query.isNew,
      isSale: query.isSale,
    },
  });

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getProducts;
