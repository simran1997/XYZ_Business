import { ActionTypes } from "../constants/action-types";

export const setBusiness = (products) => {
  return {
    type: ActionTypes.SET_BUSINESS,
    payload: products,
  };
};

export const selectedBusiness = (product) => {
  return {
    type: ActionTypes.SELECTED_BUSINESS,
    payload: product,
  };
};
export const removeSelectedBusiness = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BUSINESS,
  };
};
