import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container">
      <div className="grid-container">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`menu${menuOpen ? " open" : ""}`}>
          <button className="close-button">
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
            Without The Crappy Lease.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            pharetra sagittis magna in venenatis. Duis vel sodales massa. Cras
            sed mauris ut orci lacinia sodales quis id elit. Aenean.
          </p>
          <a href="./index.html" className="active">
            <i className="menu-icon fas fa-home"></i> Home
          </a>
          <a href="#">
            <i className="menu-icon fas fa-building"></i> How To Get Involved
          </a>
          <a href="#">
            <i className="menu-icon fas fa-file-pdf"></i> Download Pitch Deck
          </a>
          <a href="#">
            <i className="menu-icon fas fa-address-card"></i> Contact Us
          </a>
          <div className="social-icons">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
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
            Without the crappy lease.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            pharetra sagittis magna in venenatis. Duis vel sodales massa. Cras
            sed mauris ut orci lacinia sodales quis id elit. Aenean.
          </p>
          <button>Learn More</button>
        </header>
        <section className="section">
          <div className="column">
            <div className="icon-box">
              <img src="assets/icon-1.svg" alt="Icon 1" />
              <h2>The Perfect Space</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at dui ornare, euismod est at, facilisis elit.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="icon-box">
              <img src="assets/icon-2.svg" alt="Icon 2" />
              <h2>Bridge To Growth</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at dui ornare, euismod est at, facilisis elit.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="icon-box">
              <img src="assets/icon-3.svg" alt="Icon 3" />
              <h2>Nationwide Network</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at dui ornare, euismod est at, facilisis elit.
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
  );
};

export default Header;
