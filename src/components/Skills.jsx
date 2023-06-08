import React from "react";

function Skills() {
  return (
    <section className="bg-[#f5f5f5] text-black py-10 page-width">
      <div className="max-h-full max-w-5xl mx-auto">
        <div className="flex flex-col justify-around items-start w-full mx-auto text-center sm:flex sm:text-start sm:flex-row">
          <div className="w-full h-full px-4 mr-10 text-center text-cyan-500 text-lg font-semibold">
            Skills
          </div>
          <div className="max-w-full flex flex-col items-start px-4">
            <p className="p_medium mb-6 text-start">
              I started learning to code when I decide to become a
              <strong> Software Engineer</strong> after I graduate my BS in
              Computer Science course last August 2022. Unfortunate by the hit
              of the pandemic, I still strive to be a competent individual
              specially when I can only rely on myself. I studied HTML, CSS and
              Javascript as it was the prerequisites to become "Software
              Engineer" online, and all I can say is it was totally frustrating.
            </p>

            <p className="p_medium mb-6 text-start">
              After a month or two of learning HTML and CSS, I consult one of my
              classmate which is now a freelancer (Shopify Developer) and
              fortunately he gave me some pages of his task for me to gain
              experience. Although it was just pure HTML and CSS I learned a lot
              of lessons through my mistakes.
            </p>
            <p className="mb-6 text-start p_medium">
              Now I can say that I have the basic knowledge of some of the tools
              and frameworks, I'm confident that I'll be able to develop all my
              skills if I'm being trained by professionals or experts. I'll keep
              learning as technology keeps evolving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
