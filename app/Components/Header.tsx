"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/assets/Logo.png";
import { FaBars, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-200 shadow-md px-4 sm:px-8">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}

        <Link className="bg-black p-1.5 rounded-xl" href="/">
          <Image
            width={28}
            height={28}
            src={Logo}
            alt="logo"
            className=""
          />
        </Link>

        {/* Burger icon (mobile only) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-2xl text-gray-700"
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex text-lg gap-10 items-center">
          <Link className="hover:text-blue-500 duration-200" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-500 duration-200" href="/projects">
            Projects
          </Link>
          <Link
            className="hover:text-blue-500 duration-200"
            href="/photography"
          >
            Photography
          </Link>
          <Link className="hover:text-blue-500 duration-200" href="/news">
            News
          </Link>
          <Link className="hover:text-blue-500 duration-200" href="/about">
            About
          </Link>
          <Link className="hover:text-blue-500 duration-200" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="md:flex gap-3 hidden  ml-4">
          <FaYoutube className="text-red-600 text-lg" />
          <FaLinkedin className="text-blue-500" />
          <FaFacebook className="text-blue-700" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-4 text-lg py-4 px-2 bg-gray-100 border-t border-gray-300">
          <Link onClick={toggleMenu} className="hover:text-blue-500" href="/">
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-blue-500"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-blue-500"
            href="/photography"
          >
            Photography
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-blue-500"
            href="/news"
          >
            News
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-blue-500"
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:text-blue-500"
            href="/contact"
          >
            Contact
          </Link>
          <div className="flex gap-3 pt-2">
            <FaYoutube className="text-red-600 text-lg" />
            <FaLinkedin className="text-blue-500" />
            <FaFacebook className="text-blue-700" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
