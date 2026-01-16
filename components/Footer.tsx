import Link from "next/link";

export default function Footer() {
  return (
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
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/#destinations" className="hover:text-white transition">Destinations</Link>
          <Link href="#" className="hover:text-white transition">Terms</Link>
          <Link href="#" className="hover:text-white transition">Privacy</Link>
        </div>
        <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Jaya Travel & Tours. All rights reserved.</p>
      </div>
    </footer>
  );
}
