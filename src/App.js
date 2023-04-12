import React, { useState } from "react";
import "./App.css";
import "./css/style.css";
import Header from "./components/Header/Header";
import IntroSection from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

function App() {
  // Add a state to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <AnimatedCursor innerSize={15} outerSize={10} color="127, 17, 224" />
      <Header />
      <IntroSection />
      {/* Pass the showModal state and setShowModal function to the Footer component */}
      <Footer showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
