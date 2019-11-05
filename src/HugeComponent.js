import React from "react";
import { Location, navigate as globalNavigate } from "@reach/router";

// to prevent `navigate` prop drilling, we can also use the Location component
const NonRoutedComponent = () => (
  <div>
    <Location>
      {({ navigate }) => (
        <button onClick={() => navigate("/")}>Submit then Back home</button>
      )}
    </Location>
    <button onClick={() => globalNavigate("/about")} class="wont-work">
      global navigate will break the hash behaviour.
    </button>
  </div>
);

const SubComponent = () => (
  <div>
    <p>This is a sub component.</p>
    <NonRoutedComponent />
  </div>
);

const HugeComponent = () => (
  <div>
    <p>
      Imagine this is a big component with a bunch of subcomponents. You may not
      want to pass drill `navigate` till the very last component requiring it.
    </p>
    <SubComponent />
  </div>
);

export default HugeComponent;
