import NameSeparator from '@/components/NameSeparator'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Product } from '../../../types/productType'

interface StoryProductProps {
    data:Product
}
const StoryProduct:FC<StoryProductProps> = ({data}) => {
  return (
    <section className="container m-auto flex items-center justify-center  ">
    <div className="grid grid-cols-1 md:grid-cols-3  md:gap-10  p-8 my-12  items-center justify-center relative bg-[#53362A] rounded-4xl w-[80%] md:w-[60%] ">
       <div>
       <h2 className="title text-5xl text-center my-3 ">
          Coffee Story
       </h2>
        <div className='flex justify-center items-center gap-2'>
            <p>{data.type}</p>
            <NameSeparator />
            <p>{data.rostingtype}</p>
        </div>
       </div>

       <div className="col-span-2  flex flex-col items-center justify-center  text-sm md:text-md font-extralight">
          <p >
                {data.story}
          </p>

       </div>
    </div>
 </section>
  )
}

export default StoryProduct