"use client";

import React from "react";
import ArrowWIcon from "@/assets/icons/arrow-w.svg";
import CursorImage from "@/assets/images/cursor.png";
import MessageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-clip bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-20 text-white">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000000_82%,#9560EB)] md:h-[768px] md:w-[1536px] lg:top-[calc(100%-110px)] lg:h-[1200px] lg:w-[2400px]"></div>

      <div className="container relative text-center">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="flex gap-3 rounded-lg border border-white/30 px-2 py-1"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE)] bg-clip-text text-transparent">
              Version 2.0 here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <h1 className="relative text-center text-7xl font-bold tracking-tighter md:text-9xl">
              One Task
              <br /> at a Time
            </h1>
            <motion.div
              className="absolute -bottom-10 -left-40 hidden md:block"
              drag
              dragSnapToOrigin
            >
              <Image src={CursorImage} alt="Cursor image" draggable={false} />
            </motion.div>
            <motion.div
              className="absolute -right-48 bottom-0 hidden md:block"
              drag
              dragSnapToOrigin
            >
              <Image src={MessageImage} alt="Message image" draggable={false} />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="mt-8 max-w-[448px] text-center text-xl">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
}
