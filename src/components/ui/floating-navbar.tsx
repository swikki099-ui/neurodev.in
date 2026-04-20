"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    if (current < 10) {
      setVisible(true);
    } else {
      if (diff < 0) {
        // Scrolling up
        setVisible(true);
      } else if (diff > 0) {
        // Scrolling down
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] items-center justify-center -rotate-1 hover:rotate-0 transition-transform",
          className
        )}
      >
        <div className="flex items-center justify-center gap-2 rounded-wobbly border-[3px] border-[#2d2d2d] bg-white px-3 py-2 shadow-[4px_4px_0px_0px_#2d2d2d]">
          {/* Nav items container */}
          <div className="flex items-center gap-1">
            {navItems.map((navItem, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center gap-1 rounded-wobbly px-4 py-2 text-lg font-heading font-bold text-[#2d2d2d] transition-all hover:bg-[#e5e0d8]"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block hover:underline decoration-wavy decoration-[#ff4d4d] underline-offset-4">{navItem.name}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-6 w-[3px] border-l-[3px] border-dashed border-[#2d2d2d] mx-1" />

          {/* CTA Button */}
          <Link href="/register" className="relative rounded-wobbly bg-[#fff9c4] border-2 border-[#2d2d2d] px-5 py-2 text-lg font-heading font-bold text-[#2d2d2d] shadow-[2px_2px_0px_0px_#2d2d2d] transition-all hover:bg-[#ff4d4d] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
            <span>Register</span>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
