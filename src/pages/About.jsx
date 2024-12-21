import React from "react";
import ParticlesComponent from "../components/particles";

function About() {
  return (
    <>
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
    </>
  );
}

export default About;

const Overlay = () => {
  const students = [
    { id: 5234, name: "Ethar" },
    { id: 2345, name: "abualfadel" },
  ];
  const supervisors = [
    { id: 5234, name: "DR.Neveen Ghaleb" },
    { id: 2345, name: "TA  Mona Ali" },
  ];
  return (
    <div className="absolute bottom-20 -left-24">
      <div
        className="absolute -bottom-1/4 flex items-center justify-center gap-4  -left-32 w-[400px] h-[200px] bg-[#D2AE2E]"
        style={{
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(180deg, rgba(180, 163, 73, 0.176) 0%, rgba(99, 71, 36, 0.88) 99.18%)",
        }}
      >
        <div className="text-[#FFD400] pt-10">
          <h3>Name</h3>
          <ul>
            {students.map((name) => (
              <li key={name.id} className="italic">
                {name.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[#FFD400] pt-10">
          <h3>ID</h3>
          <ul>
            {students.map((name) => (
              <li key={name.id}>{name.id}</li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="absolute -bottom-1/4  left-36 w-[300px] h-[150px]"
        style={{
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(180deg, rgba(180, 163, 73, 0.176) 0%, rgba(99, 71, 36, 0.88) 99.18%)",
        }}
      >
        <div className="pt-16">
          <h3 className="text-white uppercase text-sm">Supervisors</h3>
          <ul>
            {supervisors.map((name) => (
              <li key={name.id} className="text-[#FFD400] text-sm">
                {name.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
/* Ellipse 1 */
