'use client';

import { useState } from "react";
import Link from "next/link"; // ✅ Correct import for Next.js
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-purple-700 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎓 Grade 12 Memories</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/gallery" className="hover:text-yellow-300">Gallery</Link>
          <Link href="/videos" className="hover:text-yellow-300">Videos</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 px-4 pb-4 space-y-2">
          <Link href="/" onClick={toggleMenu} className="block hover:text-yellow-300">Home</Link>
          <Link href="/gallery" onClick={toggleMenu} className="block hover:text-yellow-300">Gallery</Link>
          <Link href="/videos" onClick={toggleMenu} className="hover:text-yellow-300">Videos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
