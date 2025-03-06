import { createContext, useReducer } from "react";
import quizReducer from "../reducers/quizReducer";
import quizData from "../data/quizData";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, quizData);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
