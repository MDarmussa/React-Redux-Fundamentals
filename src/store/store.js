import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reducerCounter } from "../reducer/reducerCounter"
import { rootReducer } from "../reducer/rootReducer"


// 1- create store.
export const storeCounter = createStore(rootReducer, composeWithDevTools())