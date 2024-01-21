import Link from "next/link"

type NewsDetailProps = {
  values : string[],
}

export default function NewsDetail({values} : NewsDetailProps) {
  return (
    <div className="w-[90%] md:w-[70%] md:border border-black mx-auto py-4 px-6 md:px-24 my-5">
      <button className="mb-6 "><Link href={'/main'}>&#8592; Go back</Link></button>

      <div className="flex flex-start py-3">
        <div className="w-[50px] h-[50px] rounded-3xl bg-slate-600 text-center m-3">T</div>
        <div className="p-3">
          <h1 className="text-lg md:text-2xl 2xl:text-4xl text-judson font-bold">{values[2]}</h1>
          <p className="text-sm text-gray-500 ">Posted on {values[4].slice(0,10)}</p>
        </div>
      </div>
      
      <h1 className="my-8 text-judson text-4xl ">{values[0]}</h1>
      <p className="text_poppins text-justify">
        {values[5]? values[5] : values[3]}
      </p>

      <p className="my-5">Link to original page : <Link className="underline text-gray-600" href={values[1]}>{values[1]}</Link></p>

    </div>
  )
}
