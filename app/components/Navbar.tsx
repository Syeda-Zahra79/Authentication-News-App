'use client';
import Link from "next/link"
import menu from '../../assets/hamburger-menu.svg'
import close from '../../assets/close.svg'
import Image from "next/image"
import { useState } from "react"
import { categories } from "@/constants";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
   
  return (
    <>
        <nav className="inline-block md:block">
            <Image src={menu} alt="Menu" onClick={() => setMenuOpen(true)} className="inline md:hidden cursor-pointer"
            width={25} height={25} />
            {menuOpen &&  <div className="bg-white w-[60%] border-l border-black h-screen top-0 right-0 z-10 fixed ease-in-out" >
                <Image src={close} alt="Menu" onClick={() => setMenuOpen(false)} className="inline md:hidden cursor-pointer"
                width={35} height={35} />
                <ul>
                    {categories.map((item, index)=>  <li key={index} className="text-xl py-2 text-judson text-center">
                        <Link href={`/main/${item}`}>
                            {item}
                        </Link>
                        <hr />
                    </li>)}
                </ul>
            </div>}
            <ul className="list-none md:flex justify-evenly px-20 text_baskerville py-5 md:text-2xl text-xl flex-wrap hidden">
              
                <li className="px-5 md:px-0">
                    <Link href={'/main/latest'}>
                        Latest
                    </Link>
                </li>
                <li className="px-5 md:px-0">
                    <Link href={'/main/national'}>
                        National
                    </Link>
                </li>
                <li className="px-5 md:px-0">
                    <Link href={'/main/sports'}>
                        Sports
                    </Link>
                </li>
                <li className="px-5 md:px-0">
                    <Link href={'/main/entertainment'}>
                        Entertainment
                    </Link>
                </li>
                <li className="px-5 md:px-0">
                    <Link href={'/main/technology'}>
                        Technology
                    </Link>
                </li>
            </ul>
        </nav>
        <hr className="w-[90%] m-auto bg-slate-600" />
    </>
  )
}

