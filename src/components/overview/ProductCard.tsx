import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
   return (
      <div className="bg-[#543a2d] w-[20rem] rounded-2xl overflow-hidden ">
         <Link href ="/" className="aspect-square relative block ">
            <Image src="/data3.svg" fill alt="product" />
         </Link>
         <div className="bg-[#6b5449] p-4 flex items-center justify-center gap-[1rem]">
            <p className="font-bold">Hello</p>
            <NameSeparator /> 
            <p>Type Of Product</p>
         </div>
      </div>
   );
};

export default ProductCard;


 const NameSeparator = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="1"
         height="24"
         viewBox="0 0 1 24"
         fill="none"
      >
         <path
            d="M0.5 0.885742V22.5324"
            stroke="url(#paint0_linear_220_10257)"
            strokeLinecap="round"
         />
         <defs>
            <linearGradient
               id="paint0_linear_220_10257"
               x1="0.866211"
               y1="-6.49976"
               x2="0.866211"
               y2="26.0002"
               gradientUnits="userSpaceOnUse"
            >
               <stop offset="0.161729" stopColor="#6D544A" stopOpacity="0" />
               <stop offset="0.520003" stopColor="#B59183" />
               <stop offset="0.990237" stopColor="#6D544A" stopOpacity="0" />
            </linearGradient>
         </defs>
      </svg>
   );
};
