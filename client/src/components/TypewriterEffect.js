import React, { useState, useEffect } from "react";

function TypewriterEffect() {
  const [text, setText] = useState("");
  const words = ["Green Coders", "Saving", "Reviving","Environment"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let currentText = text;
    let interval;

    if (currentIndex < words.length) {
      interval = setInterval(() => {
        if (currentText.length < words[currentIndex].length) {
          currentText = words[currentIndex].substring(0, currentText.length + 1);
          setText(currentText);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            for (let i = currentText.length; i >= 0; i--) {
              currentText = words[currentIndex].substring(0, i);
              setText(currentText);
            }
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, 1000); // Wait for 1 second before moving to the next word
        }
      }, 150); // Typing speed in milliseconds
    }

    return () => clearInterval(interval);
  }, [text, currentIndex, words]);

  return <div className="typewriter">{text}</div>;
}

export default TypewriterEffect;
