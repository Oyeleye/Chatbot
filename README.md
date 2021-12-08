<h2>
<a href="https://chat-bot-8a023.firebaseapp.com/">My Chat Bot</a>
</h2>

![chatbot for gif](https://user-images.githubusercontent.com/44131391/145288380-b3ba2687-9f04-4d61-8169-c4d4ff09d348.gif)

This chatbot was built utilizing react chatbot kit. Hence, I installed react chatbot kit, as a dependence. Here, I will merge my front-end expertisewith learning more about back-end functions, whilst exrapolating those in npm package to build interesting interfaces.

After creating react app, I started by installing react chatbot kit that I then imported the chatbot component to my App.js, where I also created a container with classname 'App' and style with 300px. The rest of the styling at that point in css was just to display a full dark background, where text-align, justify-content and align-items are all set to center, with a black background-color - #282c34, with a display flex, and with 100vh (making the container stands the entire height of the browseer window). This provides a full dark background where we can start working/ styling on.

<bold> Note </bold> that React-chatbot-kit 2.0 is out, and to allow for more customazibility, the css now has to be imported to your App.js, if you want it. Hence, simply import 'react-chatbot-kit/build/main.css';

Once you import Chatbot component in your App.js, you will get the following message: "Ooops. Something is missing. With this, we should be able to get a response in the chatbot once we type in "hello"
B

I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?
View the docs"

This message is just to let us know we are mssing some vital props in order to get the chatbot to work. It also gives us a link to the documentattion. <a href="https://fredrikoseberg.github.io/react-chatbot-kit-docs/"> View the docs </a>

This documentation provide overview with what to be done to get the chatbot to work. There islso a working instance of the chatbot on the right hand side, that you can use to have a good idea od how it works and if you are curious about other pieces of the Chatbot, ypu can explore more, nabvigate and get some answers, as well. In the documentation, under "Quickstart", there is a link to <a href="https://gist.github.com/FredrikOseberg/c1e8ec83ade6e89ca84882e33caf599c"> Go to gist</a>; that takes you to a github page for chatbot code, where you  get all you need to get started. 

Afterwards, I created files for Config, MessageParser, MessageParser and ActionProvider, all in a chatbot folder, and then copy each piece from that github inside their respective component. After pasting those codes in each component, I imported each component to App.js, then parse in the props in Chatbot component. This keeps the bot up and running, with a basic "hello worl" message from the chatbot. At ths point, we can write something in the chatbot, but won't get response since we haven't configured something in the chatbot, yet.

The config is basically js file with list of configurable properties for the chatbot. Working on the config component, I added an object name botName with strong "LearningBot". The config already has initialMessages array and uses a hyper function from react-chatbot-kit that creates message objects. This can be created from scratch, but it's easier to use this react hyperfunctions. You can do lots more with the config. E.g., you can inject states, swap out components, change the colour of different components. These are all documented in the documentation, if you need to explore more about every configurable property.

The MessageParser is the component that handles parsing the user input. So, whenever you type something into the input field and hit "send", the message is picked up and runs through this message parser. That means  you are free to implement a very complex message parser or a very simple one. This completely depends on your needs. Every message runs through this MessageParser component. So, all the logic needs to be implemented there. However, you are free to structure it however you want in this component.

Inside the ActionProvider component,a constructor can be seen. The ActionProvider is what we will use to update the internal state of the chatbot. Hence, inside the ActionProvider, we have createChatBotMessage and setState, where setState is a function passed from the chatbot component and injected to the ActionProvider that you provide.So, when you give this class to the ChatBot, this class is initialized in the ChatBot and it will inject the createChatBotMessage and setState.

In message parser, I will then lowercase the message, with a simple check using conditional statement (i.e. if lowercase include "hello", then greet). Then create "greet" method in ActionProvider component to make this work. I also created addtMessageToState. Under "greet" method, I added const message that I initially passed in addMessageToState, where I added this.createChatBotMessage("Hello friend."), to create message object. Then, we want to take that message object created to update the chatbot state. To do this, I used the setState function. However, we also need to be mindful of the fact that we have access to the entire chatbot state, with this function. Sp, we always need to make sure that we are preserving the previous state when we are updating. Hence, this code    addMessageToState = (message) => {
       this.setState((prevState) => ({
           ...prevState,
           messages: [...prevState.messages, message],
       }));

Now, we have a way to update the chatbot state. Then I used the hyper method and parse in the message under "greet" method, i.e. this.addMessageToState(message);. Now, we should get "Hello friend." response when we input "hello".


I created components folder with 2 other folders (named Options and Quiz) inside it, where "Options" folder contains Options.css & Options.jsx, and "Quiz" folder contains FlashCard.jsx, Quiz.css & Quiz.jsx