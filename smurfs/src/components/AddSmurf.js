import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addSmurf } from "../actions";

class AddSmurf extends React.Component {
  state = {
    smurf: {
      name: "",
      age: 0,
      height: ""
    }
  };

  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  submitSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.smurf.name,
      age: this.state.smurf.age,
      height: this.state.smurf.height
    };
    this.props.addSmurf(newSmurf);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitSmurf}>
          <input
            onChange={this.handleChanges}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChanges}
            placeholder="age in smurf years"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChanges}
            placeholder="height in centimeters"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add smurf to village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default withRouter(
  connect(
    mapStateToProps,
    { addSmurf }
  )(AddSmurf)
);
