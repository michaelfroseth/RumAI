import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faBuilding,
  faFile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";
import ContactForm from "../Contact";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function updateParallaxBg() {
      document.querySelector(
        ".parallax_bg"
      ).style.backgroundPosition = `center ${scrollY * 0.7}px`;
      requestAnimationFrame(updateParallaxBg);
    }

    updateParallaxBg();
  }, [scrollY]);

  return (
    <div className="parallax_bg">
      <div className="container">
        <div className="grid-container">
          <img
            src="assets/menu.svg"
            className="hamburger"
            alt="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div className={`menu${menuOpen ? " open" : ""}`}>
            <button className="close-button" onClick={() => setMenuOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img
              src="assets/logo.svg"
              width="161px"
              height="168px"
              className="menu-logo"
              alt="RumLender"
            />
            <h2>
              Extra Space.
              <br />
              Without The Lease.
            </h2>
            <p>
              Our mission is to help content creators and producers of things
              and services find the perfect space to bring their ideas to life
              without the stress of a long-term and invasive leasing process.
            </p>
            <a href="./index.html">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faBuilding} /> How To Get Involved
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFile} />
              Download Pitch Deck
            </a>
            <a href="#" onClick={() => setShowContactForm(true)}>
              <FontAwesomeIcon icon={faAddressCard} /> Contact Us
            </a>
            {showContactForm && (
              <div className="contact">
                <ContactForm />
              </div>
            )}
          </div>

          <header className="header">
            <a href="./index.html">
              <img
                src="assets/logo.svg"
                width="261px"
                height="268px"
                className="logo"
                alt="RumLender"
              />
            </a>
            <h1>
              Extra Space.
              <br />
              Without the lease.
            </h1>
            <p>
              Our mission is to help content creators and producers of things
              and services find the perfect space to bring their ideas to life
              without the stress of a long-term and invasive leasing process.
            </p>
            <button class="outline-btn">
              Learn How We're Helping Independent Creatives
            </button>
          </header>
          <section className="section">
            <div className="column">
              <div className="icon-box">
                <img src="assets/icon-1.svg" alt="Icon 1" />
                <h2>The Perfect Space</h2>
                <p>
                  RüMLENDR has an assortment of different spaces to fit the
                  needs of business owners for all types of industries.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="icon-box">
                <img src="assets/icon-2.svg" alt="Icon 2" />
                <h2>Bridge To Growth</h2>
                <p>
                  We know it’s tough to do it on your own. We strive to create a
                  community of innovators & collaborators.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="icon-box">
                <img src="assets/icon-3.svg" alt="Icon 3" />
                <h2>Nationwide Network</h2>
                <p>
                  RüMLENDR is building a nationwide network to connect
                  entrepreneurs with property owners to help both succeed.
                </p>
              </div>
            </div>
          </section>
          <section className="text-section">
            <div className="intro-column discover-bg">
              <div className="bg"></div>
              <h2 className="heading">
                Discover perfection
                <br />
                in our office spaces.
              </h2>
            </div>
            <div className="intro-column">
              <p className="paragraph">
                There is a shortage of available and suitable working space in
                America and RüMLENDR aims to address this problem by connecting
                independent occupants with its network of available real estate.
                This allows creative independent occupants to find the kind of
                working space they need to grow their businesses or pursue their
                creative endeavors.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
