import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SmurfListView from "./SmurfListView";
import AddSmurf from "./AddSmurf";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link exact to="/">
          Home
        </Link>
        <Link to="/addsmurf">Add Smurf</Link>
        <Route exact path="/" component={SmurfListView} />
        <Route eact path="/addsmurf" component={AddSmurf} />
      </div>
    );
  }
}

export default App;
