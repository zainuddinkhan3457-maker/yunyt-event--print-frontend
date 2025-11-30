"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, Clock, X } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    status: "completed",
    date: "March 15, 2024",
    location: "Convention Center, Downtown",
    attendees: 500,
    description: "A groundbreaking conference bringing together tech leaders, innovators, and entrepreneurs to discuss the future of technology. Featured keynote speakers from major tech companies and interactive workshops on AI, blockchain, and sustainable technology.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    highlights: ["15+ Expert Speakers", "20+ Tech Workshops", "Networking Sessions", "Innovation Awards"]
  },
  {
    id: 2,
    title: "CodeFest Hackathon",
    status: "ongoing",
    date: "December 1-3, 2024",
    location: "Tech Hub Arena",
    attendees: 300,
    description: "A 48-hour coding marathon where developers collaborate to build innovative solutions. Teams compete for prizes while working on real-world problems. Includes mentorship sessions, technical talks, and plenty of caffeine.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    highlights: ["48-Hour Challenge", "$50K Prize Pool", "Expert Mentors", "Free Food & Swag"]
  },
  {
    id: 3,
    title: "Corporate Leadership Retreat",
    status: "completed",
    date: "October 20-22, 2024",
    location: "Mountain Resort & Spa",
    attendees: 150,
    description: "An exclusive three-day retreat designed for C-level executives and senior managers. Focus on strategic planning, team building, and leadership development in a serene mountain setting.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    highlights: ["Leadership Workshops", "Team Activities", "Strategic Planning", "Networking Dinners"]
  },
  {
    id: 4,
    title: "Creative Design Workshop Series",
    status: "upcoming",
    date: "January 10-12, 2025",
    location: "Creative Arts Center",
    attendees: 80,
    description: "Three-day intensive workshop series covering UI/UX design, graphic design, and brand identity. Led by award-winning designers with hands-on projects and portfolio reviews.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    highlights: ["Hands-on Projects", "Portfolio Reviews", "Industry Tools", "Certificate of Completion"]
  },
  {
    id: 5,
    title: "Product Launch: NexGen Smart Home",
    status: "completed",
    date: "September 5, 2024",
    location: "Grand Ballroom, Luxury Hotel",
    attendees: 250,
    description: "An impressive product launch event featuring live demonstrations, interactive exhibits, and celebrity guest appearances. Unveiled the next generation of smart home technology to media and industry influencers.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    highlights: ["Live Demonstrations", "Media Coverage", "VIP Networking", "Product Giveaways"]
  },
  {
    id: 6,
    title: "Annual Team Building Day",
    status: "upcoming",
    date: "February 14, 2025",
    location: "Adventure Park",
    attendees: 200,
    description: "A full day of outdoor activities, team challenges, and fun competitions designed to strengthen team bonds and boost morale. Activities include obstacle courses, problem-solving challenges, and a company barbecue.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    highlights: ["Outdoor Activities", "Team Challenges", "BBQ Lunch", "Awards Ceremony"]
  },
  {
    id: 7,
    title: "AI & Machine Learning Conference",
    status: "upcoming",
    date: "March 20-21, 2025",
    location: "Tech Convention Center",
    attendees: 600,
    description: "Two-day conference focused on the latest developments in AI and machine learning. Features workshops, panel discussions, and networking opportunities with leading researchers and practitioners.",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&h=600&fit=crop",
    highlights: ["Expert Panels", "Hands-on Workshops", "Research Presentations", "Industry Networking"]
  },
  {
    id: 8,
    title: "Startup Pitch Competition",
    status: "ongoing",
    date: "December 15, 2024",
    location: "Innovation Hub",
    attendees: 400,
    description: "Emerging startups pitch their ideas to a panel of investors and industry experts. Winners receive funding, mentorship, and exposure to help launch their businesses.",
    image: "https://images.unsplash.com/photo-1559223607-a43c990a4e7b?w=800&h=600&fit=crop",
    highlights: ["$100K Investment Prize", "Investor Panel", "Pitch Coaching", "Media Exposure"]
  }
]

const statusColors = {
  completed: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  ongoing: "bg-[#14B8A6]/20 text-[#14B8A6] border-[#14B8A6]/30",
  upcoming: "bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30"
}

const statusLabels = {
  completed: "Completed",
  ongoing: "Ongoing",
  upcoming: "Upcoming"
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  return (
    <div className="min-h-screen pt-16 bg-[#0A192F]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#1A1A1A] to-[#2D2D2D]">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
            Our Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our past achievements, current happenings, and exciting future events. Each one crafted with precision and passion.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#14B8A6]/20 border border-white/10 hover:border-[#14B8A6]/50 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[event.status]}`}>
                      {statusLabels[event.status]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#14B8A6] transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#14B8A6]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#8B5CF6]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[#14B8A6]" />
                      <span>{event.attendees} Attendees</span>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-400 text-sm line-clamp-2">
                    {event.description}
                  </p>

                  <div className="mt-4 text-[#14B8A6] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
          <div 
            className="relative bg-[#1A1A1A] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#3D3D3D] transition-colors"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${statusColors[selectedEvent.status]}`}>
                  {statusLabels[selectedEvent.status]}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {selectedEvent.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#2D2D2D] p-4 rounded-xl">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-lg flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="font-semibold">{selectedEvent.date}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2D2D2D] p-4 rounded-xl">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-lg flex items-center justify-center">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="font-semibold">{selectedEvent.location}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2D2D2D] p-4 rounded-xl">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                      <Users size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Attendees</p>
                      <p className="font-semibold">{selectedEvent.attendees}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">About This Event</h3>
                <p className="text-gray-400 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Event Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedEvent.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}