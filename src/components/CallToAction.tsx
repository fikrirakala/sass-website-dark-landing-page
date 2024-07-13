"use client";

import React, { useRef } from "react";
import HelixImage from "@/assets/images/helix2.png";
import EmojistarImage from "@/assets/images/emojistar.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export default function CallToAction() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div className="bg-black py-[72px] text-white md:py-24" ref={ref}>
      <div className="container relative">
        <motion.div style={{ translateY }}>
          <Image
            src={EmojistarImage}
            alt="Emojistar image"
            className="absolute -left-[120px] -top-[96px] hidden h-[200px] w-[200px] md:block lg:left-0"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt="Helix image"
            className="absolute -bottom-20 -right-[170px] hidden h-[225px] w-[225px] md:block lg:right-0"
          />
        </motion.div>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-5xl font-bold tracking-tighter md:text-6xl">
            Get instant access
          </h2>
          <p className="mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <form className="mt-10 flex flex-col justify-center gap-[10px] md:flex-row">
            <input
              type="email"
              className="h-12 rounded-lg bg-white/20 px-5 placeholder:text-[#9CA3AF] md:flex-1"
              placeholder="your@email.com"
            />
            <button className="h-12 rounded-lg bg-white px-5 font-medium text-black">
              Get access
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
