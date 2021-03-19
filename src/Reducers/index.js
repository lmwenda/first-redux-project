import { combineReducers } from "redux";
import isLoggedReducer from "./isLoggedReducer";
import counterReducer from "./counterReducer";

export const combinedReducers = combineReducers({
    isLogged: isLoggedReducer,
    counter: counterReducer
});