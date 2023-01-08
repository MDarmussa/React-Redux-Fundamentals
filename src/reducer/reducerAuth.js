
export const reducerAuth = (state= {isLog: true}, action) => {

     if(action.type === 'IsLoging') {
          return {isLog: true}
     }
     if(action.type === 'NotLogin') {
          return {isLog: false}
     }
     
     return state;
}