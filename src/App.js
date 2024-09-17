import React from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message">Hello</p>
      <div className="buttons">
        <button
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
          }}
        >
          Prev
        </button>
        <button
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
