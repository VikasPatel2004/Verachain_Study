'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Verachain
        </Link>
        <nav className="space-x-6 hidden md:flex">
          <Link href="/dashboard" className="hover:text-cyan-400 transition">Dashboard</Link>
          <Link href="/projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="/verify" className="hover:text-cyan-400 transition">Verify</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
        </nav>
        <div className="md:hidden">
          {/* Optional: Add mobile menu toggle here */}
        </div>
      </div>
    </header>
  );
}