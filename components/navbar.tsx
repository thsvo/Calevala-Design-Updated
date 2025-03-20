"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import logo from "@/public/logo.png"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/companies", label: "COMPANIES" },
    { href: "/services", label: "SERVICES" },
    { href: "/way-of-working", label: "WAY OF WORKING" },
    { href: "/about-us", label: "ABOUT US" },
  ]

  return (
    <div className="navbar bg-black/80 backdrop-blur-sm z-50 sticky top-0">
      <div className="navbar-start lg:pl-20 lg:pt-2">
        <Link href="/" className="flex items-center"> 
          <Image src={logo} alt="Calevala Interactive" width={100} height={100} className="h-auto" /> 
        </Link>
      </div>

      <div className="navbar-center">
        {/* Desktop menu */}
        <div className="hidden lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 ${
                isActive(link.href) ? "text-green-500 font-bold" : "text-yellow-400 hover:text-yellow-300"
              }`}
            >
              :: {link.label} ::
            </Link>
          ))}
        </div>
      </div>

      <div className="navbar-end">
        {/* Mobile menu */}
        <div className="lg:hidden">
          <button className="btn btn-ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {isMenuOpen && (
            <ul className="menu menu-sm absolute right-0 mt-3 p-2 shadow bg-black rounded-box w-52">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${isActive(link.href) ? "text-green-500 font-bold" : "text-yellow-400 hover:text-yellow-300"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

