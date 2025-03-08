import React from "react";
import ProductCard from "./ProductCard";
import { getproducts } from "@/app/api/getproducts";

const ProductOverview = async() => {
      const data = await getproducts();
   return (
      <div className="contaiener flex flex-col items-center justify-center my-[2rem]">
         <h2 className="title text-5xl my-10">Product</h2>
         <div className="grid gird-cols-1 gap-[1rem] md:gap-[2rem] md:grid-cols-3 lg:grid-cols-3">
         {data.map((product) => (
               <ProductCard key={product.slug} data={product} />
            ))}
         </div>
      </div>
   );
};

export default ProductOverview;
