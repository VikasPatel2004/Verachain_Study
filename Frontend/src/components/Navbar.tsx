'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center mt-8 z-[100]">
      <div className="w-[90%] bg-gradient-to-r from-white/80 via-blue-100/70 to-white/80 backdrop-blur-xl text-gray-900 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] px-6 py-1 flex justify-between items-center relative border border-blue-300/40 ring-1 ring-blue-200/30">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Verachain Logo"
            width={44}
            height={44}
            className="rounded-full hover:scale-110 transition-transform duration-300 drop-shadow-md"
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-[300px]">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-1.5 rounded-full bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow-sm"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {['Home', 'About'].map((label, idx) => (
            <Link
              key={idx}
              href={`/${label.toLowerCase()}`}
              className="relative group transition-colors duration-300 text-gray-800 hover:text-blue-600"
            >
              <span>{label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Animated Login Button */}
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="relative px-5 py-1.5 font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 border-none rounded-full overflow-hidden shadow-md group"
            >
              <motion.span
                layoutId="login-bg"
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"
              />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Login
              </span>
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-gradient-to-br from-white/90 to-blue-100/80 backdrop-blur-xl px-6 py-4 space-y-4 md:hidden rounded-b-3xl shadow-lg border-t border-blue-200/30"
            >
              {['Home', 'About'].map((label, idx) => (
                <Link
                  key={idx}
                  href={`/${label.toLowerCase()}`}
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  {label}
                </Link>
              ))}
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full text-left px-4 py-2 font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full overflow-hidden group relative shadow-md"
                >
                  <motion.span
                    layoutId="login-bg-mobile"
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Login
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}