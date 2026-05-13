import React from "react";

const skillGroups = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Responsive Design",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Vite"],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Time Management", "Fluent English", "Teamwork"],
  },
  {
    title: "Databases",
    skills: ["MongoDB"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="reveal bg-slate-950 py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Tech Skills
        </h2>

        {/* RESPONSIVE FLEX LAYOUT */}
        <div className="flex flex-wrap justify-between gap-10">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="
                w-full
                sm:w-[47%]
                lg:w-[17%]
                min-w-[220px]
              "
            >
              {/* TITLE */}
              <h3 className="text-2xl font-semibold text-white mb-5">
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="space-y-4">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="
                      bg-slate-800/90
                      border border-slate-700
                      rounded-xl
                      px-5 py-3
                      text-slate-300
                      text-[17px]
                      backdrop-blur-sm

                      hover:-translate-y-1
                      hover:scale-[1.03]
                      hover:border-indigo-400
                      hover:text-white
                      hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]

                      transition-all duration-300
                    "
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
