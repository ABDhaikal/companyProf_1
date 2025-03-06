import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
   return (
      <nav className="container h-[5.5rem] flex items-center justify-center m-auto relative ">
         <div className="w-[90%] h-[90%] flex items-center justify-between">
            <div className="aspect-square h-[60%] md:h-full relative">
               <Image src={"/topBrewImg.svg"} alt="logo" fill />
            </div>

            <div className="flex items-center justify-between text-sm md:text-2xl">
               <ul className="flex gap-6">
                  <li>
                     <Link href="/">Home</Link>
                  </li>
                  <li>
                     <Link href="/product">Product</Link>
                  </li>
                  <li>
                     <Link href="/teams">Team</Link>
                  </li>
                  <li>
                     <Link href="/about">About</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
