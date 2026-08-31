'use client'
import Logo from '@/components/Helper/Logo'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { Navlinks } from '@/Constant/Constant'
import { link } from 'fs'
import { Download, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type NavProps = {
  openNav: () => void;
} 

const Nav = ({openNav}:NavProps) => {

  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler =()=>{
      if(window.scrollY >= 90) setNavBg(true)
      if(window.scrollY < 90) setNavBg(false)
    }

    window.addEventListener("scroll", handler)

    return ()=> window.removeEventListener("scroll", handler)
  },[])

  return (
  <div
    className={`fixed top-0 left-0 z-50 w-full h-[12vh] transition-all duration-200 ${navBg
        ? "dark:bg-gray-800 bg-white shadow-md"
        : "bg-transparent"
    }`}
  >
    <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        
        {/* LOGO */}
        <Logo/>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link,index)=>{
            return <Link key={index} href={link.href} className="dark:text-white text-black
            hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200">
              <p>{link.name}</p>
            </Link>
          })}
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">

          {/* Theme Toggler */}
          <ThemeToggler />

          {/* Burger Menu */}
          <MenuIcon onClick={openNav} 
          className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden" />
        </div>

      </div>
    </div>
  )
}

export default Nav