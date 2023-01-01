import logo from "./assets/logo.svg";
import "./App.css";
import "./css/style.css";
import Header from "./components/Header/Header";
import IntroSection from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import ParallaxBody from "./components/Parallax";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div classNameName="App">
      <AnimatedCursor innerSize={15} outerSize={10} color="127, 17, 224" />
      <Header />
      <IntroSection />
      <Footer />
    </div>
  );
}

export default App;
