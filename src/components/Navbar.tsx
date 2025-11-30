"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
              Yunyt
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              href="/print-lab"
              className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200"
            >
              Print Lab
            </Link>
            <Link
              href="/team"
              className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200"
            >
              Our Team
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white rounded-full hover:shadow-lg hover:shadow-[#14B8A6]/50 transition-all duration-300 hover:scale-105">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-300 hover:text-[#14B8A6] hover:bg-[#2D2D2D] rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 text-gray-300 hover:text-[#14B8A6] hover:bg-[#2D2D2D] rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-gray-300 hover:text-[#14B8A6] hover:bg-[#2D2D2D] rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/print-lab"
              className="block px-3 py-2 text-gray-300 hover:text-[#14B8A6] hover:bg-[#2D2D2D] rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Print Lab
            </Link>
            <Link
              href="/team"
              className="block px-3 py-2 text-gray-300 hover:text-[#14B8A6] hover:bg-[#2D2D2D] rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <button className="w-full mt-2 px-6 py-2 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white rounded-full hover:shadow-lg hover:shadow-[#14B8A6]/50 transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}