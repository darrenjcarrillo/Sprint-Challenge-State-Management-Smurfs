import axios from "axios";

// action types get
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// action types post
export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_FETCH_SUCCESS = "ADD_FETCH_SUCCESS";
export const ADD_FETCH_FAILURE = "ADD_FETCH_FAILURE";
// action types delete/update
// export const DELETE_SMURF = "DELETE_SMURF";
// export const UPDATE_SMURF = "UPDATE_SMURF";

// action creator
export const fetchSmurfData = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(res => dispatch({ type: FETCH_FAILURE, payload: res.data }));
};

export const addSmurfData = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(`POST RESPONSE`, res);
      dispatch({
        type: ADD_FETCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(res => dispatch({ type: ADD_FETCH_FAILURE, payload: res.data }));
  // .catch(err => dispatch({ type: ADD_FAILURE }));
};
