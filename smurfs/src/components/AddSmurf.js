import React from "react";

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

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleAddSubmit}>
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

export default AddSmurf;
