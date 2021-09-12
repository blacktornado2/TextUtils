import React, { useState } from 'react'                                       //useState hook helps us in creating a state variable


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

    // text = "Hello lala"                                                  //Wrong way to change state of text
    // setText("Hello , Lala")                                              //Correct way to change state of text

    return (
    <>
        <div className="container my-3">
            <h1>{props.heading}  </h1>
            <div className="mb-3 my-4">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-4">
            <h2>Your text summary</h2>
            <p>  words : {text.split(" ").length} and characters : {text.length}</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview </h2>
            <p>{text}</p>
        </div>

    </>
    )
}
