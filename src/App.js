import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import React, { useState } from "react";

// Import components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  // Set initial state
  const [activeComponent, setActiveComponent] = useState(<Home />);

  // Define functions to set state
  const navToHome = () => {
    setActiveComponent(<Home />);
  };
  const navToAbout = () => {
    setActiveComponent(<About />);
  };
  const navToPortfolio = () => {
    setActiveComponent(<Portfolio />);
  };
  const navToContact = () => {
    setActiveComponent(<Contact />);
  };
  const navToResume = () => {
    setActiveComponent(<Resume />);
  };

  return (
    <div className="App">
      <Header
        onHome={navToHome}
        onAbout={navToAbout}
        onPortfolio={navToPortfolio}
        onContact={navToContact}
        onResume={navToResume}
      />
      <div className="page-wrap">
        <div className="page-content">{activeComponent}</div>
      </div>
    </div>
  );
}

export default App;
