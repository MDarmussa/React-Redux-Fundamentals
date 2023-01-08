import { useSelector, useDispatch } from "react-redux";
import { INCREAMENT } from "./type/type";
import { IsLoging } from "./type/type";


function App() {

  //4- access data from store reducer with useSelector - use to bring and display the data
  const count = useSelector(state => state.redCounter.counter) 
  //counter is coming from export const reducerCounter = (state={counter: 0}, action) => {}
  //redCounter is coming from rootReducer
  console.log(count)

  const isLog = useSelector(state => state.Auth.isLog)
  console.log(isLog)

  //5- change data in reducer with dispatch
  const dispatchCounter = useDispatch();

  return (
    <div>
      <h3>Counter: </h3>
      <h3>{count}</h3>
      {isLog === true ? <h3>You user</h3> : <h3>You are not registered</h3>}
      <h3>{isLog}</h3>
      <button onClick={() => dispatchCounter({type: INCREAMENT})}>Increase</button>
      <button onClick={() => dispatchCounter({type: 'DECREAMENT'})}>decrease</button>
      <button onClick={() => dispatchCounter({type: 'RESET'})}>Reset</button>
      
      <button onClick={() => dispatchCounter(IsLoging)}>Make User</button>
      <button onClick={() => dispatchCounter({type: 'NotLogin'})}>Not User</button>

    </div>
  );
}

export default App;
