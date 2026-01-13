import React from "react";
import contactImg from "../assets/images/kid-3.jpg";
<img loading="lazy" decoding="async" />;

const Contact = () => {
  return (
    <section
      id="contact"
      className="fly-section bg-slate-900 py-24 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center md:justify-start">
          {/* Glow effect */}
          <div
            className="absolute -inset-6 rounded-full
                       bg-indigo-500/20 blur-3xl"
          ></div>

          {/* Image */}
          <img
            src={contactImg}
            alt="Contact illustration"
            className="
    relative
    w-64 md:w-[320px]
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Contact Me
          </h2>

          <div
            className="bg-slate-800 border border-slate-700 rounded-xl
                       p-8 md:p-10 shadow-lg"
          >
            <p className="text-slate-300 leading-relaxed max-w-2xl mb-8">
              I’m open to Frontend Developer, React Developer, and potentially a
              junior Full Stack Developer opportunities. Feel free to reach out
              — I’d be happy to connect.
            </p>

            <div className="space-y-4 text-slate-300">
              <div>
                <span className="font-medium text-white">Email:</span>{" "}
                <a
                  href="mailto:shashankbaxi2003@gmail.com"
                  className="text-indigo-400 hover:underline"
                >
                  shashankbaxi2003@gmail.com
                </a>
              </div>

              <div>
                <span className="font-medium text-white">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  linkedin.com/in/shashank-baxi
                </a>
              </div>

              <div>
                <span className="font-medium text-white">GitHub:</span>{" "}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  github.com/shashankbaxi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
