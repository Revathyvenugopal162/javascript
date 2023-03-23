import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <div style={styles.container}>
        <div style={styles.leftBox}>
          <input
            type="text"
            placeholder="Enter your text here"
            value={inputText}
            onChange={handleInputChange}
            style={styles.inputStyle}
          />
        </div>
        <div style={styles.rightBox}>
          <div style={styles.preview}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>{inputText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  leftBox: {
    width: "40%",
    backgroundColor: "lightblue",
    padding: "2rem",
    borderRadius: "8px",
  },
  rightBox: {
    width: "40%",
    backgroundColor: "lightgreen",
    padding: "2rem",
    borderRadius: "8px",
  },
  inputStyle: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
    borderRadius: "4px",
    fontSize: "16px",
    outline: "none",
  },
  preview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default App;