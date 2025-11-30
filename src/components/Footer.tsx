import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
              Yunyt
            </h2>
            <p className="text-gray-400 mb-4">
              Events & Prints, Crafted Perfectly. We bring your ideas to life through exceptional event management and premium printing services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#3D3D3D] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#3D3D3D] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#3D3D3D] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#3D3D3D] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/print-lab" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-200">
                  Print Lab
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-[#14B8A6] transition-colors duration-200">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Event Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="flex-shrink-0" />
                <span>hello@yunyt.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Yunyt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
