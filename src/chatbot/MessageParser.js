class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

      if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("bro") || 
          lowercase.includes("hey") || lowercase.includes("sup") || lowercase.includes("greetings") ||
          lowercase.includes("good morning") || lowercase.includes("good afternoon") || lowercase.includes("good evening")  
          ) 
          {
          this.actionProvider.greet();
      }

      if (lowercase.includes("thank") || lowercase.includes("thanks") || lowercase.includes("tnx")){
        this.actionProvider.handleThanks();
      }

      if (lowercase.includes("finland") || lowercase.includes("finnish")) {
          this.actionProvider.handleFinlandQuiz();
      }

      if (lowercase.includes("norway") || lowercase.includes("norwegian")) {
        this.actionProvider.handleNorwayQuiz();
      }

      if (lowercase.includes("ireland") || lowercase.includes("irish")) {
        this.actionProvider.handleIrelandQuiz();
      }

      if  (
            lowercase.includes("germany") || lowercase.includes("italy") || lowercase.includes("canada") ||
            lowercase.includes("australia") || lowercase.includes("sweden") || lowercase.includes("portugal") || 
            lowercase.includes("slovekia") || lowercase.includes("slovenia") || lowercase.includes("belgium") ||
            lowercase.includes("hungary") || lowercase.includes("france") || lowercase.includes("spain") ||
            lowercase.includes("czech republic") || lowercase.includes("czech") || lowercase.includes("austria") ||
            lowercase.includes("poland") || lowercase.includes("romania") || lowercase.includes("uk") || 
            lowercase.includes("united kingdom") || lowercase.includes("greece") || lowercase.includes("china")
          ) 
        {
        this.actionProvider.handleOtherCountriesQuiz();
      }
    }
  }
  
  export default MessageParser;