import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SmurfListView from "./SmurfListView";
import AddSmurf from "./SmurfListView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/addsmurf">Add Smurf</Link>
          <Route exact path="/">
            <SmurfListView />
          </Route>
          <Route path="/addsmurf">
            <AddSmurf />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
