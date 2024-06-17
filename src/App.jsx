import { useState } from 'react'
import './App.css'
import { generateFizzBuzz } from './fizzBuzz'

function App() {
  const [fizzBuzz, setFizzBuzz] = useState(0)
  const [displayedFB, setDisplayedFB] = useState(0);

  const handleUpdateFizzBuzz = () => {
    setFizzBuzz(currVal => currVal + 1)
    setDisplayedFB(generateFizzBuzz(fizzBuzz + 1))
  }

  const handleResetFizzBuzz = () => {
    setFizzBuzz(0)
    setDisplayedFB(0)
  }

  return (
    <>
      <h1>{displayedFB}</h1>
      <div className="card">
        <button onClick={handleUpdateFizzBuzz}>
          Next
        </button>

        <button onClick={handleResetFizzBuzz}>
          Reset
        </button>
        
      </div>

    </>
  )
}

export default App
