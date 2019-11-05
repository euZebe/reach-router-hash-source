import { createHistory, Link, LocationProvider, Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import createHashSource from "hash-source";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = ({ navigate }) => (
  <div>
    Contact<button onClick={() => navigate("/about")}>submit</button>
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
