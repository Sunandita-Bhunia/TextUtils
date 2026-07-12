import React from 'react';
import { THEMES } from '../themes';

export default function About({ theme }) {
  const currentTheme = theme && theme.bg ? theme : THEMES[theme] || THEMES.light;

  const containerStyle = {
    color: currentTheme.text,
    backgroundColor: currentTheme.bg,
  };

  const accordionButtonStyle = {
    color: currentTheme.buttonText,
    backgroundColor: currentTheme.buttonBg,
    borderColor: currentTheme.buttonBg,
  };

  const accordionBodyStyle = {
    color: currentTheme.textareaText,
    backgroundColor: currentTheme.textareaBg,
    borderColor: currentTheme.textareaBorder,
  };

  return (
    <div className="container my-3" style={containerStyle}>
      <div className="accordion" id="accordionExample">
        <h1 className="my-3">About Us</h1>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={accordionButtonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionBodyStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={accordionButtonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionBodyStyle}>
              TextUtils is a free character counter tool that provites instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word or character limit.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={accordionButtonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionBodyStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
