import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurfData } from "../actions";

const SmurfForm = props => {
  // console.log(`SMURFFORM`, props);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    console.log(`THIS IS NEW SMURF`, newSmurf);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurfData(newSmurf);
  };

  // handleFormReset = () => {
  //   props.addSmurfData(() => this.initialState)
  // }

  return (
    <div>
      <form onSubmit={handleChanges}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={props.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={props.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={props.height}
          onChange={handleChanges}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Smurf
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`THIS IS MSTP FORM STATE`, state);
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  {
    addSmurfData
  }
)(SmurfForm);

// export default connect(
//   null,
//   { addSmurfData }
// )(SmurfForm);
