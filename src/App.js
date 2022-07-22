import { useEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

import { BrowserRouter, Link, Route } from "react-router-dom";
import Name from "./components/Name";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Route path="/name">
        {" "}
        <Name />{" "}
      </Route>
      <Route exact path="/">
        {" "}
        <Home />{" "}
      </Route>
    </div>
  );
}

export default App;
