import React, { cloneElement } from "react"
import "../App"

export default function Square(props) {
    
    return(
        <div className="Square" 
        onClick={props.onClick}
        style={{
            border: "2px solid", 
            height: "100px", 
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
        
            <h5>{props.value}</h5>
        </div>
    )
}
