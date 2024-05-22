import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)
// let counter = 5

const addValue = () => {
  if (counter <=19) {
    counter = counter + 1
  console.log("value added", counter);
  setCounter(counter)
  }
}
const removeValue = () => {

  if (counter>=1) {
    counter = counter - 1
    setCounter(counter);

}
}
return (
    <>
      <h1>chai aur react</h1>
      <h2> counter value : {counter}</h2>
      <button onClick = {addValue}>Add value {counter}</button> <br />
      <button onClick = {removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
