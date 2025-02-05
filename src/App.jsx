import './App.css'
import ColorGuess from "./component/ColorGuess"
import { useState, useEffect } from 'react'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
    {loading?
      <div className="dots">
        <div className="dot" style={{backgroundColor: 'red'}}></div>
        <div className="dot" style={{backgroundColor: 'orange'}}></div>
        <div className="dot" style={{backgroundColor: 'yellow'}}></div>
        <div className="dot" style={{backgroundColor: 'green'}}></div>
        <div className="dot" style={{backgroundColor: 'blue'}}></div>
        <div className="dot" style={{backgroundColor: 'indigo'}}></div>
        <div className="dot" style={{backgroundColor: 'violet'}}></div>
      </div>:
      <ColorGuess/>
    }
    </>
  )
}

export default App
