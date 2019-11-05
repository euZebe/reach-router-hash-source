import { createHistory, Link, LocationProvider, Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import createHashSource from "hash-source";
import HugeComponent from "./HugeComponent";
import "./styles.css";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = (
  { navigate } // navigate is accessible here because Contact is a SubComponent of Router, in the VDom
) => (
  <>
    <div>Contact</div>
    <button onClick={() => navigate("/about")}>
      programmatically navigate to about
    </button>
  </>
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
          <Link to="huge-component">Huge component</Link>
        </nav>
      </header>

      <hr />

      <Router>
        <Home path="/" />
        <About path="about" />
        <Contact path="contact" />
        <HugeComponent path="huge-component" />
      </Router>
    </LocationProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
