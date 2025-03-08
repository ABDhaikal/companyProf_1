import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsOverview = () => {
   return (
      <section className="container m-auto flex items-center justify-center  ">
         <div className="grid grid-cols-1 md:grid-cols-3  md:gap-10  p-8 my-12 mt-40 items-center justify-center relative bg-[#53362A] rounded-4xl w-[80%] md:w-[60%] ">
            <h2 className="title absolute top-0 translate-y-[-50%] right-0 text-5xl ">
               Our Story
            </h2>
            <Link
               href="/about"
               className="aspect-square  relative w-[200px] m-auto my-2 "
            >
               <Image
                  src="/topBrewImg.svg"
                  alt="logo TopBrew"
                  fill
                  className="object-center"
               />
            </Link>
            <div className="col-span-2 md:h-[300px] flex flex-col items-center justify-center text-center text-sm md:text-lg">
               <p className="  line-clamp-3 md:line-clamp-8">
                  Welcome to TopBrew, where every cup is crafted with care and
                  connection! Nestled in the heart of Yogyakarta, TopBrew was
                  born from a passion for exceptional coffee and the vibrant
                  community it inspires. What started as a vision for a warm,
                  welcoming space has grown into a haven for coffee lovers,
                  creators, and dreamers. At TopBrew, every sip tells a story,
                  and every visit becomes part of ours. Our beans are sourced
                  from the finest farms, meticulously roasted to perfection, and
                  brewed with love to bring out their bold, rich flavors. But
                  TopBrew is more than just a coffee shop; it’s a community hub
                  where ideas flow as freely as our signature brews. Whether
                  you're savoring a latte while exploring Yogyakarta’s culture,
                  catching up with friends, or finding a quiet corner to work,
                  TopBrew is here to make every moment special. From our cozy
                  interiors to our handcrafted beverages, every detail reflects
                  our commitment to quality and connection. Come for the coffee,
                  stay for the stories. Experience the perfect blend of flavor,
                  creativity, and community at TopBrew—your go-to coffee haven
                  in Yogyakarta. Shall we brew something special for you? 😉
               </p>

               <div className="grow w-full flex justify-end items-end ">
                  <Link href="/about" className="hover:underline">
                     more
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutUsOverview;
