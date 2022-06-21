import { useEffect, useState } from "react"

export default function Row({ answer, hidden, curRow, index }) {

    //check if already submitted
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (curRow > index) {
            setSubmit(true);
        }
    }, [curRow]);

    const colorCells = (bool, letter1, letter2) => {
        if (bool) {
            if (letter1 === letter2) {
                return {
                    background: "green"
                }
            } else if (hidden.includes(letter1)) {
                return {
                    background: "yellow"
                }
            } else {
                return {
                    background: "grey"
                }
            }
        }
    }

    return (
        <div className="row">
            <div className="column" style={colorCells(submit, answer[0], hidden[0])} >{answer[0] ? answer[0]:""}</div>
            <div className="column" style={colorCells(submit, answer[1], hidden[1])} >{answer[1] ? answer[1]:""}</div>
            <div className="column" style={colorCells(submit, answer[2], hidden[2])} >{answer[2] ? answer[2]:""}</div>
            <div className="column" style={colorCells(submit, answer[3], hidden[3])} >{answer[3] ? answer[3]:""}</div>
            <div className="column" style={colorCells(submit, answer[4], hidden[4])} >{answer[4] ? answer[4]:""}</div>
        </div>
    )
}