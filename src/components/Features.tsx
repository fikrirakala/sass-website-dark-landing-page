import React from "react";
import Feature from "./Feature";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export default function Features() {
  return (
    <div className="bg-black py-20 text-white">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-5xl font-bold tracking-tighter md:text-6xl">
            Everything you need
          </h2>
          <p className="mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1024px] flex-col gap-4 md:flex-row">
          {features.map((feature) => (
            <Feature
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
