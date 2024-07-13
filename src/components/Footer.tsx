import React from "react";

import XIcon from "@/assets/icons/x.svg";
import InstagramIcon from "@/assets/icons/insta.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

export default function Footer() {
  return (
    <footer className="bg-black py-5 text-white/60">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <p>&copy; 2024 Your Company, Inc. All rights reserved</p>

          <div className="flex items-center gap-[10px]">
            <a href="#">
              <XIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <TiktokIcon />
            </a>
            <a href="#">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
