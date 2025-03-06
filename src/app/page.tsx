import Flying from "@/components/Flying/Flying";
import Hero from "@/components/Hero/Hero";
import AboutUsOverview from "@/components/overview/AboutUs";
import ProductOverview from "@/components/overview/Product";
import ServiceOverview from "@/components/overview/ServOvr";
import Image from "next/image";

export default function Home() {
   return (
      <div className="relative ">
         <main>
            <Hero />
            <AboutUsOverview />
            <ServiceOverview />
            <ProductOverview />
            <Flying/>
         </main>
         <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

         </footer>
      </div>
   );
}
