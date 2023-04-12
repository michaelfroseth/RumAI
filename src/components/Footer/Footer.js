import React, { useState } from "react";
import Modal from "../Modal";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the <a> tag
    setShowModal(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-container">
          <div className="column">
            <img
              src="assets/logo.svg"
              width="261px"
              height="268px"
              alt="RüMLENDR"
              className="featured-img"
            />
          </div>
          <div className="column">
            <ul className="menu-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#" onClick={handleButtonClick}>
                  How To Get Involved
                </a>
              </li>
              <li>
                <a href="mailto:js@jermandaresearch.com">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)} />
      )}
    </footer>
  );
}

export default Footer;
