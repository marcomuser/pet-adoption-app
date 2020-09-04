import React from "react";
import ReactDOM from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Gustavo" animal="Dog" breed="Golden Retriever" />
      <Pet name="Hans" animal="Cat" breed="Stray" />
      <Pet name="Ferdinand" animal="Dog" breed="Labradoodle" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
