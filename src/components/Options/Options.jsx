import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Finland",
      handler: props.actionProvider.handleFinlandQuiz,
      id: 1,
    },
    { text: "Norway", 
      handler: props.actionProvider.handleNorwayQuiz, 
      id: 2, 
    },
    { text: "Ireland", handler: () => {}, id: 3 },
    { text: "Other countries", 
      handler: props.actionProvider.handleOtherCountriesQuiz, 
      id: 4, 
    },
  //{ text: "Germany", handler: () => {}, id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;