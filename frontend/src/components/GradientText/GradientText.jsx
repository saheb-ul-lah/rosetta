import React, { useState, useEffect } from "react";
import { FaPlus, FaPaperclip, FaSearch } from "react-icons/fa"; // Import icons from react-icons
import "../../App.css"

export default function GradientText({
  children,
  className = "w-[800px]",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = true,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  // Typewriter effect logic
  const [placeholder, setPlaceholder] = useState("");
  const fullText = "Tell me what you want to learn";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed (adjust as needed)

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div
      className={`relative mx-auto flex max-w-[890px] flex-row items-center justify-between rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
        backdropFilter: "blur(10px)", // Blur effect
      }}
    >
      {/* Gradient border */}
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}

      {/* Left Icons */}
      <div className="flex items-center gap-3 pl-4 z-10">
        <button className="p-2 rounded-full hover:bg-gray-200/20 transition-colors">
          <FaPlus className="text-gray-400" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200/20 transition-colors">
          <FaPaperclip className="text-gray-400" />
        </button>
      </div>

      {/* Input with Typewriter Effect */}
      <div
        className="flex-1 relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        <input
          type="text"
          className="styled-input p-4 text-l h-[50px] w-full bg-transparent outline-none placeholder:text-gray-400"
          placeholder={placeholder}
          style={{
            border: "none",
            caretColor: "transparent", // Hide the default cursor
            textAlign: "center",
            fontFamily: 'Montserrat, sans-serif', // Apply Montserrat font to the input
          }}
        />
        <span className="typewriter-cursor"></span> {/* Blinking cursor */}
      </div>

      {/* Search Button */}
      <button className="p-3 rounded-full bg-gradient-to-r from-[#ffaa40] to-[#9c40ff] hover:opacity-80 transition-opacity mr-2 z-10">
        <FaSearch className="text-white" />
      </button>
    </div>
  );
}
  // tailwind.config.js
  // module.exports = {
  //   theme: {
  //     extend: {
  //       keyframes: {
  //         gradient: {
  //           '0%': { backgroundPosition: '0% 50%' },
  //           '50%': { backgroundPosition: '100% 50%' },
  //           '100%': { backgroundPosition: '0% 50%' },
  //         },
  //       },
  //       animation: {
  //         gradient: 'gradient 8s linear infinite'
  //       },
  //     },
  //   },
  //   plugins: [],
  // };