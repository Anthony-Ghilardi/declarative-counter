// ASSIGNMENT COUNTER STARTS HERE

// import React from 'react'
// import { useState } from 'react'
// How to write this code in one line --> import React, { useState } from 'react'

// function App() {
//   let [ counter, changeCounter ] = useState(1)
//   window.changeCounter = changeCounter
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <h4>{counter}</h4>
//     </div>
//   );
// }

// export default App;

// ASSIGNMENT COUNTER ENDS HERE

// CHRIS'S VERSION OF COUNTER STARTS HERE

import {useState} from 'react'
import './App.css'

function App() {
  const [ counter, setCounter ] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <h1>Super Cool Counter</h1>
      <h2>Current Count is: {counter} </h2>

      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement} disabled={counter <=0 }>-1</button>
    </div>
  );
}

export default App;

//CHRIS'S VERSION OF COUNTER ENDS HERE