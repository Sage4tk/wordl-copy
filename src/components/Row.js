import { useEffect, useState } from "react"

export default function Row({ answer, hidden, curRow, index, setWindCond }) {

    //check if already submitted
    const [submit, setSubmit] = useState([]);

    useEffect(() => {
        setSubmit([]);
    }, [hidden])

    useEffect(() => {
        if (curRow > index) {
            const colors = wordlAlgo(hidden.split(""), answer.split(""))

            setSubmit(colors);

            let winCheck = 0;

            colors.forEach((e) => {
                if (e === "#6AAA64") {
                    winCheck++;
                }
            })

            if (winCheck === 5) {
                setWindCond(true);
            }
        }
    }, [curRow]);

    const bgStyle = (arg) => {
        if (!arg) return;

        return {
            background: arg,
            color: "white",
            border: "none"
        }
    }

    if (index > 5) return (null);

    return (
        <div className="row">
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
            arrayA = [...arrayA, "#6AAA64"];
            userAnswer[i] = null;
            realAnswer[i] = null;
        } else {
            arrayA = [...arrayA, null]
        }
    }

    for (let i = 0; i < realAnswer.length; i++) {
        if (realAnswer[i]) {
            if (userAnswer.includes(realAnswer[i])) {
                arrayA[userAnswer.indexOf(realAnswer[i])] = "#C9B458";
                realAnswer[i] = null;
            }
        }
    }

    return arrayA.map(e => {
        if (e === null) return "#787C7E"
        return e
    });
}