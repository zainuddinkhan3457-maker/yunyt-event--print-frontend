"use client"

import { useState } from "react"
import { Linkedin, Twitter, Mail, Heart } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    funFact: "Coffee addict with a passion for turning ideas into reality ☕",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@yunyt.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Head of Events",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    funFact: "Organized 200+ events and counting! Event planning is my superpower 🎪",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@yunyt.com"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    funFact: "Designer by day, artist by night. I dream in gradients 🎨",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@yunyt.com"
    }
  },
  {
    name: "David Kumar",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    funFact: "Efficiency expert who loves solving complex logistical puzzles 📊",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@yunyt.com"
    }
  },
  {
    name: "Jessica Williams",
    role: "Print Lab Manager",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    funFact: "Quality perfectionist. Every print tells a story 🖨️",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "jessica@yunyt.com"
    }
  },
  {
    name: "Alex Thompson",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    funFact: "Data-driven marketer who loves creating buzz and building brands 📈",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@yunyt.com"
    }
  }
]

export default function TeamPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#1A1A1A] to-[#2D2D2D]">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] via-white to-[#8B5CF6] bg-clip-text text-transparent">
            Meet the Minds Behind Yunyt
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse team of passionate professionals dedicated to making your events unforgettable and your brand shine.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#14B8A6]/20 border border-white/10 hover:border-[#14B8A6]/50">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
                    
                    {/* Fun Fact Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#14B8A6] to-[#8B5CF6] flex items-center justify-center p-6 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-95' : 'opacity-0'}`}>
                      <div className="text-center">
                        <Heart className="mx-auto mb-4 text-white" size={32} />
                        <p className="text-white text-lg font-medium">
                          {member.funFact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#14B8A6] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{member.role}</p>

                    {/* Social Links */}
                    <div className="flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-110"
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-gray-400 hover:text-[#14B8A6] hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-110"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Top Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            We're always looking for talented individuals who are passionate about creating amazing experiences.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#14B8A6]/50 transition-all duration-300 hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We constantly push boundaries and embrace new ideas to deliver cutting-edge solutions." },
              { title: "Excellence", desc: "Quality is never an accident. We're committed to delivering nothing but the best." },
              { title: "Collaboration", desc: "Great things happen when talented people work together towards a common goal." }
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-[#1A1A1A] rounded-2xl border border-white/10 hover:border-[#14B8A6]/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
