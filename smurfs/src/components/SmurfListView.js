import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSmurfList } from "../actions";
import Smurf from "./Smurf";

class SmurfListView extends React.Component {
  componentDidMount() {
    // console.log("Did Mount!!");
    this.props.getSmurfList();
  }

  render() {
    console.log("HERE ARE THE SMURFS: ", this.props.smurfs);
    return <div className="smurfs-list-wrapper" />;
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSmurfList }
  )(SmurfListView)
);
