import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let counter = 5
const addValue = () => {
  console.log("value added", counter);
  counter = counter + 1
}
const removeValue = () => {
  console.log("value removed", counter);
  counter = counter - 1
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
