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
    document.getElementById("input-name").reset();
  };

  // handleFormReset = e => {
  //   e.preventDefault();
  //   props.addSmurfData(newSmurf);
  // };

  // const resetForm = e => {
  //   setNewSmurf({ name: "", age: "", height: "" });
  // };

  return (
    <div>
      <form id="input-name">
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
        {/* <button type="button" onClick={resetForm}>
          Clear
        </button> */}
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
