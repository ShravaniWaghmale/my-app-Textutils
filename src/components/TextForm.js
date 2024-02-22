import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = ()=>{
        //console.log("Uppercase was Clicked" + text);
        let newText = ('');
        setText(newText)
        props.showAlert("Text cleared","success");
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        //console.log("I'm copy");
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to Clipboard","success");
    }

    const handleExtraSpaces = () => {
        //console.log("Removes extra spaces");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }    


    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color :props.mode ==='dark' ? 'white' : '#042743'}}>
            <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode ==='dark' ? '#13466e' : 'white', color :props.mode ==='dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

        </div>
        <div className="container my-3" style={{color :props.mode ==='dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
