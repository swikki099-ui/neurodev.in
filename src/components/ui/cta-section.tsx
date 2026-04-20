"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="community" className="py-24 px-4 bg-transparent border-t-[3px] border-b-[3px] border-dashed border-[#2d2d2d] relative my-12">
      <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#ff4d4d] text-white font-heading px-4 py-1 rotate-3 rounded-wobbly border-2 border-[#2d2d2d] shadow-[2px_2px_0px_0px_#2d2d2d] z-10 hidden md:block">
        Join the chaos!
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rotate-1"
        >
          <h2 className="text-5xl md:text-7xl font-heading text-[#2d2d2d] mb-6 leading-tight">
            Let&apos;s build <br />
            <span className="relative inline-block">
              together.
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#ff4d4d]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-[#2d2d2d] mb-10 max-w-lg font-sans">
            We&apos;re building the infrastructure for the next generation of AI developers. Join us on this journey to redefine coding.
          </p>

          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-4 p-4 bg-white border-[3px] border-[#2d2d2d] rounded-wobbly shadow-[4px_4px_0px_0px_#2d2d2d] -rotate-1 hover:rotate-1 transition-transform">
              <div className="p-3 rounded-wobbly bg-[#e5e0d8] border-2 border-[#2d2d2d]">
                <Mail className="h-6 w-6 text-[#2d2d2d]" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-sm font-heading font-bold text-[#ff4d4d] uppercase tracking-wide">Email Us</p>
                <p className="font-sans font-bold text-xl text-[#2d2d2d]">hello@neurodev.in</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white border-[3px] border-[#2d2d2d] rounded-wobbly shadow-[4px_4px_0px_0px_#2d2d2d] rotate-1 hover:-rotate-1 transition-transform">
              <div className="p-3 rounded-wobbly bg-[#e5e0d8] border-2 border-[#2d2d2d]">
                <Linkedin className="h-6 w-6 text-[#2d2d2d]" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-sm font-heading font-bold text-[#2d5da1] uppercase tracking-wide">Connect</p>
                <p className="font-sans font-bold text-xl text-[#2d2d2d]">linkedin.com/neurodev</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group p-10 md:p-12 rounded-wobbly-md bg-[#fff9c4] text-[#2d2d2d] overflow-visible border-4 border-[#2d2d2d] shadow-[8px_8px_0px_0px_#2d2d2d] -rotate-2 hover:rotate-0 transition-transform duration-300"
        >
          {/* Post-it tape decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-black/10 -rotate-3 z-10 backdrop-blur-sm" />
          
          <div className="relative z-10 flex flex-col items-start gap-6">
            <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Start the AI <br /> Revolution.
            </h3>
            <p className="font-sans text-xl leading-relaxed font-medium">
              Ready to push the boundaries? Join a community that prioritizes innovation, performance, and impact.
            </p>
            
            <Link 
              href="/register"
              className="mt-4 px-8 py-4 bg-white border-[3px] border-[#2d2d2d] text-[#2d2d2d] rounded-wobbly font-heading font-bold text-2xl flex items-center gap-3 hover:bg-[#ff4d4d] hover:text-white shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
            >
              Register Now
              <ArrowRight className="h-6 w-6" strokeWidth={3} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
