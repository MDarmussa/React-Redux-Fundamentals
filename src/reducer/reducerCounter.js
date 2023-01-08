import { INCREAMENT } from "../type/type"

//2- create reducer to set state and change it.
export const reducerCounter = (state={counter: 0}, action) => { //state={counter: 7} state is our actual data - it can be array, object, API data ...etc

     if(action.type === INCREAMENT) {
          return {counter: state.counter + 1}
     }
     if(action.type === "DECREAMENT") {
          return {counter: state.counter - 1}
     }
     if(action.type === "RESET") {
          return {counter: 0}
     }

     return state;
}