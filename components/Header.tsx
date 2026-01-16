import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xl">JT</span>
          </div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Jaya Travel</h1>
        </Link>
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-blue-100 transition">Home</Link>
          <Link href="/#destinations" className="hover:text-blue-100 transition">Destinations</Link>
          <Link href="/about" className="hover:text-blue-100 transition">About</Link>
        </nav>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition">
          Book Now
        </button>
      </div>
    </header>
  );
}
