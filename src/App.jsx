import React from "react"; 
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Explore from "./components/explore";
import Footer from "./components/Footer";
import YearEvent from "./components/YearEvent";
import Event2 from "./components/Event2";
import "./App.css";
import ChatBot from "./components/ChatBot";

function App() {
  const location = useLocation(); // Get the current location for route-specific animations

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/year-event" element={<YearEvent />} />
          <Route path="/event2" element={<Event2 />} />
          <Route path="/chatbot" element={<ChatBot />} />
        
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
