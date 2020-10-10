import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Router>
        <Loading />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
