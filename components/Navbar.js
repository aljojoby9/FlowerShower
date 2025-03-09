'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold text-flower-purple-600">
              🌸 Flower Shower
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/" label="Home" />
            <NavLink href="/flowers" label="Flowers" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-flower-purple-500 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <MobileNavLink href="/" label="Home" />
          <MobileNavLink href="/flowers" label="Flowers" />
          <MobileNavLink href="/about" label="About" />
          <MobileNavLink href="/contact" label="Contact" />
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, label }) {
  return (
    <Link 
      href={href} 
      className="text-gray-600 hover:text-flower-purple-500 transition"
    >
      {label}
    </Link>
  )
}

function MobileNavLink({ href, label }) {
  return (
    <Link 
      href={href} 
      className="block py-2 text-gray-600 hover:text-flower-purple-500"
    >
      {label}
    </Link>
  )
} 