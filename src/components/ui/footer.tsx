"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-16 px-4 bg-transparent border-t-[4px] border-dashed border-[#2d2d2d] mt-12 relative overflow-hidden">
      {/* Hand-drawn decoration */}
      <div className="absolute top-8 right-10 opacity-30 rotate-12 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50 Q 50 10 90 50 T 10 50" stroke="#2d2d2d" strokeWidth="3" fill="transparent" />
          <path d="M40 30 L60 70 M60 30 L40 70" stroke="#2d2d2d" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 group cursor-pointer hover:rotate-1 transition-transform">
            <div className="h-14 w-14 rounded-wobbly border-[3px] border-[#2d2d2d] bg-[#fff9c4] flex items-center justify-center text-[#2d2d2d] font-heading font-black text-2xl shadow-[4px_4px_0px_0px_#2d2d2d] group-hover:bg-[#ff4d4d] group-hover:text-white transition-colors rotate-3">
              ND
            </div>
            <div>
              <h3 className="text-3xl font-heading font-black text-[#2d2d2d] tracking-tight hover:underline decoration-wavy decoration-[#ff4d4d]">NEURODEV.IN</h3>
              <p className="text-lg font-sans font-bold text-[#ff4d4d]">Advancing AI Engineering</p>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/" className="text-xl font-heading font-bold text-[#2d2d2d] hover:text-[#ff4d4d] hover:line-through transition-colors">HOME</Link>
            <Link href="/about" className="text-xl font-heading font-bold text-[#2d2d2d] hover:text-[#ff4d4d] hover:line-through transition-colors">ABOUT US</Link>
            <a href="https://chaursia.in" target="_blank" rel="noopener noreferrer" className="text-xl font-heading font-bold text-[#2d2d2d] hover:text-[#ff4d4d] hover:line-through transition-colors border-[2px] border-[#2d2d2d] px-3 py-1 rounded-wobbly shadow-[2px_2px_0px_0px_#2d2d2d] bg-white -rotate-2">PORTFOLIO</a>
          </div>
        </div>

        <div className="pt-8 border-t-[3px] border-[#2d2d2d] flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 border-[2px] border-[#2d2d2d] rounded-wobbly rotate-2">
            <p className="text-[#ff4d4d] font-heading font-bold">Keep exploring!</p>
          </div>
          <p className="text-lg font-sans font-bold text-[#2d2d2d]">
            © {new Date().getFullYear()} NEURODEV INFRASTRUCTURE
          </p>
          <p className="text-lg font-heading font-bold text-[#2d5da1] -rotate-1 bg-[#e5e0d8] px-3 py-1 rounded-wobbly border-2 border-[#2d2d2d]">
            Built for Pioneers
          </p>
        </div>
      </div>
    </footer>
  );
};
