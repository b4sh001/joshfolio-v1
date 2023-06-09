import React from "react";

function Experience() {
  return (
    <section className="bg-[#f5f5f5] text-black p-6 lg:py-[100px] lg:px-[160px]">
      <div className="flex flex-col justify-center max-w-7xl mx-auto sm:flex-row">
        <div className="section_title">Experience</div>
        <div className="section_content">
          <div className="flex  justify-between mb-10">
            <div>
              <div className="font-semibold">JRMSU Dapitan City</div>
              <div>BSCS Graduate</div>
            </div>
            <div className="font-medium">August 2022</div>
          </div>
          <div className="flex  justify-between mb-10">
            <div>
              <div className="font-semibold">Part Time</div>
              <div>FrontEnd Developer</div>
            </div>
            <div className="font-medium">January 2023</div>
          </div>

          <div className="flex  justify-between mb-10">
            <div>
              <div className="font-semibold">Freelance Job</div>
              <div>Shopify Developer</div>
            </div>
            <div className="font-medium">March 2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
