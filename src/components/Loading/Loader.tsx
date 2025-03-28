import React from "react";
const loader = () => {
   return (
      <div className="relative h-[300px] items-center flex justify-center">
      <div className="loader">
         <div className="container">
            <div className="coffee-header">
               <div className="coffee-header__buttons"></div>
               <div className="coffee-header__display"></div>
               <div className="coffee-header__details"></div>
            </div>
            <div className="coffee-medium">
               <div className="coffe-medium__exit"></div>
               <div className="coffee-medium__arm"></div>
               <div className="coffee-medium__liquid"></div>
               <div className="smoke one"></div>
               <div className="smoke two"></div>
               <div className="smoke three"></div>
               <div className="smoke four"></div>
               <div className="coffee-medium__cup"></div>
            </div>
         </div>
      </div>
      </div>
   );
};

export default loader;
