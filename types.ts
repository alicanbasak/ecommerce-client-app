export interface Billboard {
  id: number;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  billboard: Billboard;
}

export interface Product {
  id: number;
  category: Category;
  name: string;
  slug: string;
  price: number;
  isFeatured: boolean;
  isNew: boolean;
  isSale: boolean;
  size: Size;
  color: Color;
  description: string;
  images: Image[];
}

export interface Size {
  id: number;
  name: string;
  value: string;
}

export interface Color {
  id: number;
  name: string;
  value: string;
}

export interface Image {
  id: number;
  url: string;
  alt: string;
}
