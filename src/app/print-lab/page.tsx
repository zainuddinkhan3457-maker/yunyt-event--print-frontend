"use client"

import { Shirt, Coffee, Flag, Award, BookOpen, Package } from "lucide-react"

const products = [
  {
    title: "Custom T-Shirts",
    description: "Premium quality fabric with vibrant, long-lasting prints. Perfect for events, teams, and merchandise.",
    icon: Shirt,
    gradient: "from-[#14B8A6] to-[#0D9488]",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
    features: ["100% Cotton", "HD Printing", "Custom Designs"]
  },
  {
    title: "Branded Mugs",
    description: "Durable ceramic mugs with stunning graphics. Start every morning with your brand.",
    icon: Coffee,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=600&fit=crop",
    features: ["Dishwasher Safe", "11oz & 15oz", "Full Color Print"]
  },
  {
    title: "Event Banners",
    description: "Eye-catching banners that make a statement. Weather-resistant and professional quality.",
    icon: Flag,
    gradient: "from-[#14B8A6] to-[#8B5CF6]",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    features: ["Vinyl Material", "Any Size", "Indoor/Outdoor"]
  },
  {
    title: "Certificates & Awards",
    description: "Professional certificates and awards to recognize achievements and celebrate success.",
    icon: Award,
    gradient: "from-[#8B5CF6] to-[#14B8A6]",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    features: ["Premium Paper", "Custom Designs", "Foil Options"]
  },
  {
    title: "Business Cards",
    description: "Make a lasting first impression with professionally designed business cards.",
    icon: BookOpen,
    gradient: "from-[#14B8A6] to-[#0D9488]",
    image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=800&h=600&fit=crop",
    features: ["350gsm Stock", "Matte/Gloss Finish", "Fast Turnaround"]
  },
  {
    title: "Custom Packaging",
    description: "Branded packaging that elevates your product presentation and customer experience.",
    icon: Package,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    image: "https://images.unsplash.com/photo-1613243555978-0b67b61f2e7b?w=800&h=600&fit=crop",
    features: ["Custom Sizes", "Eco-Friendly", "Branded Design"]
  }
]

export default function PrintLabPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#1A1A1A] to-[#2D2D2D]">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent">
            Your Brand, Your Style
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium printing services for all your branding needs. From merchandise to marketing materials, we deliver quality that speaks volumes.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <div
                  key={index}
                  className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8B5CF6] transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#2D2D2D] text-gray-300 text-sm rounded-full border border-white/10 group-hover:border-[#8B5CF6]/30 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300">
                      Get Quote
                    </button>
                  </div>

                  {/* Hover Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg">
              Simple, fast, and professional - from concept to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Choose Product", desc: "Select from our wide range of products" },
              { step: "02", title: "Custom Design", desc: "Upload your design or work with our team" },
              { step: "03", title: "Review & Approve", desc: "We send you a proof for approval" },
              { step: "04", title: "Fast Delivery", desc: "Receive your high-quality prints" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0A192F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Print Your Vision?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get in touch and let's discuss your printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#14B8A6] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/50 transition-all duration-300 hover:scale-105">
              Request Quote
            </button>
            <button className="px-10 py-4 bg-[#2D2D2D] text-white rounded-full font-semibold hover:bg-[#3D3D3D] transition-all duration-300 hover:scale-105 border border-white/10">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
