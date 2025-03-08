import Link from "next/link";
import BigTitle from "./components/BigTitle";
import StoryProduct from "./components/StoryProduct";
import { getproductBySlug } from "@/app/api/getProductBySlug";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { notFound } from "next/navigation";

const ProductDetailPage = async ({
   params,
}: {
   params: Promise<{ slug: string }>;
}) => {
   const slug = (await params).slug;

   const data = await getproductBySlug({ slug });
   if (!data) {
      return notFound();
   }

   return (
      <main>
         <BigTitle data={data} />
         <StoryProduct data={data} />
         <div className="container m-auto px[5%] md:px-[10%]">
            <Link
               href={`/product`}
               className="bg-[#f7e1bc]/10 rounded-[49px] border-2 border-[#c0732a] hover:border-[#e0a872] hover:brightness-110 justify-center items-center hover:scale-105 hover:shadow-2xl hover:shadow-yellow-900/80
          flex w-[150px] h-[50px] py-3hover:cursor-pointer m-6 "
            >
               back
            </Link>
         </div>
      </main>
   );
};

export default ProductDetailPage;
