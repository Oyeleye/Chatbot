class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

      if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("bro")) {
          this.actionProvider.greet();
      }

      if (lowercase.includes("finland") || lowercase.includes("finnish")) {
          this.actionProvider.handleFinlandQuiz();
      }

      if (lowercase.includes("norway") || lowercase.includes("norway")) {
        this.actionProvider.handleNorwayQuiz();
      }

      if  (
            lowercase.includes("germany") || lowercase.includes("italy") || lowercase.includes("canada") ||
            lowercase.includes("australia") || lowercase.includes("sweden") || lowercase.includes("portugal") || 
            lowercase.includes("slovekia") || lowercase.includes("slovenia") || lowercase.includes("belgium") ||
            lowercase.includes("hungary") || lowercase.includes("france") || lowercase.includes("spain") ||
            lowercase.includes("czech republic") || lowercase.includes("czech") || lowercase.includes("austria") ||
            lowercase.includes("poland") || lowercase.includes("romania") || lowercase.includes("uk") || lowercase.includes("united kingdom")
          ) 
        {
        this.actionProvider.handleOtherCountriesQuiz();
      }
    }
  }
  
  export default MessageParser;