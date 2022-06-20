import { useEffect, useState } from "react";

import "./styles.css"

//components
import Row from "./components/Row";

function App() {

  //current row
  const [curRow, setCurRow] = useState(0);

  //row of answers
  const [rowAnswer, setRowAnswer] = useState(["","","","","",""]);

  //input handler
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  }

  useEffect(() => {
    let row = [...rowAnswer];
    row[curRow] = inputText;

    setRowAnswer(row);

  }, [inputText])

  //submit form
  const submitInput = (e) => {
    e.preventDefault();
    console.log(inputText.length)
    if (inputText.length < 5) {
      
    } else {
      console.log("PLATYIN")
      setInputText("");
      setCurRow(curRow + 1);
    }
    
  }

  return (
    <div className="App" onClick={() => {console.log(rowAnswer)}}>
      <div className="container">
        {rowAnswer.map((data, index) => (
          <Row answer={data} key={index}/>
        ))}
      </div>
      <form onSubmit={submitInput}>
        <input onChange={textHandler} value={inputText} minLength={5} maxLength={5} />
      </form>
    </div>
  );
}

export default App;
