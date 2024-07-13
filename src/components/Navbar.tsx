import React from "react";
import logo from "@/assets/images/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/icons/menu.svg";

export default function Navbar() {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="flex items-center justify-between py-4">
          <div className="relative">
            <div className="absolute bottom-0 top-2 w-full bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] blur-md"></div>
            <Image src={logo} alt="Saas logo" className="relative h-12 w-12" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 md:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden items-center gap-6 text-white/60 md:flex">
            <a href="#" className="transition hover:text-white">
              About
            </a>
            <a href="#" className="transition hover:text-white">
              Features
            </a>
            <a href="#" className="transition hover:text-white">
              Updates
            </a>
            <a href="#" className="transition hover:text-white">
              Help
            </a>
            <a href="#" className="transition hover:text-white">
              Customers
            </a>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-4 font-medium text-black transition hover:bg-white/90"
            >
              Get for free
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
