import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Calculator.css"

function Calculator() {
  const [resultValue, setResultValue] = useState('0');
  
  const handleBtnClick = (buttonValue) => {
    if (resultValue === '0') {
      setResultValue(buttonValue);
    } else {
      setResultValue(resultValue + buttonValue);
    }
  };

  const handleCalculate = () => {
    // Adjust expression to handle numbers next to parentheses
    const adjustedExpression = resultValue.replace(/(\d)(\()/g, '$1*$2');

    try {
      // Create a new function that evaluates the adjusted expression
      const calculate = new Function(`return ${adjustedExpression}`);
      const answer = calculate();

      // Set the result value to "Ans = answer" and then reset to '0'
      setResultValue(`Ans = ${answer}\n0`);
    } catch (error) {
      setResultValue('Error');
    }
  };
  
  

  const handleClear = () => {
    setResultValue('0');
  };

  const handleDelete = () => {
    if (resultValue.length > 1) {
      setResultValue(resultValue.slice(0, -1));
    } else {
      setResultValue('0');
    }
  };

  return (
    <div className="container mt-5">
      <div className='row'>
        <div className='col-sm-4'>
        <div className="calculator">
            <h4>React Simple Calculator</h4>
            <input type="text" className="form-control mb-3" value={resultValue} readOnly />
            
            <div className="input-group">
                <button className="btn btn-outline-primary" onClick={() => handleBtnClick('(')}>(</button>
                <button className="btn btn-outline-primary" onClick={() => handleBtnClick(')')}>)</button>
                <button className="btn btn-outline-primary" onClick={() => handleBtnClick('%')}>%</button>
                <button className="btn btn-outline-primary" onClick={handleClear}>CE</button>
            </div>
            <div className="input-group">
                <button className="button-color" onClick={() => handleBtnClick('7')}>7</button>
                <button className="button-color" onClick={() => handleBtnClick('8')}>8</button>
                <button className="button-color" onClick={() => handleBtnClick('9')}>9</button>
                <button className="btn btn-outline-primary" onClick={() => handleBtnClick('/')}>/</button>
            </div>
            <div className="input-group">
                <button className="button-color" onClick={() => handleBtnClick('4')}>4</button>
                <button className="button-color" onClick={() => handleBtnClick('5')}>5</button>
                <button className="button-color" onClick={() => handleBtnClick('6')}>6</button>
                <button className="btn btn-outline-primary" onClick={() => handleBtnClick('*')}>*</button>
            </div>
            <div className="input-group">
                <button className="button-color" onClick={() => handleBtnClick('1')}>1</button>
                <button className="button-color" onClick={() => handleBtnClick('2')}>2</button>
                <button className="button-color" onClick={() => handleBtnClick('3')}>3</button>
                <button className="btn btn-outline-primary" onClick={() => handleBtnClick('-')}>-</button>
            </div>
            <div className="input-group">
            <button className="button-color" onClick={() => handleBtnClick('0')}>0</button>
                <button className="button-color" onClick={() => handleBtnClick('.')}>.</button>
                <button className="button-color-special" onClick={handleCalculate}>=</button>
                <button className="btn btn-outline-primary" onClick={() => handleBtnClick('+')}>+</button>
            </div>
            <div className="input-group">
              <button className="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;