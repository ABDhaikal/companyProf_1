import { getproducts } from "@/app/api/getproducts";
import ProductCard from "@/components/overview/ProductCard";
import React from "react";

const ProductList = async () => {
   const data = await getproducts();
   return (
      <div className="contaiener flex flex-col items-center justify-center my-[2rem]">
         <div className="grid gird-cols-1 gap-[1rem] md:gap-[2rem] md:grid-cols-3 lg:grid-cols-3">
            {data.map((product) => (
               <ProductCard key={product.slug} data={product} />
            ))}
         </div>
      </div>
   );
};

export default ProductList;
