"use client";
import React, { useState, useEffect, useRef } from "react";

const CycleSpans = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideOutIndex, setSlideOutIndex] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  const spanContents: string[] = [
    "You can search for titles",
    "Try searching for genres",
    "You can also search for characters",
    "Try searching for plot elements",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setSlideOutIndex(currentIndex);
      const nextIndex = (currentIndex + 1) % spanContents.length;
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, spanContents.length]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSliding) {
      timer = setTimeout(() => {
        setIsSliding(false);
        setSlideOutIndex(null);
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSliding]);

  return (
    <div className="span-container">
      {spanContents.map((content, index) => (
        <span
          key={index}
          className={[
            "span-content text-center",
            index === currentIndex && isSliding ? "slide-enter-active" : "",
            index === slideOutIndex ? "slide-exit-active" : "",
            index !== currentIndex && index !== slideOutIndex
              ? "slide-exit"
              : "",
          ].join(" ")}
        >
          {content}
        </span>
      ))}
    </div>
  );
};

export default CycleSpans;
