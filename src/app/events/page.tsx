"use client"

import { Code, Briefcase, Wrench, Users, Rocket, TrendingUp } from "lucide-react"

const events = [
  {
    title: "Hackathons",
    description: "Immersive coding marathons where innovation meets collaboration. We create the perfect environment for developers to build, compete, and showcase their skills.",
    icon: Code,
    gradient: "from-[#14B8A6] to-[#0D9488]",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
  },
  {
    title: "Corporate Events",
    description: "Professional gatherings designed to inspire and engage. From annual meetings to company celebrations, we handle every detail with precision.",
    icon: Briefcase,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
  },
  {
    title: "Workshops",
    description: "Interactive learning experiences that empower participants with new skills and knowledge. Expert-led sessions in inspiring venues.",
    icon: Wrench,
    gradient: "from-[#14B8A6] to-[#8B5CF6]",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    title: "Conferences",
    description: "Large-scale events bringing together thought leaders and industry experts. World-class production, seamless execution, unforgettable experiences.",
    icon: Users,
    gradient: "from-[#8B5CF6] to-[#14B8A6]",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
  },
  {
    title: "Product Launches",
    description: "Make a statement with your new product. We create buzz-worthy launch events that capture attention and drive engagement.",
    icon: Rocket,
    gradient: "from-[#14B8A6] to-[#0D9488]",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
  },
  {
    title: "Team Building Activities",
    description: "Strengthen bonds and boost morale with engaging team activities. From outdoor adventures to creative challenges, we make teamwork fun.",
    icon: TrendingUp,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
  }
]

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#1A1A1A] to-[#2D2D2D]">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
            We Bring Ideas to Life
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From intimate workshops to large-scale conferences, we orchestrate events that inspire, engage, and create lasting memories.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const Icon = event.icon
              return (
                <div
                  key={index}
                  className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#14B8A6]/20 border border-white/10 hover:border-[#14B8A6]/50"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${event.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#14B8A6] transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Hover Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${event.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A192F] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss your event and bring your vision to life.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#14B8A6]/50 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}
