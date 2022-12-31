import React, { useEffect } from "react";

function IntroSection() {
  useEffect(() => {
    const introSection = document.querySelector(".intro-section");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          introSection.style.backgroundPosition = `50% ${scrollY * -0.1}px`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }
    });

    observer.observe(introSection);
  }, []);

  return (
    <div className="intro-section">
      <div className="container">
        <div className="grid-container">
          <div className="column">
            <img
              src="assets/featured-img.webp"
              alt="RüMLENDR"
              className="featured-img"
            />
          </div>
          <div className="column">
            <h2>
              All About
              <br />
              The Creative Independents
            </h2>
            <p>
              At RüMLENDR, we connect our vast network of available real estate
              – think of unused office space – with the needful world of
              creative independent occupants. In cities like Dallas, Los
              Angeles, Nashville, and NYC – there is a massive shortage of
              available and kind working space for those needing a bridge to
              growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
