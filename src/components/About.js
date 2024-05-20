import React from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#3c2aad',
    backgroundColor: props.mode === 'light' ? 'white' : '#3c2aad',
  };

  console.log(props.mode);
  console.log(myStyle);

  return (
    <div className="container" style={myStyle}>
      <h1 style={myStyle}>About us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Text Operations
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>Functionalities of Text Editor:</strong> Enter your text to analyze it directly in the text box provided. You can enable dark mode for better visibility in low light, convert texts to lowercase or uppercase, and remove extra spaces or capitalize each word for better formatting. 
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Text Summary and Tools
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <strong>Text Summary:</strong> The tool provides real-time statistics such as the number of characters, words, estimated time to speak, and read the text. These insights help in assessing the text quickly for various applications.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Additional Features
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>Additional Tools:</strong> Features include copying text to the clipboard with a single click and previewing the text entered. This makes it easy to manipulate and utilize the text as needed, enhancing productivity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
