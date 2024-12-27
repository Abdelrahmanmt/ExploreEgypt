import React from "react";
import ParticlesComponent from "../components/particles";
import Overlay from "../components/Overlay";

function About() {
  return (
    <div className="container">
      <ParticlesComponent className="parts" />

      <div className="flex flex-col lg:flex-row justify-between gap-4 pt-20">
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-[#D2AE2E] text-6xl font-medium uppercase mb-2">
            about us
          </h1>
          <span className="text-[#D2AE2E] font-medium text-lg">
            TOURISM WEBSITE
          </span>
          <p className="text-[#B1A426]  w-full lg:w-96 max-w-full text-center lg:text-left">
            The Great Pyramid of Giza is the largest Egyptian pyramid and tomb
            of Fourth Dynasty pharaoh Khufu. Built in the 26th century BC during
            a period of around 27 years, it is the oldest of the Seven Wonders
            of the Ancient World, and the only one to remain largely intact. The
            Great Pyramid of Giza is the largest Egyptian pyramid and tomb of
            Fourth Dynasty pharaoh Khufu. Built in the 26th century BC during a
            period of around 27 years, it is the oldest of the Seven Wonders of
            the Ancient World, and the only one to remain largely intact. The
            Great Pyramid of Giza is the largest Egyptian pyramid and tomb of
            Fourth Dynasty pharaoh Khufu. Built in the 26th century BC during a
            period of around 27 years, it is the oldest of the Seven Wonders of
            the Ancient World, and the only one to remain largely intact.
          </p>
        </div>
        <div className="relative">
          <div>
            <img
              src="/images/pngwing 3.png"
              alt=""
              className="object-contain w-[400px] h-[400px]"
            />
            <div
              style={{
                background: "rgba(180, 163, 73, 0.2)",
                boxShadow: "13px 17px 4px rgba(189, 173, 25, 0.88)",
                filter: "blur(50px)",
              }}
              className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[500px] h-[500px] rounded-full"
            ></div>
          </div>

          <Overlay />
        </div>
      </div>
    </div>
  );
}

export default About;
