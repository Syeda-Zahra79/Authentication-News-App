"use client";

import Link from "next/link";

interface NewsContainerProps {
  key: string;
  title: string;
  link: string;
  creator: string[] | null;
  description: string | null;
  pubDate: string;
  full_description: string | null | undefined;
  category: string[] | null;
}

export default function NewsContainer({
  key,
  title,
  link,
  creator,
  description,
  pubDate,
  full_description,
}: NewsContainerProps) {
  return (
    <>
      <article
        key={key}
        className="border border-black w-[90%] m-5 xs:[50%] md:w-[40%] 2xl:w-[30%] my-10 h-auto">
        <div className="flex justify-between text-xs text-gray-400 mb-4 mx-5 pt-5">
          <p>{pubDate.slice(0, 10)}</p>
          <p>
            {creator != undefined &&
              creator.length > 0 &&
              `Posted by ${creator[0]}`}
          </p>
        </div>

        <div className="px-5">
          <h1 className="text-2xl text-judson min-h-[100px]">
            {title?.length > 80 ? title?.slice(0, 80) + "..." : title}
          </h1>
          <br />
          <p className="h-[90px]">
            {description == undefined
              ? ""
              : description?.length > 100
              ? description?.slice(0, 100) + "..."
              : description}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            disabled={
              full_description == undefined && full_description == null && true
            }
            className="bg-gray-900 text-white font-semibold text_baskerville px-5 py-3 my-5 hover:bg-slate-600 cursor-pointer">
            <Link
              href={{
                pathname: "/news",
                query: {
                  title,
                  link,
                  creator,
                  description,
                  pubDate,
                  full_description,
                },
              }}>
              Read More
            </Link>
          </button>
        </div>
      </article>
    </>
  );
}
