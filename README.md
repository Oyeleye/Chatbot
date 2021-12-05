This chatbot was built utilizing react chatbot kit. Here, I will merge my front-end expertisewith learning more about back-end functions, whilst exrapolating those in npm package to build interesting interfaces.

After creating react app, I started by installing react chatbot kit that I then imported the chatbot component to my App.js, where I also created a container with classname 'App' and style with 300px. The rest of the styling at that point in css was just to display a full dark background, where text-align, justify-content and align-items are all set to center, with a black background-color - #282c34, with a display flex, and with 100vh (making the container stands the entire height of the browseer window). This provides a full dark background where we can start working/ styling on.

Once you import Chabot component in your App.js, you will get the following message: "Ooops. Something is missing.
B

I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?
View the docs"

This message is just to let us know we are mssing some vital props in order to get the chatbot to work. It also gives us a link to the documentattion. <a href="https://fredrikoseberg.github.io/react-chatbot-kit-docs/"> View the docs </a>