import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">JT</span>
            </div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Jaya Travel</h1>
          </div>
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#" className="hover:text-blue-100 transition">Home</a>
            <a href="#destinations" className="hover:text-blue-100 transition">Destinations</a>
            <a href="#about" className="hover:text-blue-100 transition">About</a>
          </nav>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition">
            Book Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-white py-20 border-b">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
            YOUR DREAM JOURNEY AWAITS
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Explore the World with <span className="text-blue-600">Jaya Travel</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Discover breathtaking destinations, create unforgettable memories, and experience the adventure of a lifetime with our curated travel packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 shadow-lg transition">
              Explore Destinations
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition">
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Why Choose Jaya Travel</h3>
            <p className="text-slate-600 max-w-xl mx-auto">We provide exceptional travel experiences with personalized service and unbeatable value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🌍", title: "Global Destinations", desc: "Access to 500+ stunning destinations across all continents." },
              { icon: "🛡️", title: "Safe & Secure", desc: "24/7 support and comprehensive travel insurance for peace of mind." },
              { icon: "💰", title: "Best Prices", desc: "Competitive pricing with flexible payment options and exclusive deals." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Popular Destinations</h3>
            <p className="text-slate-600 max-w-xl mx-auto">Explore our most sought-after travel destinations around the globe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Bali, Indonesia", price: "$899", color: "from-blue-400 to-blue-600", image: "/bali.jpg" },
              { name: "Paris, France", price: "$1,299", color: "from-pink-400 to-red-600", image: "/paris.jpg" },
              { name: "Tokyo, Japan", price: "$1,499", color: "from-purple-400 to-indigo-600", image: "/tokyo.jpg" }
            ].map((dest, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className={`h-56 bg-gradient-to-br ${dest.color} relative`}>
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{dest.name}</h4>
                  <p className="text-blue-600 font-bold mb-4">Starting from {dest.price}</p>
                  <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 -z-10"></div>
            <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Ready for Your Next Adventure?</h3>
            <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">Join 10,000+ happy travelers and start planning your dream vacation today.</p>
            <button className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-50 shadow-lg transition">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">JT</span>
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Jaya Travel</span>
          </div>
          <p className="text-slate-400 mb-8">Making your travel dreams come true since 2010.</p>
          <div className="flex justify-center gap-8 text-slate-400 mb-8">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Destinations</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
          <p className="text-slate-500 text-sm">&copy; 2024 Jaya Travel & Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
