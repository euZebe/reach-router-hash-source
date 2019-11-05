import React from "react";
import { Location } from "@reach/router";

// to prevent `navigate` prop drilling, we can also use the Location component
const NonRoutedComponent = () => (
  <Location>
    {({ navigate }) => (
      <button onClick={() => navigate("/")}>Submit then Back home</button>
    )}
  </Location>
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
