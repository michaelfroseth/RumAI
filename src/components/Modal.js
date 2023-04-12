import React from "react";
import "./modal.css";

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>How To Get Involved</h1>
        <p>
          Interested in learning how to get started?{" "}
          <a href="#" class="download-btn">
            Download our pitch deck
          </a>{" "}
          and learn more about Rumlender.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
