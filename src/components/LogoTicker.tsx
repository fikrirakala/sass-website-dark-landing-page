"use client";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export default function LogoTicker() {
  return (
    <div className="bg-black py-24">
      <div className="container">
        <h2 className="mb-8 text-center text-xl text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>

        <div className="relative mx-auto flex max-w-5xl overflow-hidden">
          <motion.div
            className="flex flex-none gap-20 pr-20"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {images.map((item) => (
              <Image
                src={item.src}
                key={item.alt}
                alt={item.alt}
                className="h-8 w-auto"
              />
            ))}
            {images.map((item) => (
              <Image
                src={item.src}
                key={item.alt}
                alt={item.alt}
                className="h-8 w-auto"
              />
            ))}
          </motion.div>
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,#000,transparent_10%_90%,#000)]"></div>
        </div>
      </div>
    </div>
  );
}
