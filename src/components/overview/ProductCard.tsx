import Image from "next/image";
import Link from "next/link";
import React from "react";
import NameSeparator from "../NameSeparator";
import { Product } from "@/app/types/productType";


interface ProductCardProps {
   data:Product
}
const ProductCard: React.FC<ProductCardProps> = ({data}) => {
   return (
      <div className="bg-[#543a2d] w-[20rem] rounded-2xl overflow-hidden ">
         <Link href ={`/product/${data.slug}`} className="aspect-square relative block ">
            <Image src={data.image} fill alt="product" />
         </Link>
         <div className="bg-[#6b5449] p-4 flex items-center justify-center gap-[1rem]">
            <p className="font-bold">{data.type}</p>
            <NameSeparator /> 
            <p>{data.rostingtype}</p>
         </div>
      </div>
   );
};

export default ProductCard;

