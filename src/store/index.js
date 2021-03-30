import {combineReducers, createStore} from "redux";
import resData from "./reducers/resData";

export default createStore(combineReducers({
  resData
}));


