"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Globe,
  User,
  Code
} from "lucide-react";

const LeftColumnItems = [
  {
    title: "AI-First Community",
    description: "Collaborate with developers specialized in LLMs, Computer Vision, and Generative AI.",
    icon: <Cpu className="h-8 w-8 text-[#2d2d2d]" strokeWidth={2.5} />
  },
  {
    title: "Open Source Research",
    description: "Join projects focused on pushing the boundaries of AI agentic coding.",
    icon: <Globe className="h-8 w-8 text-[#2d2d2d]" strokeWidth={2.5} />
  },
];

const RightColumnItems = [
  {
    title: "Mentorship & Growth",
    description: "Get guidance from experienced AI engineers and senior software architects.",
    icon: <User className="h-8 w-8 text-[#2d2d2d]" strokeWidth={2.5} />
  },
  {
    title: "Continuous Innovation",
    description: "Everything we build is driven by community and transparency.",
    icon: <Code className="h-8 w-8 text-[#2d2d2d]" strokeWidth={2.5} />
  },
];

export const TechnicalArsenal = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4 relative">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-heading font-black text-[#2d2d2d] mb-4 tracking-tight -rotate-1 inline-block relative">
          Why join 
          <span className="text-[#ff4d4d] ml-4 underline decoration-wavy decoration-[#2d2d2d]">neurodev.in?</span>
          {/* Hand-drawn underline/accent */}
          <svg className="absolute -bottom-4 -right-4 w-12 h-12 text-[#2d5da1] rotate-12" viewBox="0 0 100 100" fill="none">
            <path d="M20 80 L80 20 M80 20 L50 20 M80 20 L80 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </h2>
        <p className="text-[#2d2d2d] font-sans font-bold text-xl max-w-2xl mx-auto mt-6">
          We are building the most advanced AI engineering community in the world.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-wobbly bg-[#e5e0d8] border-[4px] border-[#2d2d2d] shadow-[8px_8px_0px_0px_#2d2d2d] rotate-1 hover:rotate-0 transition-transform relative"
        >
          {/* Tape decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 bg-black/5 -rotate-2 z-10 backdrop-blur-sm" />

          <div className="flex flex-col gap-8 relative z-10">
            {LeftColumnItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, x: -5 }}
                className="p-6 rounded-wobbly bg-white border-[3px] border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] flex flex-col gap-4 transition-transform relative"
              >
                {/* Thumbtack decoration on cards */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#ff4d4d] border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_rgba(45,45,45,0.5)] z-20">
                  <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/40"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-wobbly border-2 border-[#2d2d2d] bg-[#fff9c4] -rotate-3">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-black text-[#2d2d2d] tracking-tight">{item.title}</h3>
                </div>
                <p className="text-[#2d2d2d] text-lg font-sans font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-wobbly-md bg-white border-[4px] border-[#2d2d2d] shadow-[8px_8px_0px_0px_#2d2d2d] -rotate-1 hover:rotate-0 transition-transform relative"
        >
          {/* Tape decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 bg-black/5 rotate-2 z-10 backdrop-blur-sm" />

          <div className="relative z-10 flex flex-col gap-8">
            {RightColumnItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5, y: -5 }}
                className="p-6 rounded-wobbly bg-[#fff9c4] border-[3px] border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] flex flex-col gap-4 transition-transform relative"
              >
                {/* Thumbtack decoration on cards */}
                <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#2d5da1] border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_rgba(45,45,45,0.5)] z-20">
                  <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/40"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-wobbly border-2 border-[#2d2d2d] bg-[#e5e0d8] rotate-3">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-black tracking-tight text-[#2d2d2d]">{item.title}</h3>
                </div>
                <p className="text-[#2d2d2d] text-lg font-sans font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
