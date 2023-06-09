import React from "react";

function Projects() {
  function ProjectContentContainer() {
    return (
      <div className="mb-20">
        <div>
          <button className="mb-2 flex items-center space-x-2 group">
            <div className="font-semibold text-base">Landing Page</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-current text-cyan-600 transition-transform duration-500 ease-in-out group-hover:translate-x-2">
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <p>
            Small React project created during an interview process to browse
            and search surf videos via the YouTube API.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm border font-medium border-cyan-600 solid px-2">
            HMTL
          </div>
          <div className="text-sm border font-medium border-cyan-600 solid px-2">
            TailwindCSS
          </div>
          <div className="text-sm border font-medium  border-cyan-600 solid px-2">
            JavaScript
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#f5f5f5] text-black p-6 lg:py-[100px] lg:px-[160px]">
      <div className="flex flex-col justify-center max-w-7xl mx-auto sm:flex-row">
        <div className="section_title">Projects</div>
        <div className="section_content">
          <ProjectContentContainer />
          <ProjectContentContainer />
          <ProjectContentContainer />
        </div>
      </div>
    </section>
  );
}

export default Projects;
