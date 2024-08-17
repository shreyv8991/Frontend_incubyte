import React, { useState } from "react";
import { add } from "./StringCalculator";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(`Result: ${sum}`);
    } catch (e) {
      setResult(e.message);
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleCalculate}>Calculate Sum</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
