import ProductCard from "@/components/overview/ProductCard";
import React from "react";

const ProductList = () => {
   return (
      <div className="contaiener flex flex-col items-center justify-center my-[2rem]">
         <div className="grid gird-cols-1 gap-[1rem] md:gap-[2rem] md:grid-cols-3 lg:grid-cols-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </div>
      </div>
   );
};

export default ProductList;
