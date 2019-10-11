import React from "react";
import { connect } from "react-redux";
import { addSmurfData } from "../actions";

const SmurfForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" age="name" placeholder="Age" />
        <input type="text" height="name" placeholder="Height" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`THIS IS MSTP FORM STATE`, state);
  return {
    smurfData: state.smurfData
  };
};

export default connect(
  mapStateToProps,
  {
    addSmurfData
  }
)(SmurfForm);
