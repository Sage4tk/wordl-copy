import { useEffect, useState } from "react"

export default function Row({ answer, hidden, curRow, index }) {

    //check if already submitted
    const [submit, setSubmit] = useState([]);

    useEffect(() => {
        if (curRow > index) {
            setSubmit(wordlAlgo(hidden.split(""), answer.split("")));
        }
    }, [curRow]);

    const bgStyle = (arg) => {
        if (!arg) return;

        return {
            background: arg
        }
    } 

    return (
        <div className="row" onClick={() => {console.log(submit)}}>
            <div className="column" style={bgStyle(submit[0])} >{answer[0] ? answer[0]:""}</div>
            <div className="column" style={bgStyle(submit[1])} >{answer[1] ? answer[1]:""}</div>
            <div className="column" style={bgStyle(submit[2])} >{answer[2] ? answer[2]:""}</div>
            <div className="column" style={bgStyle(submit[3])} >{answer[3] ? answer[3]:""}</div>
            <div className="column" style={bgStyle(submit[4])} >{answer[4] ? answer[4]:""}</div>
        </div>
    )
}

const wordlAlgo = (realAnswer, userAnswer) => {
    let arrayA = [];

    for (let i = 0; i < realAnswer.length; i++) {
        if (realAnswer[i] === userAnswer[i]) {
            arrayA = [...arrayA, "green"];
            userAnswer[i] = null;
            realAnswer[i] = null;
        } else {
            arrayA = [...arrayA, null]
        }
    }

    for (let i = 0; i < realAnswer.length; i++) {
        if (realAnswer[i]) {
            if (userAnswer.includes(realAnswer[i])) {
                arrayA[userAnswer.indexOf(realAnswer[i])] = "yellow";
                realAnswer[i] = null;
            }
        }
    }

    return arrayA.map(e => {
        if (e === null) return "grey"
        return e
    });
}