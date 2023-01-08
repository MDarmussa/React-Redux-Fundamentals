
import { combineReducers } from "redux";
import { reducerAuth } from "./reducerAuth";
import { reducerCounter } from "./reducerCounter";


export const rootReducer = combineReducers({
     //redCounter, Auth are variables (anything) - see App.js - (state => state.redCounter.counter)
     redCounter: reducerCounter,
     Auth: reducerAuth
})