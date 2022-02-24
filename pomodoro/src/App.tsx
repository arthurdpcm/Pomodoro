import React, { useEffect, useState } from "react";
import './App.css'

const COUNTDOWN_INITIAL_TIME = 25*60;

function App() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME) // 25 minutes;
  const timer = setTimeout(() => {
    setSecondsAmount(secondsAmount - 1)
  }, 1000)
  // setSecondsAmount(COUNTDOWN_INITIAL_TIME)
  useEffect(()=>{
    if (secondsAmount === 0) {
      alert("Chegou ao fim!")
      return;
    }

    timer;
     
    
  }, [secondsAmount]);

  const handleReset = () => {
    clearTimeout(timer);
    setSecondsAmount(COUNTDOWN_INITIAL_TIME);
    
  }


  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className="App">
      <header className="App-header">
        
        <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
        <button className="button" onClick={()=>{handleReset()}}>
          Reset
        </button>
        
      </header>
    </div>
  )
}

export default App
