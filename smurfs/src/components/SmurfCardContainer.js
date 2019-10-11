import React from "react";

const SmurfCardContainer = props => {
  return (
    <div class="card-container">
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

export default SmurfCardContainer;
