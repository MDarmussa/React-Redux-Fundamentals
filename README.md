
Start redux.
- install redux.
- install react-redux.
- create store.js.
- create reducer.js.
- index.js: import store from store.js that carry the data.
- index.js: import Provider from react-redux and wrap all the app and inject it with the store vairable.
- in App: access and display data using useSelector.
- in App: change data in reducer with dispatch using useDispatch.
- for organization: create files 'type.js' to hold all type variables. 
- create folders for (action, reducer, store, type)
- create rootReducer.js and import  combineReducers file (to organize reducers in one place as an object). this file will import all reducers in one place
- import rootReducer in store.js and replace reducerCounter with rootReducer.
- in App.js, add .counter infront of state.counter. 
     before:   const data = useSelector(state => state.counter).
     after:   const data = useSelector(state => state.redCounter.counter).
- create a new reducer called authReducer. then import it in rootReducer, and add it in the object as avariable called Auth. extra step: in type:  define IsLoging as export const IsLoging = {type: "IsLoging"} then use it in app.js.
- to watch all redux activities and how the code works, install redux-devtools-extension and go to inspect > redux. in store.js, add composeWithDevTools()

     




links and sources:
- https://react-redux.js.org/
- https://redux.js.org/introduction/installation
- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
- https://www.npmjs.com/package/redux-devtools-extension