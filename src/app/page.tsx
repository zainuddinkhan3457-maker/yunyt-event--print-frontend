"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Target, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#1A1A1A] to-[#2D2D2D]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              Yunyt
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Events & Prints, Crafted Perfectly.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Transform your vision into reality with our exceptional event management and premium printing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/events"
                className="group px-8 py-4 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#14B8A6]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Explore Events
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/print-lab"
                className="group px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Visit Print Lab
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Yunyt is your trusted partner in creating unforgettable experiences and delivering high-quality print solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-[#2D2D2D] p-8 rounded-2xl hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#14B8A6]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center mb-6">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-400">
                To deliver exceptional event experiences and premium print solutions that exceed expectations and bring creative visions to life.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#2D2D2D] p-8 rounded-2xl hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#8B5CF6]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                <Sparkles size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-400">
                To be the leading provider of innovative event management and printing services, setting new standards in quality and creativity.
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#2D2D2D] p-8 rounded-2xl hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#14B8A6]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#14B8A6] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-6">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Values</h3>
              <p className="text-gray-400">
                Excellence, creativity, reliability, and customer satisfaction are at the core of everything we do. Your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              What We Offer
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From corporate events to custom merchandise, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Events Card */}
            <Link
              href="/events"
              className="group relative overflow-hidden bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-[#14B8A6]/50"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#14B8A6] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-3xl font-bold mb-4 text-white">Event Management</h3>
              <p className="text-gray-400 mb-6">
                From hackathons to corporate conferences, we organize events that leave lasting impressions. Professional planning, flawless execution.
              </p>
              <div className="flex items-center text-[#14B8A6] font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>

            {/* Print Lab Card */}
            <Link
              href="/print-lab"
              className="group relative overflow-hidden bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-white/10 hover:border-[#8B5CF6]/50"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-3xl font-bold mb-4 text-white">Print Lab</h3>
              <p className="text-gray-400 mb-6">
                Custom merchandise and print solutions for your brand. T-shirts, mugs, banners, and more - all crafted with precision and care.
              </p>
              <div className="flex items-center text-[#8B5CF6] font-semibold group-hover:gap-3 gap-2 transition-all">
                Explore Products
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}