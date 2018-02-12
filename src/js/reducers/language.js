import { createReducer } from "./utils";

const initialState = {
  code: "th"
};

const handlers = {
  ["SET_LANGUAGE"]: (state, action) => {
    console.log("reducer", action);
    return { code: action.payload };
  }
};
export default createReducer(initialState, handlers);
