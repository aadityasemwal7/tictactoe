import React, { useState } from "react"
import Square from "./Square"
import "../App"

export default function Board(){
    const [state, setState] = useState(Array(9).fill(null))
    
    
    return(
        <div className="board-container">
            <div className="board-row">
            <Square />
            <Square />
            <Square />
            </div>
            <div className="board-row">
            <Square />
            <Square />
            <Square />
            </div>
            <div className="board-row">
            <Square />
            <Square />
            <Square />
            </div>
        </div>
    )
}