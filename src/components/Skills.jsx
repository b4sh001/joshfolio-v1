import React from "react";

function Skills() {
  return (
    <section className="bg-[#f5f5f5] text-black p-6 lg:py-[100px] lg:px-[160px]">
      <div className="flex flex-col  justify-center max-w-7xl mx-auto sm:flex-row ">
        <div className="section_title">Skills</div>
        <div className="flex flex-wrap justify-between section_content">
          <div className="mb-6">
            <div className="font-semibold text-base">Languages</div>
            <ul className="font-light">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript(ES6)</li>
              <li>PHP</li>
              <li>Liquid</li>
            </ul>
          </div>
          <div className="px-6 mb-6">
            <div className="font-semibold">Frameworks</div>
            <ul className="font-light">
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind</li>
              <li>Alpine</li>
              <li>Node</li>
            </ul>
          </div>
          <div className="mb-6">
            <div className="font-semibold">Tools</div>
            <ul className="font-light">
              <li>Chrome DevTools</li>
              <li>Git &amp; GitHub</li>
              <li>VS Code</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
