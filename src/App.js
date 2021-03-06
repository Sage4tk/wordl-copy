import { useEffect, useState, useRef } from "react";

import "./styles.css"

//components
import Row from "./components/Row";

function App() {
  //win condition
  const [windCond, setWindCond] = useState(0);

  //check answer
  const [hidden, setHidden] = useState("EARTH");  

  //focus on input
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  //current row
  const [curRow, setCurRow] = useState(0);

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
      if (curRow < 5) {
        setInputText("");
        setCurRow(curRow + 1);
      }
    }
    
  }

  return (
    <div className="App">
      <div className="container">
        {rowAnswer.map((data, index) => (
          <Row answer={data} key={index} hidden={hidden} curRow={curRow} index={index} />
        ))}
      </div>
      <form onSubmit={submitInput}>
        <input onChange={textHandler} value={inputText} minLength={5} maxLength={5} ref={inputRef} />
      </form>
    </div>
  );
}

export default App;
