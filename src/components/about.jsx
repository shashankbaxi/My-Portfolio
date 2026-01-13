import React from "react";
import aboutImg from "../assets/images/kid-2.jpg";
<img loading="lazy" decoding="async" />;

const About = () => {
  return (
    <section
      id="about"
      className="fly-section bg-slate-900 py-24 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center md:justify-start">
          {/* Glow */}
          <div
            className="absolute -inset-6 rounded-full
               bg-indigo-500/20 blur-3xl"
          ></div>

          {/* Image */}
          <img
            src={aboutImg}
            alt="About illustration"
            className="
    relative
    w-72 md:w-[360px]
    rounded-xl
    animate-float
    transition-transform duration-300
    hover:scale-105
    shadow-[0_20px_40px_rgba(0,0,0,0.4)]
  "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>

          <p className="text-slate-300 leading-relaxed">
            I am Shashank Baxi, a motivated Frontend Developer and Data Science
            student. I enjoy building responsive and interactive web
            applications using modern technologies like React and Tailwind CSS.
          </p>

          <p className="text-slate-400 leading-relaxed mt-4">
            I have a basic foundation in Java, which supports my understanding
            of programming logic and backend concepts. My goal is to grow into a
            full-stack developer by working on real-world projects, improving
            code quality, and continuously expanding my technical skill set.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
