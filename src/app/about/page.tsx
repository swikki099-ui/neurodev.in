"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/ui/footer";
import { Cpu, Users, Globe, Rocket, Shield, Heart } from "lucide-react";

export default function About() {
  const navItems = [
    { name: "Home", link: "/", icon: <Globe className="h-4 w-4" /> },
    { name: "Register", link: "/register", icon: <Users className="h-4 w-4" /> },
  ];

  return (
    <main className="relative min-h-screen w-full bg-transparent overflow-x-hidden pt-28">
      <FloatingNav navItems={navItems} />

      <div className="max-w-5xl mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 right-10 md:right-32 -rotate-12 hidden md:block"
          >
             <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" stroke="#ff4d4d" strokeWidth="4" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            className="text-6xl md:text-8xl font-heading font-black text-[#2d2d2d] mb-6 tracking-normal"
          >
            About <span className="text-[#2d5da1] underline decoration-wavy decoration-[#ff4d4d]">NeuroDev.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-[#2d2d2d] max-w-2xl mx-auto font-sans font-medium leading-relaxed bg-[#fff9c4] p-4 border-2 border-[#2d2d2d] rounded-wobbly shadow-[4px_4px_0px_0px_#2d2d2d] rotate-1"
          >
            We are a collective of AI engineers, researchers, and creators dedicated to building the next generation of intelligent software.
          </motion.p>
        </section>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-wobbly bg-[#e5e0d8] border-[4px] border-[#2d2d2d] text-[#2d2d2d] shadow-[8px_8px_0px_0px_#2d2d2d] relative -rotate-2 hover:rotate-0 transition-transform"
          >
            {/* Tape */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-black/10 rotate-3 z-10 backdrop-blur-sm" />
            
            <h2 className="text-4xl font-heading font-black mb-6 tracking-tight flex items-center gap-3">
              <span className="text-[#ff4d4d] text-5xl">*</span> Our Mission
            </h2>
            <p className="font-sans text-xl font-bold leading-relaxed">
              To democratize advanced AI engineering by providing a collaborative ecosystem where pioneers can learn, build, and ship production-grade AI applications together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex gap-4 items-start p-6 rounded-wobbly bg-white border-[3px] border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] rotate-1 hover:-rotate-1 transition-transform relative">
               <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#ff4d4d] border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_rgba(45,45,45,0.5)] z-20" />
              <div className="p-3 rounded-wobbly bg-[#fff9c4] border-2 border-[#2d2d2d] text-[#2d2d2d]">
                <Shield className="h-8 w-8" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#2d2d2d]">Transparency</h3>
                <p className="text-[#2d2d2d]/80 font-sans font-bold text-lg">Open-source at heart, community-driven by design.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-6 rounded-wobbly bg-white border-[3px] border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] -rotate-1 hover:rotate-1 transition-transform relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#2d5da1] border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_rgba(45,45,45,0.5)] z-20" />
              <div className="p-3 rounded-wobbly bg-[#e5e0d8] border-2 border-[#2d2d2d] text-[#2d2d2d]">
                <Heart className="h-8 w-8" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#2d2d2d]">Impact</h3>
                <p className="text-[#2d2d2d]/80 font-sans font-bold text-lg">Building tools that solve real-world problems using AI.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Do */}
        <section className="mb-32 relative">
          {/* Squiggly line decoration */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-12 hidden md:block">
            <svg viewBox="0 0 200 40" fill="none">
              <path d="M0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20" stroke="#2d5da1" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-black text-[#2d2d2d] mb-16 text-center">What We <span className="text-[#ff4d4d]">Build Together.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI Frameworks", icon: <Cpu className="h-10 w-10" />, desc: "High-performance libraries for agentic workflows.", bg: "bg-[#fff9c4]", rotate: "rotate-1" },
              { title: "Collaborative Research", icon: <Users className="h-10 w-10" />, desc: "Pushing the boundaries of LLM orchestration.", bg: "bg-[#e5e0d8]", rotate: "-rotate-2" },
              { title: "Global Network", icon: <Globe className="h-10 w-10" />, desc: "A connected community of experts across 50+ countries.", bg: "bg-white", rotate: "rotate-2" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-wobbly border-[3px] border-[#2d2d2d] shadow-[6px_6px_0px_0px_#2d2d2d] text-center flex flex-col items-center gap-6 group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] transition-all ${item.bg} ${item.rotate}`}
              >
                <div className="p-4 rounded-full border-[3px] border-dashed border-[#2d2d2d] text-[#2d2d2d] group-hover:rotate-12 transition-transform bg-white">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading font-black tracking-tight text-[#2d2d2d]">{item.title}</h3>
                <p className="text-[#2d2d2d]/80 font-sans font-bold text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-16 rounded-wobbly-md bg-white border-[4px] border-[#2d2d2d] text-[#2d2d2d] text-center shadow-[8px_8px_0px_0px_#2d2d2d] relative overflow-hidden -rotate-1"
        >
          {/* Paper texture overlay for the CTA */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          
          <h2 className="text-5xl md:text-6xl font-heading font-black mb-8 relative z-10 text-[#2d2d2d]">Ready to join the <span className="text-[#ff4d4d]">revolution?</span></h2>
          <Link
            href="/register"
            className="px-12 py-5 bg-[#ff4d4d] border-[3px] border-[#2d2d2d] text-white rounded-wobbly font-heading font-black text-3xl shadow-[4px_4px_0px_0px_#2d2d2d] inline-flex items-center gap-3 hover:bg-[#2d5da1] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all relative z-10"
          >
            Get Started
            <Rocket className="h-8 w-8" strokeWidth={2.5} />
          </Link>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}
