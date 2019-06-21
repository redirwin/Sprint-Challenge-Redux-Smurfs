import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SmurfListView from "./SmurfListView";
import AddSmurf from "./SmurfListView";

import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
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
