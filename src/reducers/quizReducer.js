const quizReducer = (state, action) => {
    switch (action.type) {
      case "VALIDATE_ANSWER":
        return state.map((question) =>
          question.id === action.payload.id
            ? { ...question, isCorrect: action.payload.isCorrect }
            : question
        );
  
      default:
        return state;
    }
  };
  
  export default quizReducer;
  