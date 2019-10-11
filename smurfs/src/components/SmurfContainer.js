import React, { useEffect } from "react";
import { connect } from "react-redux";
// component
import SmurfForm from "./SmurfForm";
// action
import { fetchSmurfData } from "../actions";

const SmurfContainer = props => {
  console.log(`this is props in SMURF CONTAINER`, props);
  useEffect(() => {
    props.fetchSmurfData();
  }, []);
  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Smurfs...</h2>;
  }

  return (
    <div>
      SMURF VILLAGE
      <SmurfForm />
      {props.smurfData.map(smurf => (
        <div>
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`MSTP STATE`, state);
  return {
    smurfData: state.smurfData,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSmurfData
  }
)(SmurfContainer);
