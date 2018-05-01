import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Header from "./components/Header";
import Saved from "./components/Saved";
import "./App.css";


const App = () => (
      <Router>
        <div className="container">
         
          <Route path="/" component={Header} />
           <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
);

export default App;
