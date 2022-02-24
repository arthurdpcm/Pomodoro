import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import './App.css'

const COUNTDOWN_INITIAL_TIME = 25*60;

function Counter() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME) // 25 minutes;
  const navigate = useNavigate();

  useEffect(()=>{
    if (secondsAmount === 0) {
      alert("Chegou ao fim!")
      return;
    }

    setTimeout(() => {
      setSecondsAmount(state => state -1)
    }, 1000)
     
    
  }, [secondsAmount]);

  const handleReset = () => {
    console.log(secondsAmount)
    clearTimeout();
    setSecondsAmount(secondsAmount);
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

export default Counter