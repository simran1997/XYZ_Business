import { ActionTypes } from "../constants/action-types";
const intialState = {
  business: [],
};

export const businessReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BUSINESS:
      return { ...state, business: payload };
    default:
      return state;
  }
};

export const selectedBusinessReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_BUSINESS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_BUSINESS:
      return {};
    default:
      return state;
  }
};
