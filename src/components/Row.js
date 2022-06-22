import { useEffect, useState } from "react"

export default function Row({ answer, hidden, curRow, index }) {

    //check if already submitted
    const [submit, setSubmit] = useState([]);

    useEffect(() => {
        if (curRow > index) {
            let sHidden = [...hidden.split("")];

            setSubmit(answer.split("").map((e, index) => {
                if (e === sHidden[index]) {
                    sHidden[index] = 0;
                    console.log(sHidden)
                    return "green";
                }
                
                return "grey"
            }))
        }
    }, [curRow]);

    return (
        <div className="row" onClick={() => {console.log(submit)}}>
            <div className="column">{answer[0] ? answer[0]:""}</div>
            <div className="column">{answer[1] ? answer[1]:""}</div>
            <div className="column">{answer[2] ? answer[2]:""}</div>
            <div className="column">{answer[3] ? answer[3]:""}</div>
            <div className="column">{answer[4] ? answer[4]:""}</div>
        </div>
    )
}