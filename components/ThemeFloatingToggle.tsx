"use client";
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { User, UserRound } from "lucide-react";

export const ThemeFloatingToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isMen = theme === "men";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full backdrop-blur-lg bg-white/20 shadow-lg border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl
        text-blue-400 border-blue-500  hover:text-white
        women:text-pink-500 women:border-pink-300  women:hover:text-white"
    >
      {isMen ? <User className="w-6 h-6" /> : <UserRound className="w-5 h-5" />}
    </button>
  );
};
