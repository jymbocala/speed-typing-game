import React from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  return (
    <div className="app">
      <h1>Speed Typing Game</h1>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: 0</h4>
      <button>Start Game</button>
      <h1>Word count: 0</h1>
    </div>
  );
}
