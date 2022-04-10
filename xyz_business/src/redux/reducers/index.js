import { combineReducers } from "redux";
import { businessReducer, selectedBusinessReducer } from "./businessReducer";
const reducers = combineReducers({
  allBusiness: businessReducer,
  business: selectedBusinessReducer,
});
export default reducers;
