import { createHistory, Link, LocationProvider, Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import createHashSource from "hash-source";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = (
  { navigate } // navigate is accessible here because Contact is a SubComponent of Router, in the VDom
) => (
  <div>
    <div>Contact</div>
    <button onClick={() => navigate("/about")}>
      programmatically navigate to about
    </button>
  </div>
);

const source = createHashSource();
const history = createHistory(source);

function App() {
  return (
    <LocationProvider history={history}>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </nav>
      </header>

      <hr />

      <Router>
        <Home path="/" />
        <About path="about" />
        <Contact path="contact" />
      </Router>
    </LocationProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
