import Image from "next/image";
import React from "react";
import { Product } from "../../../types/productType";

interface BigTitleProps {
   data: Product;
}
const BigTitle: React.FC<BigTitleProps> = ({ data }) => {
   return (
      <div className="container m-auto flex justify-center">
         <section className=" grid grid-cols-1 lg:grid-cols-2 px-8 md:px-20 w-[90%] md:w-[70%] ">
            <div className="flex flex-col justify-center items-center gap-5 relative ">
               <h1 className="font-bold text-center text-6xl md:text-8xl capitalize ">
                  {data.name}
               </h1>
               <p className="text-center text-sm md:text-md font-thin">
                  {data.description}
               </p>
               <div className="h-full w-full absolute rounded-full bg-[#BAB8B8]/4 blur-3xl z-[-1]"></div>
               <div className="h-1/2 w-1/2 absolute rounded-full bg-white/10 blur-3xl z-[-1]"></div>
            </div>
            <div className="h-[400px] flex items-center justify-center ">
               <div className="aspect-square relative h-full ">
                  <Image
                     src={data.image}
                     alt="Product Image"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>
         </section>
      </div>
   );
};

export default BigTitle;
