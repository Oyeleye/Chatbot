class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet = () => {
       const message = this.createChatBotMessage("Hello friend.");
       this.addMessageToState(message);
   };

   handleFinlandQuiz = () => {
    const message = this.createChatBotMessage(
        "Fantastic! Here are some FAQs about studying in Finland. Good luck!",
        {
            widget: "finlandQuiz",
        }
    );
    this.addMessageToState(message);
   };

   handleNorwayQuiz = () => {
    const message = this.createChatBotMessage(
        "Great! Go over some FAQs about studying in Norway. Good luck!",
        {
            widget: "norwayQuiz",
        }
    );
    this.addMessageToState(message);
   };

   handleIrelandQuiz = () => {
    const message = this.createChatBotMessage(
        "Nice one! Check out some FAQs about studying in Ireland. Good luck!",
        {
            widget: "irelandQuiz",
        }
    );
    this.addMessageToState(message);
   };

   handleOtherCountriesQuiz = () => {
    const message = this.createChatBotMessage(
        "Awesome. However, for now, I am only answering questions about studying in Finland, Germany and Ireland.",
        {
            widget: "otherCountriesQuiz",
        }
    );
    this.addMessageToState(message);
   };

   addMessageToState = (message) => {
       this.setState((prevState) => ({
           ...prevState,
           messages: [...prevState.messages, message],
       }));

   }
 }

 export default ActionProvider;