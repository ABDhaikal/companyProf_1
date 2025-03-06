import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
   return (
      <section className="container m-auto grid grid-cols-1 lg:grid-cols-2 px-8 md:px-20 my-6">
         <div className="flex flex-col justify-center items-center gap-5 relative ">
            <h1 className="font-bold text-center text-6xl md:text-8xl capitalize ">
               TopBrew Coffee
            </h1>
            <p>"Brewing perfection, two big bean at a time."</p>
            <HeroButton />
            <div className="h-full w-full absolute rounded-full bg-[#BAB8B8]/4 blur-3xl z-[-1]"></div>
            <div className="h-1/2 w-1/2 absolute rounded-full bg-white/10 blur-3xl z-[-1]"></div>
         </div>

         <div className="flex items-center justify-center">
            <Image src="/HeroImg.svg" alt="hero" width={500} height={500} />
         </div>
      </section>
   );
};

export default Hero;

export const HeroButton = () => {
   return (
      <button className="px-9 py-3 hover:cursor-pointer bg-[#f7e1bc]/10 rounded-[49px] border-2 border-[#c0732a]  hover:border-[#e0a872] hover:brightness-110 justify-center items-center hover:scale-105 hover:shadow-2xl hover:shadow-yellow-900/80">
         <Link href="/product">
            <p className="text-[#f8e4be] text-2xl font-normal font-['Abel'] capitalize">
               catalog
            </p>{" "}
         </Link>
      </button>
   );
};
