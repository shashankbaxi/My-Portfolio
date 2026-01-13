import React from "react";

const Education = () => {
  return (
    <section id="education" className="reveal bg-slate-950 py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Education, Internship & Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Education
            </h3>

            <div className="relative border-l border-slate-700 pl-6 space-y-10">
              <div className="relative">
                <h4 className="text-lg text-white font-medium">
                  B.Tech – Computer Science (Data Science)
                </h4>
                <p className="text-slate-400">
                  Shri Shankaracharya Technical Campus
                </p>
                <p className="text-slate-500 text-sm">2022 – 2026</p>
              </div>

              <div className="relative">
                <h4 className="text-lg text-white font-medium">
                  Class XII – CBSE
                </h4>
                <p className="text-slate-400">Neeraj Public School</p>
                <p className="text-slate-500 text-sm">2021 – 2022</p>
              </div>
            </div>
          </div>

          {/* INTERNSHIP */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Internship
            </h3>

            <div className="relative border-l border-slate-700 pl-6 space-y-10">
              <div className="relative">
                <h4 className="text-lg text-white font-medium">
                  Data Analytics Intern
                </h4>
                <p className="text-slate-400">Deloitte Australia – Forage</p>
                <p className="text-slate-500 text-sm">Certificate:</p>
                <a
                  href="https://drive.google.com/file/d/1v2R_UApmflLVdhwL3eOjudrPfNzmIJeb/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Certifications
            </h3>

            <div className="relative border-l border-slate-700 pl-6 space-y-10">
              <div className="relative">
                <p className="text-slate-300">
                  Deloitte Australia – Data Analytics Job Simulation (Forage)
                </p>
                <a
                  href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_mq7NgBDGXq73RAxoN_1749535972936_completion_certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                >
                  View
                </a>
              </div>

              <div className="relative">
                <p className="text-slate-300">
                  Accenture UK – Developer & Technology Job Simulation (Forage)
                </p>
                <a
                  href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_mq7NgBDGXq73RAxoN_1741765662663_completion_certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                >
                  View
                </a>
              </div>

              <div className="relative">
                <p className="text-slate-300">
                  React JS Fundamentals – EdQuest
                </p>
                <a
                  href="https://drive.google.com/file/d/1izK9gljLpK7usP_ae9RClAk_Bylxhabj/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
