import React, {useState} from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
    };

    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
    };

    const handleOnChange = (event) => {
      setText(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
    };

  return (
    <>
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              placeholder='Enter text here'
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </form>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
