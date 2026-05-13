'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/videos", label: "Videos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-purple-700" : "text-white"
          }`}
        >
          🎓 Grade 12
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-yellow-400 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/gallery"
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Gallery
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-purple-700" : "text-white"
          }`}
        >
          {isOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="block py-2 text-gray-700 hover:text-purple-700 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/gallery"
              onClick={toggleMenu}
              className="block py-3 text-center bg-yellow-500 text-purple-900 font-semibold rounded-lg"
            >
              View Gallery
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
