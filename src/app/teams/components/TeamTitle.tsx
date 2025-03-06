import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamsTitle = () => {
   return (
      <section className="container m-auto flex flex-col  items-center justify-center px-8 md:px-20  ">
         <div className="flex flex-col justify-center items-center gap-5 relative ">
            <h1 className="title font-bold font-serif text-center text-6xl md:text-8xl capitalize ">
               Teams
            </h1>
            <p>
            "Where great minds meet, collaborate, and create extraordinary success together."
            </p>
         </div>
         <div className="h-full w-full absolute rounded-full bg-[#BAB8B8]/4 blur-3xl z-[-1]"></div>
         <div className="h-1/2 w-1/2 absolute rounded-full bg-white/10 blur-3xl z-[-1]"></div>
      </section>
   );
};

export default TeamsTitle;
