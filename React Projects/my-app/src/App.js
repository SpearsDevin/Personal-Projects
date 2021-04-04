import React, {useState} from "react";
import Hello from './sayHello';
import Tweet from './tweet';
import './App.css';

function App() {

 
  const [isRed, setRed] = useState(false);
  const [count, setCOunt] = useState(0);

  const increment = () => {
    setCOunt(count + 1);
    setRed(!isRed);
  };
  

  const [isOof, setOof] = useState(false);
  const switching = () => {
  setOof(!isOof);
};

  return (
    <div className={isOof ? 'Oof' : "app" }>
      <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
      <button onClick={increment} className="increment">Increment</button>
      
      <button onClick={switching} className="increment">Background</button>
      <h1 className="counter">{count}</h1>
      <Hello />
    </div>
  );
}


export default App;
/*    
      <Tweet name="Devin" message="1" />
      <Tweet name="John" message="2" />
      <Tweet name="Timmy" message="3" />
      <Tweet name="Jimothy" message="4" />
*/