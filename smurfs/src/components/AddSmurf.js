import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addSmurf } from "../actions";

class AddSmurf extends React.Component {
  state = {
    smurf: {
      name: "",
      age: null,
      height: ""
    }
  };

  handleChanges = e => {
    this.setState({
      smurf: {
        [e.target.name]: e.target.value
      }
    });
  };

  submitSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: "dave",
      age: 40,
      height: "5"
    };
    this.props.addSmurf(newSmurf);
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
