"use client";
import React, { useState } from "react";  // Added React import
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L1 12H4V21H20V12H23L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold">Nirvana Legal Society</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="hover:text-gray-400">
              About Us
            </Link>
            <Link href="/programs" className="hover:text-gray-400">
              Programs
            </Link>
            <Link href="/events" className="hover:text-gray-400">
              Events
            </Link>
            <Link href="/join" className="hover:text-gray-400">
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              href="#about"
              className="block text-gray-400 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="block text-gray-400 hover:text-white"
            >
              Programs
            </Link>
            <Link
              href="/events"
              className="block text-gray-400 hover:text-white"
            >
              Events
            </Link>
            <Link
              href="/join"
              className="block text-gray-400 hover:text-white"
            >
              Join Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
