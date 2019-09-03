import React from "react";
import ReactDOM from "react-dom";
import { ZeusAd } from "@zeus-technology/ad";

import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ZeusAd slotId="zeus_mob_bigbox_1" style={{ fontSize: "+1" }} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
