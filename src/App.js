import { useState } from "react";
import "./index.css";

export default function App() {
  const [counter, setCounter] = useState(1)

  const messages = [
    "Page 1",
    "Page 2",
    "Page 3"
  ]

  const handleNext = () => {
    if (counter < 3) setCounter(counter + 1)
  }

  const handlePrev = () => {
    if (counter > 1) setCounter(counter - 1)
  }

  return (
    <div className="container">
      <div className="numbers">
        <div className={`${counter >= 1 && "active"}`}>1</div>
        <div className={`${counter >= 2 && "active"}`}>2</div>
        <div className={`${counter >= 3 && "active"}`}>3</div>
      </div>
      <div className="message">
        <p> {messages[counter - 1]} </p>
      </div>
      <div className="buttons">
        <button onClick={handlePrev}>👈 Previous</button>
        <button onClick={handleNext}>Next 👉</button>
      </div>
    </div>
  );
}
