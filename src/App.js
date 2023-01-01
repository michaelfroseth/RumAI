import logo from "./assets/logo.svg";
import "./App.css";
import "./css/style.css";
import Header from "./components/Header/Header";
import IntroSection from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import ParallaxBody from "./components/Parallax";

function App() {
  return (
    <div classNameName="App">
      <Header />
      <IntroSection />
      <Footer />
    </div>
  );
}

export default App;
