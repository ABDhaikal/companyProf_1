import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductTitle = () => {
   return (
      <section className="container m-auto grid grid-cols-1 lg:grid-cols-2 px-8 md:px-20 my-6 ">
         <div className="flex flex-col justify-center items-center gap-5 relative ">
            <h1 className="font-bold text-center text-6xl md:text-8xl capitalize ">
               Product
            </h1>
            <p>
               Today's good mood is sponsored by coffee search for your coffee
               now
            </p>
            <div className="h-full w-full absolute rounded-full bg-[#BAB8B8]/4 blur-3xl z-[-1]"></div>
            <div className="h-1/2 w-1/2 absolute rounded-full bg-white/10 blur-3xl z-[-1]"></div>
         </div>
         <div className="h-[400px] flex items-center justify-center ">
            <div className="aspect-square relative h-full ">
               <Image
                  src="/coffeMachine.png"
                  alt="classic coffee machine"
                  fill
                  className="object-cover"
               />
            </div>
         </div>
      </section>
   );
};

export default ProductTitle;
