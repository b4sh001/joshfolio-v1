import React from "react";
import myPhoto from "./profile.jpg";

const AboutMe = () => {
  return (
    <section className="bg-[#f5f5f5] text-black py-20 h-[750px] flex items-center border border-y">
      <div className="max-h-full max-w-6xl mx-auto flex items-center">
        <div className="flex justify-between items-center w-full mx-auto text-center flex-col-reverse sm:flex-row sm:text-start">
          <div className="max-w-full px-4 p sm:w-1/2 sm:px-8 mt-6">
            <p className="text-xs leading-4 tracking-widest">
              HI THERE 👋, I'M
            </p>

            <div className="py-2 sm:py-6">
              <h2 className="font-bold text-h2">JOSHUA SOL</h2>
              <p className="text-cyan-400 text-h3">joshdev</p>
            </div>

            <p className="opacity-30 text-lg mb-6">
              A web developer who is passionate in front-end web development. I
              also love creating simple yet visually appealing and functional
              websites
            </p>

            <button className="bg-cyan-500 primary-button font-semibol hover:text-white px-4 py-2 rounded-lg">
              <div className="flex items-center justify-center">
                Get in Touch
              </div>
            </button>
          </div>
          <div className="sm:w-1/2 flex justify-end px-4  sm:px-8">
            <div className="max-h-[340px] max-w-[340px] border-4 border-cyan-600 drop-shadow-lg bg-slate-200">
              <img className="object-cover" src={myPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
