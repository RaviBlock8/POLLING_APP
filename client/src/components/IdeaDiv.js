import React from 'react'

const IdeaDiv=(props)=>{
    const spanStyle={
        display:'inline-block',
        background:props.idea.hex,
        height:'20px',
        width:'20px',
        borderRadius:'50%',
        border:'1px solid black'
    }
    return (
        <div id={props.idea.id}>
            <p>{props.idea.name}<span id="dot" style={spanStyle}></span></p>
        </div>
    )
}



export default IdeaDiv
