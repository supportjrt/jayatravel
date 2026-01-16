import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-blue-600 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Our Story
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Discover the passion and dedication behind Jaya Travel. We've been crafting unforgettable journeys since 2010.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Mission
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At Jaya Travel, our mission is to provide more than just a trip; we aim to deliver life-changing experiences. We believe that travel has the power to broaden horizons, foster understanding, and create lasting memories.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We are committed to sustainable tourism and supporting local communities in every destination we visit. Our team of experts works tirelessly to ensure every detail of your journey is perfect.
            </p>
          </div>
          <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero-travel.jpg"
              alt="Travel Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Our Core Values</h3>
            <p className="text-slate-600 max-w-xl mx-auto">The principles that guide everything we do at Jaya Travel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We operate with honesty and transparency in all our dealings." },
              { title: "Excellence", desc: "We strive for the highest quality in every service we provide." },
              { title: "Passion", desc: "We love what we do, and it shows in the journeys we create." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <h4 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Meet Our Team</h3>
            <p className="text-slate-600 max-w-xl mx-auto">The experts who make your travel dreams a reality.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO" },
              { name: "Michael Chen", role: "Head of Operations" },
              { name: "Elena Rodriguez", role: "Senior Travel Consultant" },
              { name: "David Smith", role: "Destination Expert" }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-4xl font-bold">
                     {member.name.charAt(0)}
                   </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
