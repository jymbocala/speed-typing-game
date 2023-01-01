import React from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  return (
    <div className="app">
      <h1>Speed Typing Game</h1>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: 0</h4>
      <button onClick={() => console.log(calculateWordCount(text))}>Start Game</button>
      <h1>Word count: 0</h1>
    </div>
  );
}
