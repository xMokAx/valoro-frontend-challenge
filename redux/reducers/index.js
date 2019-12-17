import { reservationsReducer } from "./reservations";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  reservations: reservationsReducer
});
