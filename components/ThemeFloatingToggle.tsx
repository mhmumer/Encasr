"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

export const ThemeFloatingToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isMen = theme === "men";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Gender Theme"
      className={`
        fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full
        flex items-center justify-center
        transition-all duration-500 ease-in-out
        backdrop-blur-xl shadow-xl overflow-hidden
        border hover:scale-105 active:scale-95 group
        ${
          isMen
            ? "bg-blue-200/10 border-blue-500/50"
            : "bg-pink-200/10 border-pink-400/50"
        }
      `}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isMen ? "men" : "women"}
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotate: 15 }}
          transition={{ duration: 0.3 }}
          className={`text-xl font-semibold ${
            isMen ? "text-blue-400" : "text-pink-600"
          }`}
        >
          {isMen ? "♂" : "♀"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};
