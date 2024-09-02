import React from "react";
import { useState } from "react";


const App = () => {

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const handleReset = () => {
    setCalc("")
  }

  const handleDelete = () => {
    setCalc(calc.slice(0, -1));
  }
  
  const handleEqual = () => {
    try {
      setResult(eval(calc).toString());
      setCalc(eval(calc).toString());
    } catch (error) {
      setCalc("Error");
    }
  };

  const updateCalc = (value) => {
    if (
      (["+", "-", "*", "/"].includes(value) && calc === "") ||
      (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };
  

  return (
    <div className="outer-container">
      <div className="innerContainer">
        <div className="title">
          <h1>calc</h1>
          
        </div>

        <div className="header">{calc || 0}</div>

        <div className="keys-container">
          <div className="keys">
            <button onClick={() => updateCalc("7")}>7</button>
            <button onClick={() => updateCalc("8")}>8</button>
            <button onClick={() => updateCalc("9")}>9</button>
            <button onClick={()=>handleDelete()} className="del-reset">DEL</button>
            <button onClick={() => updateCalc("4")} >4</button>
            <button onClick={() => updateCalc("5")}>5</button>
            <button onClick={() => updateCalc("6")}>6</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("1")}>1</button>
            <button onClick={() => updateCalc("2")}>2</button>
            <button onClick={() => updateCalc("3")}>3</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>x</button>
          </div>
          <div className="keys2">
            <button onClick={()=>handleReset()} className="del-reset">RESET</button>
            <button onClick={()=> handleEqual()} className="calculate">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
