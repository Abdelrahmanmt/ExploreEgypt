import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Overlay from "./Overlay";
import ParticlesComponent from "./particles";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore");
  };

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and invisible
    visible: { opacity: 1, y: 0 }, // Fade in and slide up
    exit: { opacity: 0, y: 50 }, // Fade out and slide down
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Start small and invisible
    visible: { opacity: 1, scale: 1 }, // Fade in and grow
    exit: { opacity: 0, scale: 0.8 }, // Shrink and fade out
  };

  return (
    <>
      <ParticlesComponent className="parts" />
      <motion.section
        className=" pt-20 pb-40 grid grid-cols-1 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden" // Initial animation state
        animate="visible" // Animate when mounted
        exit="exit" // Animate when unmounted
        transition={{ duration: 0.8 }} // Duration for the animation
      >
        <div className="container">
          <div className="flex justify-between">
            <div className="flex flex-col items-start">
              <motion.h2
                className="hero-title text-[#D2AE2E] !text-3xl md:!text-5xl mb-4"
                initial={{ opacity: 0, x: -50 }} // Slide in from left
                animate={{ opacity: 1, x: 0 }} // Slide to its original position
                transition={{ duration: 0.8 }}
              >
                GREAT PYRAMID OF
              </motion.h2>
              <motion.h2
                className="hero-highlight !text-3xl md:!text-4xl"
                initial={{ opacity: 0, x: 50 }} // Slide in from right
                animate={{ opacity: 1, x: 0 }} // Slide to its original position
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                KHUFU
              </motion.h2>
              <motion.p
                className="hero-description text-[#B1A426] !text-sm md:!text-base"
                initial={{ opacity: 0, y: 50 }} // Slide in from below
                animate={{ opacity: 1, y: 0 }} // Slide to its original position
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Great Pyramid of Giza is the largest Egyptian pyramid and
                the tomb of Fourth Dynasty pharaoh Khufu. Built in the 26th
                century BC during a period of around 27 years, it is the oldest
                of the Seven Wonders of the Ancient World, and the only one to
                remain largely intact.
              </motion.p>
              <motion.button
                className="hero-button !text-sm capitalize"
                style={{ backgroundColor: "rgb(210, 174, 46,0.6)" }} // Black background and gold text
                onClick={handleExploreClick}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#ffd700",
                  color: "#000",
                }} // Gold background and black text on hover
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Explore
              </motion.button>
            </div>
          </div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:absolute md:right-40 md:top-40 mt-48 md:mt-0"
          >
            <div className="relative">
              <img
                src="/images/pngwing 3.png"
                alt=""
                className="object-contain w-[300px] h-[300px] md:w-[400px] md:h-[400px] "
              />
              <div
                style={{
                  background: "rgba(180, 163, 73, 0.2)",
                  boxShadow: "13px 17px 4px rgba(189, 173, 25, 0.88)",
                  filter: "blur(50px)",
                }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[400px] h-[400px] rounded-full"
              ></div>
            </div>

            <div className="absolute top-40 md:top-60 -right-40 -translate-y-1/2 w-[450px] md:w-[600px] ">
              <img
                src="./images/pyramid-desktop.jpg"
                alt="Pyramid"
                className="hidden md:block"
              />
              <img
                src="./images/pyramid-mobile.jpg"
                alt="Pyramid"
                className="md:hidden"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
