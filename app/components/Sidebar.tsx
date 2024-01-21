import { categories } from "@/constants";
import Link from "next/link";


export default function Sidebar() {
  return (
    <div
      className="md:w-[20%] hidden border border-black mx-auto md:flex flex-col 
    bg-gray-100 my-5">
      {categories.map((item, index) => (
        <>   
          <Link className="text-2xl text-judson text-center p-4" href={`/main/${item}`}>
            <h3 key={index}>{item}</h3>
          </Link>
          <hr />
        </>
      ))}
    </div>
  );
}
