"use client";

import { Suspense, useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Loading from "./Loading";
import { fetchNews } from "../utils";

export default function NewsPage() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
      const fetchData = async () => {
        const response = await fetchNews('general');
        setData(response)
    };
    fetchData();
  }, []);

  return (
    <>
        <Navbar />
        <div className="flex justify-evenly flex-col md:flex-row ">
          <Suspense fallback={<Loading />}>
            <Container results={data} />
          </Suspense>
          <Sidebar />
        </div>
    </>
  );
}
