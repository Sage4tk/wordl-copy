import { useEffect, useState } from "react"

export default function Row({ answer }) {

    const [split, setSplit] = useState("");

    useEffect(() => {
        setSplit(answer.split(""));
    },[answer])

    return (
        <div className="row">
            <div className="column">{split[0] ? split[0]:""}</div>
            <div className="column">{split[1] ? split[1]:""}</div>
            <div className="column">{split[2] ? split[2]:""}</div>
            <div className="column">{split[3] ? split[3]:""}</div>
            <div className="column">{split[4] ? split[4]:""}</div>
        </div>
    )
}