import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data to server or third-party service here
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        id="email"
        value={email}
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        id="message"
        value={message}
        placeholder="Your Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
