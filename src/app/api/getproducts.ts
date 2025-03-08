import axios from "axios";
import { Product } from "../types/productType";

export const getproducts = async () => {
   const { data } = await axios.get(
      `https://usablestage-us.backendless.app/api/data/products`
   );
   const output: Product[] = data;
   return output;
};
