import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_FETCH_FAILURE,
  ADD_FETCH_SUCCESS,
  ADDING_SMURF
  // DELETE_SMURF,
  // UPDATE_SMURF
} from "../actions";

// Initial state
const initialState = {
  smurfData: [],
  isFetching: false,
  addingSmurf: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfData: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    /// POSTING SMURF REDUCER ///
    case ADDING_SMURF:
      return {
        ...state,
        isFetching: false,
        addingSmurf: true
      };

    case ADD_FETCH_SUCCESS:
      console.log(`ADDING SMURF`, ADD_FETCH_SUCCESS);
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfData: action.payload
      };

    case ADD_FETCH_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    // case ADD_FETCH_SUCCESS:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     addingSmurf: false,
    //     error: action.payload
    //   };

    // case DELETE_SMURF: {
    //   return {
    //     ...state,
    //     updatingSmurf: true
    //   };
    // }
    default:
      return state;
  }
};

export default reducer;
