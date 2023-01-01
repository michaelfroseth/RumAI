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
      <AnimatedCursor innerSize={25} outerSize={10} color="121, 17, 127" />
      <Header />
      <IntroSection />
      <Footer />
    </div>
  );
}

export default App;
