import React from "react";
import ReactDOM from "react-dom";
import { ZeusAd } from "@zeus-technology/ad";

import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <h1>Zeus Ad Demo</h1>
      <p>
        Below, you should see a single ad. If you don't see one, please verify
        you don't have any privacy or ad blockers enabled.
      </p>
      <ZeusAd slotId="zeus_mob_bigbox_1" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
