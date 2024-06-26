"use client";

import Image from "next/image";
import IconButton from "./icon-button";
import Currency from "@/components/ui/currency";
import { Expand, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/urunler/${data?.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-50 group cursor-pointer border-gray-50 rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-50 relative">
        <Image
          sizes="100%"
          fill
          className="rounded-lg aspect-square object-cover"
          src={data?.images?.[0]?.url}
          alt={data.name}
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => console.log("clicked")}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => console.log("clicked")}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
