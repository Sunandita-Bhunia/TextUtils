import React, {useState} from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
    };

    const handleOnChange = (event) => {
      setText(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
    };

  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </form>
    </div>
  )
}
