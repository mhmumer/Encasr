"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { UserCog, Heart } from "lucide-react";

export const ThemeFloatingToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isMen = theme === "men";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`
        fixed bottom-4 right-4 z-50 w-[4rem] h-[4rem] rounded-full
        flex items-center justify-center
        transition-all duration-500 ease-in-out
        backdrop-blur-2xl shadow-2xl overflow-hidden
        border border-transparent hover:scale-110 active:scale-95 group
        ${
          isMen
            ? "bg-gradient-to-br from-blue-400/20 via-blue-200/10 to-white/10 border-blue-300/40"
            : "bg-gradient-to-br from-pink-400/20 via-pink-300/10 to-white/10 border-pink-300/40"
        }
      `}
    >
      {/* Glow layer */}
      <div
        className={`absolute inset-0 blur-xl opacity-40 rounded-full transition-all duration-500 ${
          isMen
            ? "bg-gradient-to-br from-blue-500 via-sky-300 to-white"
            : "bg-gradient-to-br from-pink-500 via-pink-300 to-white"
        }`}
      />

      {/* Icon layer */}
      <span className="relative z-10 transition-transform duration-300 scale-100 group-hover:scale-110">
        {isMen ? (
          <UserCog className="w-6 h-6 text-blue-300 group-hover:text-blue-100" />
        ) : (
          <Heart className="w-6 h-6 text-pink-400 group-hover:text-pink-200" />
        )}
      </span>
    </button>
  );
};
