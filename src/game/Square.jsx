import React, { cloneElement } from "react"
import "../App"

export default function Square() {
    return(
        <div className="Square" style={{
            border: '2px solid', 
            height: "100px", 
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
        
            <h5>X</h5>
        </div>
    )
}
