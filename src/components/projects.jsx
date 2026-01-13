import React from "react";
import travelImg from "../assets/images/travel.jpg";
import shoppingImg from "../assets/images/shopping.jpg";
<img loading="lazy" decoding="async" />;

const projects = [
  {
    title: "Travel Pace Website",
    description:
      "A responsive travel planning website that allows users to explore destinations, view travel information, and plan trips with a clean and user-friendly interface.",
    image: travelImg,
    demo: "https://travel-pace.vercel.app/",
    github: "https://github.com/shashankbaxi/TravelPace",
  },
  {
    title: "Dapper Cart E-Commerce",
    description:
      "A modern e-commerce application built with React and Tailwind CSS featuring product listing, cart functionality, and a smooth shopping experience.",
    image: shoppingImg,
    demo: "https://dapper-cart-mauve.vercel.app/",
    github: "https://github.com/shashankbaxi/DapperCart",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="reveal bg-slate-900 py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              className="
    bg-slate-800 border border-slate-700
    rounded-2xl p-6
    hover:border-indigo-400
    transition-all duration-300
    shadow-lg
  "
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover
                             hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-indigo-500 text-white rounded-lg
                               hover:bg-indigo-600 transition"
                  >
                    View Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-indigo-400
                               text-indigo-400 rounded-lg
                               hover:bg-indigo-400 hover:text-black transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
