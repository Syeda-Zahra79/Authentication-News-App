'use client';
import {useSearchParams } from "next/navigation";
import Sidebar from "../components/Sidebar";
import NewsDetail from "../components/NewsDetail";
import Navbar from "../components/Navbar";

export default function news() {
    const searchParams = useSearchParams()
    let values=[]
    for(const value of searchParams.values()) {
       values.push(value)
    }
   
  return (
    <>
        <Navbar />
        <div className="my-5 flex justify-around">
            <NewsDetail values={values}  />
            <Sidebar />
        </div>
    </>
  )
}
