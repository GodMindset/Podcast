import React from "react";
import { Typography } from "@material-ui/core";
import "./App.css";

import { Question } from "./components";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Typography variant="h2">Welcome to God Mindset</Typography>
        <Typography variant="caption">
          This website is under construction
        </Typography>
        {/* <Question /> */}
      </div>
    </div>
  );
}

export default App;
