import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./explore.css";
import { useNavigate } from "react-router-dom";
import ParticlesComponent from "./particles"; // Import ParticlesComponent

const Explore = () => {
  const navigate = useNavigate();

  const handleExploreClick1 = () => {
    navigate("/year-event");
  };
  
  const handleEvent2click1 = () => {
    navigate("/event2");
  };


  const events = [
    {
        function: handleExploreClick1,
        title: "Construction of the Pyramids",
        id: "pyramids-construction",
        pic: "main-qimg-df76d8796bec77f9bd87d2077bbb87e6-lq.jpg",
        subtitle: "The Great Pyramids of Giza were built during Egypt's Old Kingdom, under Pharaohs Khufu, Khafre, and Menkaure. These monuments stand as a testament to ancient architectural skill and remain one of the Seven Wonders of the Ancient World."
    },
    {
        function: handleEvent2click1,
        title: "Reign of Tutankhamun",
        id: "reign-tutankhamun",
        pic: "Tutankhamun.webp",
        subtitle: "Tutankhamun, the boy king of the 18th dynasty, ruled during the New Kingdom. He is most famous for his intact tomb, filled with treasures, which was discovered by Howard Carter in 1922."
    },
    {
        title: "Battle of Kadesh",
        id: "battle-kadesh",
        pic: "main-qimg-df76d8796bec77f9bd87d2077bbb87e6-lq.jpg",
        subtitle: "Ramses II led the Egyptian forces in the Battle of Kadesh (c. 1274 BC) against the Hittites. This iconic conflict is celebrated as one of the largest chariot battles in history and resulted in one of the first known peace treaties."
    },
    {
        title: "Cleopatra VII's Reign",
        id: "cleopatra-reign",
        pic: "main-qimg-df76d8796bec77f9bd87d2077bbb87e6-lq.jpg",
        subtitle: "Cleopatra VII, the last ruler of the Ptolemaic Dynasty, played a key role in Roman politics. Her reign ended with her death in 30 BC, marking the conclusion of ancient Egyptian sovereignty."
    }
];


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Add Particles Component */}
      <ParticlesComponent className='parts'/>

      <div className="explore-container" style={{ position: "relative" }}>
        <h1 className="explore-t1">Key Events</h1>
        <h1 className="explore-title">
          Explore Egypt's Rich Heritage and Timeless Milestones
        </h1>
        <div className="explore-events">
          {events.map((event, index) => (
            <motion.div
              className="explore-card"
              key={event.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                boxShadow: "0px 0px 23px 0px rgba(0,0,0,0.30)",
                display: "flow-root",
              }}
            >
              <div id={event.id}>
                <img
                  width={"250px"}
                  height={"250px"}
                  src={`./images/${event.pic}`}
                  alt={event.title}
                  className="explore-image"
                />
              </div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-subtitle">{event.subtitle}</p>
              <button className="btn btn-rect-to-round btn-rect-to-round--black"
                onClick={event.function}
              >
                Explore More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Explore;
