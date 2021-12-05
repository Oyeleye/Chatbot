import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';

import config from './chatbot/config';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';

function App() {
  return (
    <div className="App">
      <div className="App-header" style={{ maxwidth: "300px" }}>
        <Chatbot 
          config={config} 
          actionProvider={ActionProvider} 
          messageParser={MessageParser} 
        />
      </div>
    </div>
  );
}

export default App;
