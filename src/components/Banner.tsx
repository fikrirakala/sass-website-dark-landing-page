import React from "react";

export default function Banner() {
  return (
    <div className="bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] py-3 text-center">
      <div className="container">
        <p className="font-medium">
          <span className="hidden md:inline">
            Introducing a completely redesigned interface —{" "}
          </span>
          <a href="#" className="underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
}
