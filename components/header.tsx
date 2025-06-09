"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useTheme } from "@/contexts/ThemeContext";
import { ShoppingCart, Menu } from "lucide-react";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export const Header = () => {
  
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

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
        <div className="flex items-center mr-6">
          <Image src={Logo} alt="Encasr Logo" className="h-8 w-auto" />
        </div>

        {/* Center: Brand Name */}
        <div className="text-xl font-bold uppercase tracking-widest text-[#e0d9ec] women:text-[#36454F]">
          Encasr
        </div>

        {/* Right: Sidebar toggle, Cart */}
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
