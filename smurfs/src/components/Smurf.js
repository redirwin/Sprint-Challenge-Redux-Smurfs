import React from "react";

const Smurf = props => {
  return (
    <div>
      <div className="smurf-detail name">{props.smurf.name}</div>
      <div className="smurf-detail age">{props.smurf.age}</div>
      <div className="smurf-detail height">{props.smurf.height}</div>
    </div>
  );
};

export default Smurf;
