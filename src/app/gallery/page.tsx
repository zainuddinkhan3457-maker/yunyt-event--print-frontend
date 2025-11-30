"use client"

import { useState, useEffect } from "react"
import { X, ZoomIn, ArrowLeft } from "lucide-react"
import PrismaticBurst from "@/components/PrismaticBurst"

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    title: "Tech Innovation Summit 2024",
    category: "Conferences"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    title: "CodeFest Hackathon",
    category: "Hackathons"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    title: "Corporate Leadership Retreat",
    category: "Corporate Events"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    title: "Creative Design Workshop",
    category: "Workshops"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    title: "Product Launch Event",
    category: "Product Launches"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    title: "Team Building Activity",
    category: "Team Building"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&h=600&fit=crop",
    title: "AI Conference 2024",
    category: "Conferences"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1559223607-a43c990a4e7b?w=800&h=600&fit=crop",
    title: "Startup Pitch Night",
    category: "Corporate Events"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    title: "Annual Gala Dinner",
    category: "Corporate Events"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    title: "Innovation Workshop",
    category: "Workshops"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    title: "Tech Meetup Series",
    category: "Conferences"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    title: "Team Outing 2024",
    category: "Team Building"
  }
]

const categories = ["All", "Conferences", "Hackathons", "Corporate Events", "Workshops", "Product Launches", "Team Building"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  // Close modal with ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [selectedImage])

  return (
    <div className="min-h-screen pt-16 bg-[#0A192F]">
      {/* Hero Section with PrismaticBurst Background */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#1A1A1A] to-[#2D2D2D]">
        {/* PrismaticBurst Background */}
        <div className="absolute inset-0 opacity-30">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={1.5}
            speed={0.3}
            distort={1.0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={24}
            mixBlendMode="lighten"
            colors={['#14B8A6', '#8B5CF6', '#ffffff']}
          />
        </div>

        {/* Original gradient blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore moments captured from our events. Each image tells a story of success, creativity, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#0A192F] sticky top-16 z-40 border-b border-white/10 backdrop-blur-sm bg-[#0A192F]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white shadow-lg shadow-[#14B8A6]/30"
                    : "bg-[#2D2D2D] text-gray-300 hover:bg-[#3D3D3D] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-[#1A1A1A] border border-white/10 hover:border-[#14B8A6]/50 transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold mb-1">{image.title}</p>
                    <p className="text-[#14B8A6] text-sm">{image.category}</p>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white text-xs font-semibold rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal - Enhanced with Better Close Options */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Enhanced Close Button - Top Right */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-[#14B8A6]/50"
              aria-label="Close image"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Back Button - Top Left */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white font-medium"
              aria-label="Go back to gallery"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Gallery</span>
            </button>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-[#14B8A6] text-lg">{selectedImage.category}</p>
              <p className="text-gray-400 text-sm mt-2">Press ESC or click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}