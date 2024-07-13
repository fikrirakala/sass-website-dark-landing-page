"use client";

import React, { useRef } from "react";
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "110% end"],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotateXProgress = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] text-white md:py-24">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-5xl font-bold tracking-tighter md:text-6xl">
            Intuitive interface
          </h2>
          <p className="mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="mx-auto mt-14 max-w-5xl"
          style={{
            opacity: opacityProgress,
            rotateX: rotateXProgress,
            transformPerspective: "800px",
          }}
        >
          <Image src={appScreen} alt="Product image" />
        </motion.div>
      </div>
    </div>
  );
}
