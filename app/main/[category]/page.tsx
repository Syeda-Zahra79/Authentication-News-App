
'use client'
import Container from "@/app/components/Container";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { fetchNews } from "@/app/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Category() {
  const [data, setData] = useState([])
  const pathname = usePathname();
  const category = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchNews(category);
      setData(response)
    }
    fetchData()
  },[])
  return (
    <>
    <Navbar />
    <div className="flex justify-evenly">
      <Container results={data} />
      <Sidebar />
    </div>
</>
  )
}

