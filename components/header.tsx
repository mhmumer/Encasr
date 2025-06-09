"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Playfair_Display } from "next/font/google";
import { Lato } from "next/font/google";
import { Oswald } from "next/font/google";

// Load the font with weight 500
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowHeader(currentScroll < lastScrollY || currentScroll < 100);
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 shadow-md border border-white/20">
        {/* Left: Logo */}
        <div className="hidden md:flex items-center mr-6">
          <Image src={Logo} alt="Encasr Logo" className="h-8 w-auto" />
        </div>

        {/* Center: Brand Name */}
        <div
          className={`text-xl uppercase tracking-widest text-[#e0d9ec] women:text-[#36454F] ${lato.className}`}
        >
          Encasr
        </div>

        {/* Right: Cart + Menu */}
        <div className="flex items-center">
          <button className="p-2 hover:opacity-80" title="Cart">
            <ShoppingCart className="w-5 h-5 text-[#e0d9ec] women:text-[#36454F]" />
          </button>
          <button className="pl-2 hover:opacity-80" title="Open menu">
            <Menu className="w-5 h-5 text-[#e0d9ec] women:text-[#36454F]" />
          </button>
        </div>
      </div>
    </header>
  );
};
