import React, { useState } from 'react';
import './TextForm.css';

export default function TextForm({ showAlert, heading, theme }) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlert('Converted to upperCase!', 'success');
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    showAlert('Converted to lowerCase!', 'success');
  };

  const handleAlternateCase = () => {
    let newText = '';

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
    }

    setText(newText);
    showAlert('Converted to AlternetCase!', 'success');
  };

  const handleClearClick = () => {
    setText('');
    showAlert('Text Area is clear now!', 'success');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    showAlert('Copied to clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/\s+/).join(' ');
    setText(newText.trim());
    showAlert('Extra spaces removed!', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isEmpty = text.trim().length === 0;

  const buttonStyle = {
    '--btn-bg': theme.buttonBg,
    '--btn-hover': theme.buttonHover,
    '--btn-text': theme.buttonText,
  };

  const textareaStyle = {
    backgroundColor: theme.textareaBg,
    color: theme.textareaText,
    borderColor: theme.textareaBorder,
    '--btn-bg': theme.buttonBg,
  };

  const textStyle = { color: theme.text };

  const wordCount = text.trim().split(/\s+/).filter((word) => word !== "").length;

  return (
    <>
      <div className="container my-3" style={textStyle}>
        <form onSubmit={handleSubmit}>
          <h1 className='mb-4'>{heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control theme-textarea"
              value={text}
              placeholder="Enter text here"
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={textareaStyle}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn theme-btn mx-1 my-1"
            style={buttonStyle}
            onClick={handleUpClick}
            disabled={isEmpty}
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            className="btn theme-btn mx-1 my-1"
            style={buttonStyle}
            onClick={handleLoClick}
            disabled={isEmpty}
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            className="btn theme-btn mx-1 my-1"
            style={buttonStyle}
            onClick={handleAlternateCase}
            disabled={isEmpty}
          >
            Alternate Case
          </button>
          <button
            type="button"
            className="btn theme-btn mx-1 my-1"
            style={buttonStyle}
            onClick={handleClearClick}
            disabled={isEmpty}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn theme-btn mx-1 my-1"
            style={buttonStyle}
            onClick={handleCopyClick}
            disabled={isEmpty}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn theme-btn mx-1 my-1"
            style={buttonStyle}
            onClick={handleExtraSpaces}
            disabled={isEmpty}
          >
            Remove Extra Spaces
          </button>
        </form>
      </div>
      <div className="container my-2" style={textStyle}>
        <h1>Your text summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(3)} minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!!"}
        </p>
      </div>
    </>
  );
}
