import React, { Suspense } from "react";
import TeamCard from "./components/TeamCard";
import TeamsTitle from "./components/TeamTitle";
import Loader from "@/components/Loading/Loader";
const Teamspage =  () => {
   return (
      <section className="container m-auto">
         <TeamsTitle />
         <Suspense >
         <div className="flex flex-wrap justify-center md:w-[60%] m-auto gap-5 my-10 ">
            <TeamCard title="TopBrewer Handal" />
            <TeamCard title="Cashier TopBrew" />
            <TeamCard title="Tukang Parkir" />
         </div>
         </Suspense>
      </section>
   );
};

export default Teamspage;
