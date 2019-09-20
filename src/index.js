import React from "react";
import ReactDOM from "react-dom";
import { ZeusAd } from "@zeus-technology/ad";
import { MemoryRouter, Route, Link } from "react-router-dom";
import { Alpha } from "alpha";
import { Bravo } from "bravo";

import "./styles.css";

export const App = props => {
  return (
    <div className="App">
      <h1>Zeus Ad Demo</h1>
      <p>
        Below, you should see a single ad. If you don't see one, please verify
        you don't have any privacy or ad blockers enabled.
      </p>
      <MemoryRouter>
        {console.log("ROUTER!", props)}
        <ZeusAd slotId="zeus_mob_bigbox_1" />
        <Route path="/" exact={true} component={Alpha} />
        <Route path="/bravo" exact={true} component={Bravo} />
      </MemoryRouter>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
