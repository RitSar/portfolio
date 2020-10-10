import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/portfolio" exact component={Home} />
          <Route path="/portfolio/about" component={About} />
          <Route path="/portfolio/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
