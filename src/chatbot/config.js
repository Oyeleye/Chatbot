import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";



const config = {
  botName: "Oxygeneleye TV",
  initialMessages: [
    createChatBotMessage(`Hello. Thanks for visiting my YouTube channel. What country would you like to know about?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "finlandQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What are admission requirements in Finland? CLICK ME",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "What are requirements for proof of funds in Finland?",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
          {
            question: "What are requirements for proof of English proficiency in Finland?",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 3,
          },
          {
            question: "What can I study in Finland?",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 4,
          },
          {
            question: "List of degree programmes?",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 5,
          },
          {
            question: "Is education free in Finland?",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 6,
          },
          {
            question: "How do I apply for scholarships in Finland?",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 7,
          },
          {
            question: "List of universities in Finland.",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 8,
          },
          {
            question: "What are useful links about sudying and student visa application process in Finland?",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 9,
          },
          {
            question: "When is admissin period in Finland?",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 10,
          },
        ],
      },
    },
  ],
};

export default config;