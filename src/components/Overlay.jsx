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
export default Overlay;
