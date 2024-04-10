import { Category } from "@/types";

const URL = "https://api.example.com/categories";

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export default getCategories;
