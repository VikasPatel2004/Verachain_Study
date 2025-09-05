'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center mt-6 z-50">
      <div className="w-[80%] bg-white text-gray-900 rounded-full shadow-md px-6  flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png" // ✅ Ensure this file exists in public/images/
            alt="Verachain Logo"
            width={64}
            height={64}
            className="rounded-full hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition font-medium">
            About
          </Link>

          {/* Animated Login Button */}
          <Link href="/login">
            <button className="relative px-6 py-2 font-medium text-blue-600 border border-blue-600 rounded-full overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-blue-600 transition-transform duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Login
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white px-4 pb-4 space-y-2 md:hidden rounded-b-full shadow-md">
            <Link href="/" className="block hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="block hover:text-blue-600 transition font-medium">
              About
            </Link>
            <Link href="/login">
              <button className="w-full text-left px-4 py-2 font-medium text-blue-600 border border-blue-600 rounded-full overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-blue-600 transition-transform duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Login
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}