import './App.css';
import {useState} from 'react'

function App() {
  let [count , change] = useState(0);
  let [input , changeInput] = useState("")
  let [bool , showHide] = useState(false)
 
  const twoWayBind = (event) => {
    changeInput(input = event.target.value)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{change(count+=1)}}>Increment</button>
      <button onClick={()=>{change(count-=1)}}>Decrement</button>
      <button onClick={()=>{change(count=0)}}>Reset</button>
      <hr></hr>
      <input type="text" onChange={twoWayBind}></input>
      <h3>{input}</h3>
      <hr></hr>
      <button onClick={()=>{showHide(!bool)}}>Show Text</button>
      {bool && <p>Buzzinga</p>}
    </div>
  );
}

export default App;
