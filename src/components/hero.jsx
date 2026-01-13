import React from "react";
import profile from "../assets/images/kid.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black
                 flex items-center px-6 md:px-20"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT CONTENT */}
        <div className="space-y-6 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I’m <span className="text-indigo-400">Shashank Baxi</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
            Frontend Developer
          </h2>

          <p className="text-slate-400 leading-relaxed max-w-xl">
            Motivated Frontend Developer and Data Science student passionate
            about building responsive, interactive, and user-friendly web
            applications using modern technologies like React and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-indigo-500 text-white
                         font-medium hover:bg-indigo-600 transition"
            >
              Hire Me
            </a>

            <a
              href="/resume-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-indigo-400
                         text-indigo-400 font-medium hover:bg-indigo-400
                         hover:text-black transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profile}
            alt="Developer Illustration"
            className="
    w-80 md:w-[400px]
    md:-ml-16
    drop-shadow-[0_25px_45px_rgba(99,102,241,0.4)]
    animate-float
  "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


