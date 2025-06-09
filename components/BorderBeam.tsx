'use client'


import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Vanguard from "@/assets/vanguard.png";

export interface Card08Props {
    
    badge?: {
        text: string;
        variant: "pink" | "indigo" | "orange";
    };
    href?: string;
}

export default function Card08({
    
    
    badge = { text: "New", variant: "orange" },
    href = "#",
}: Card08Props) {
    return (
        <Link href={href} className="block w-full group">
  <div className="relative w-full h-[25vh]">
    <Image
      src={Vanguard}
      alt=""
      fill
      className="object-cover w-full h-full"
      sizes="100vw"
      priority
    />

    {/* Optional overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

    {/* Hover arrow or other controls */}
    <div className="absolute bottom-2 right-2">
      <div
        className={cn(
          "p-2 rounded-full",
          "bg-white/10 dark:bg-zinc-800/50",
          "backdrop-blur-md",
          "group-hover:bg-white/20 dark:group-hover:bg-zinc-700/50",
          "transition-colors duration-300 group"
        )}
      >
        <ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
      </div>
    </div>
  </div>
</Link>


    );
}
