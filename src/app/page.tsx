"use client"

import Link from "next/link"
import { ArrowRight, Code, Briefcase, Wrench, Users, Rocket, TrendingUp, Calendar, Image } from "lucide-react"

const eventTypes = [
  {
    title: "Hackathons",
    description: "Immersive coding marathons where innovation meets collaboration.",
    icon: Code,
    gradient: "from-[#14B8A6] to-[#0D9488]",
  },
  {
    title: "Corporate Events",
    description: "Professional gatherings designed to inspire and engage.",
    icon: Briefcase,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
  },
  {
    title: "Workshops",
    description: "Interactive learning experiences that empower participants.",
    icon: Wrench,
    gradient: "from-[#14B8A6] to-[#8B5CF6]",
  },
  {
    title: "Conferences",
    description: "Large-scale events bringing together thought leaders.",
    icon: Users,
    gradient: "from-[#8B5CF6] to-[#14B8A6]",
  },
  {
    title: "Product Launches",
    description: "Make a statement with buzz-worthy launch events.",
    icon: Rocket,
    gradient: "from-[#14B8A6] to-[#0D9488]",
  },
  {
    title: "Team Building",
    description: "Strengthen bonds with engaging team activities.",
    icon: TrendingUp,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-[#0A192F] via-[#1A1A1A] to-[#0A192F]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4 px-6 py-2 bg-[#2D2D2D]/60 backdrop-blur-sm rounded-full border border-[#14B8A6]/30">
              <p className="text-[#14B8A6] text-sm font-medium">Creating Memorable Experiences</p>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#14B8A6] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                Yunyt
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-6 font-light">
              Events & Prints, Crafted Perfectly
            </p>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              We transform visions into unforgettable experiences. From conceptualization to execution, 
              we handle every detail with precision and creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/events"
                className="group px-8 py-4 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-[#14B8A6]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Calendar size={20} />
                View Our Events
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/gallery"
                className="group px-8 py-4 bg-[#2D2D2D] border-2 border-[#8B5CF6] text-white rounded-full font-semibold hover:bg-[#8B5CF6]/10 hover:shadow-2xl hover:shadow-[#8B5CF6]/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Image size={20} />
                Explore Gallery
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From intimate workshops to large-scale conferences, we specialize in creating events that inspire and engage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => {
              const Icon = event.icon
              return (
                <div
                  key={index}
                  className="group relative bg-[#1A1A1A] p-6 rounded-2xl hover:bg-[#2D2D2D] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#14B8A6]/20 border border-white/5 hover:border-[#14B8A6]/30"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${event.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#14B8A6] transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${event.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A192F] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
              Why Choose Yunyt
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We bring expertise, creativity, and dedication to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2D2D2D] p-8 rounded-2xl hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#14B8A6]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center mb-6">
                <Calendar size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Expert Planning</h3>
              <p className="text-gray-400">
                Meticulous attention to detail ensures every aspect of your event is flawlessly executed from start to finish.
              </p>
            </div>

            <div className="bg-[#2D2D2D] p-8 rounded-2xl hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#8B5CF6]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Dedicated Team</h3>
              <p className="text-gray-400">
                Our experienced professionals work tirelessly to bring your vision to life with passion and precision.
              </p>
            </div>

            <div className="bg-[#2D2D2D] p-8 rounded-2xl hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#14B8A6]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#14B8A6] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-6">
                <Rocket size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Innovative Solutions</h3>
              <p className="text-gray-400">
                We leverage cutting-edge technology and creative strategies to deliver unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#14B8A6] rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B5CF6] rounded-full filter blur-3xl opacity-10"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's bring your vision to life. Get in touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events"
                  className="px-8 py-4 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-[#14B8A6]/50 transition-all duration-300 hover:scale-105"
                >
                  Explore Our Work
                </Link>
                <Link
                  href="/print-lab"
                  className="px-8 py-4 bg-[#2D2D2D] border-2 border-white/20 text-white rounded-full font-semibold hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-105"
                >
                  Visit Print Lab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}