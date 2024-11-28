import React, { useState } from "react";
import "./ChatBot.css"; // Create a CSS file with similar styles
import { motion } from "framer-motion";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm here to help!", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <motion.div
      className="chatbot-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="chatbot-title">Chat with Us</h1>
      <div className="chatbot-box">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot-message ${
                message.sender === "user" ? "user-message" : "bot-message"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input-container">
          <input
            type="text"
            className="chatbot-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="chatbot-send-button" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBot;
