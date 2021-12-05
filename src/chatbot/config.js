import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  initialMessages: [createChatBotMessage(`Hello. What would you like to learn?`, {
      widget: "options",
  }),
],

  widgets: [
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
        mapStateToProps: ["gist"],
      },
      {
        widgetName: "quiz",
        widgetFunc: (props) => <Quiz {...props} />,
        mapStateToProps: ["gist"],
      },
  ],
}

export default config