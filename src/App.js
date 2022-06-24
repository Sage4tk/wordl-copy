import { useEffect, useState, useRef } from "react";

import "./styles.css"

import words from "./words";

//components
import Row from "./components/Row";

function App() {
  //win condition
  const [windCond, setWindCond] = useState(false);

  //check answer
  const [hidden, setHidden] = useState(words[Math.floor(Math.random() * words.length)]);

  //focus on input
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  //current row
  const [curRow, setCurRow] = useState(0);

  useEffect(() => {
    if (curRow === 6) {
      setWindCond(true)
    }
  }, [curRow])

  //row of answers
  const [rowAnswer, setRowAnswer] = useState(["","","","","",""]);

  //input handler
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value.toUpperCase());
  }

  useEffect(() => {
    let row = [...rowAnswer];
    row[curRow] = inputText;

    setRowAnswer(row);

  }, [inputText])

  //clear input with esc button
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setInputText(""); 
      }
    })
  }, [])

  //submit form
  const submitInput = (e) => {
    e.preventDefault();

    if (inputText.length < 5) {
      
    } else {
      if (curRow < 6) {
        setInputText("");
        setCurRow(curRow + 1);
      } 
    }
    
  }

  //restart button
  const restartGame = () => {
    setHidden(words[Math.floor(Math.random() * words.length)])
    setWindCond(false);
    setRowAnswer(["","","","","",""]);
    setCurRow(0);
    setInputText("");
  }

  useEffect(() => {
    if (!windCond) {
      inputRef.current.focus();
    }
  }, [windCond])

  return (
    <div className="App">
      <div className="container">
        {rowAnswer.map((data, index) => (
          <Row answer={data} key={index} hidden={hidden} curRow={curRow} index={index} setWindCond={setWindCond} />
        ))}
      </div>
      <form onSubmit={submitInput}>
        <input onChange={textHandler} value={inputText} minLength={5} maxLength={5} ref={inputRef} disabled={windCond} />
      </form>
      {windCond && <div className="show-word">{hidden}</div>}
      {windCond && <div className="restart"><p>The word is {hidden}</p><button onClick={restartGame}>New Word</button></div>}
    </div>
  );
}

export default App;
