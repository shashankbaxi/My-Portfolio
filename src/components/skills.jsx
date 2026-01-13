import React from "react";

const skillGroups = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "Java(Basic)"],
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Vite"],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Time Management", "Fluent English", "Teamwork"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="reveal bg-slate-950 py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Tech Skills
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-white mb-4">
                {group.title}
              </h3>

              <div className="space-y-3">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-slate-800 border border-slate-700 rounded-lg
                               px-4 py-2 text-slate-300
                               hover:scale-105 hover:border-indigo-400
                               hover:shadow-[0_0_16px_rgba(99,102,241,0.35)]
                               transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
