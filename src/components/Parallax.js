import React, { useEffect } from "react";

const ParallaxBody = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.body.style.backgroundPosition = `50% ${scrollY * 0.8}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ParallaxBody;
