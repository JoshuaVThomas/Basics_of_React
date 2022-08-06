import './App.css';
import {Planets} from './Planets'

function App() {
  const age = 18 ;
  const isGreen = true ;
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth" , isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune" , isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    ]; 
  return (
    <div className="App">
        {age >= 18 ? <h1>Is Eligible to Vote</h1> : <h1>Is not eligible to vote</h1>}
        <h1 style = {{color : isGreen ? "green" : "red"}}>Color</h1> 
        {isGreen && <button>Button</button>}
        {planets.map((planet)=>{
            return <Planets name={planet.name} isGas={planet.isGasPlanet}/>
        })}
          
    </div>
  );
}




export default App;
