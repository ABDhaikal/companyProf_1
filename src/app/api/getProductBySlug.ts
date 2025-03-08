import axios from "axios";
import { Product } from "../types/productType";
import { FC } from "react";

interface ProductSlug {
   slug: string;
}
export const getproductBySlug = async ({ slug }: ProductSlug) => {
   const { data } = await axios.get(
      `https://usablestage-us.backendless.app/api/data/products?where=%60slug%60%20%3D%20'${slug}'`
   );
   const output: Product[] = data;
   return output[0];
};
