import React from "react";

// styles
import "./App.scss";

// routes
import Routes from "./routes";

// cmoponents
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      {!window.location.pathname.toLowerCase().includes("/admin") && <Navbar />}

      <div className="App">
        <Routes />
      </div>

      {!window.location.pathname.toLowerCase().includes("/admin") && <Footer />}
    </div>
  );
}

export default App;
