import Image from "next/image";

const ServiceOverview = () => {
  return (
    <section className='container m-auto flex flex-col justify-center items-center'>
      <h2 className="title text-5xl my-10">Services</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
        <CardSerf imgsrc="tool" title="equipment" />
        <CardSerf imgsrc="coff" title="type of coffee" />
        <CardSerf imgsrc="bean" title="beans variant" />
        <CardSerf imgsrc="bread" title="pastry" />
      </div>
      </section>
  )
}

export default ServiceOverview

interface CardServProps {
  imgsrc: string;
  title: string;
}


 const CardSerf: React.FC<CardServProps> = ({imgsrc, title}) => {
  return (
    <div className="w-[170px] h-[225px] flex flex-col rounded-4xl justify-between p-[2.5rem] px-[2rem] bg-[#54372B] items-center">
      <Image src={`/service/${imgsrc}.svg`} alt="imgsrc" width={300} height={300} />
      <p className="text-[#f8e4be] text-[1rem]">{title}</p>
      

    </div>
  )
}

