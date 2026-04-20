"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TechnicalArsenal } from "@/components/ui/technical-arsenal";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { cn } from "@/lib/utils";
import { 
  Home as HomeIcon, 
  User, 
  Cpu, 
  Globe, 
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/#home", icon: <HomeIcon className="h-4 w-4" /> },
    { name: "Features", link: "/#features", icon: <Cpu className="h-4 w-4" /> },
    { name: "Community", link: "/#community", icon: <Globe className="h-4 w-4" /> },
  ];

  const placeholders = [
    "Enter your email to join the waitlist",
    "Be part of the AI coding revolution",
    "Collaborate with top AI developers",
    "neurodev.in is coming soon",
    "Join our community today",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff4d4d", "#2d2d2d", "#2d5da1"],
    });
    console.log("submitted");
  };

  return (
    <main className="relative min-h-screen w-full bg-transparent overflow-x-hidden">
      <FloatingNav navItems={navItems} />

      {/* Hero Section with Highlight Effect and Fade-out transition */}
      <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <HeroHighlight 
          containerClassName="h-screen w-full [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: [20, -5, 0], rotate: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto relative z-10"
          >
            {/* Hand-drawn decoration */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 hidden md:block"
            >
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50" stroke="#ff4d4d" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 10"/>
                <path d="M40 40L60 60M60 40L40 60" stroke="#ff4d4d" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-[#2d2d2d] mb-6 tracking-normal">
              Building the Future <br /> 
              <span className="text-[#ff4d4d] inline-block -rotate-2">
                Together.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#2d2d2d] mb-10 max-w-2xl font-sans font-medium">
              A community of developers, creators, and AI enthusiasts working together to push the boundaries of what&apos;s possible in coding and technology.
            </p>

            <div className="w-full max-w-md mx-auto relative p-2 bg-[#fff9c4] border-[3px] border-[#2d2d2d] rounded-wobbly shadow-[6px_6px_0px_0px_#2d2d2d] rotate-1" id="waitlist">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>

            <p className="mt-6 text-lg text-[#2d2d2d] font-sans font-bold flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-[#2d2d2d] rounded-full inline-block"></span>
              Join 500+ developers already on the waitlist.
              <span className="w-8 h-[2px] bg-[#2d2d2d] rounded-full inline-block"></span>
            </p>
          </motion.div>
        </HeroHighlight>
      </section>

      {/* Technical Arsenal Section (Replacing Why Join) */}
      <section id="features" className="relative py-24 px-4 overflow-hidden bg-transparent">
        <div className="relative z-20">
          <TechnicalArsenal />
        </div>
      </section>

      {/* Let's build together Section */}
      <CTASection />

      {/* Footer Addition */}
      <Footer />

      <BackgroundBeams className="opacity-10" />
    </main>
  );
}


