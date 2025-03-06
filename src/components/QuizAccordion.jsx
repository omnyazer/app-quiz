import { Accordion, Card, Button } from "react-bootstrap";
import { QuizContext } from "../context/QuizContext";
import QuestionItem from "./QuestionItem";
import { useQuiz } from "../hooks/useQuiz";

function QuizAccordion({ selectedCategory }) {
  const { state } = useQuiz(); 


  const filteredQuestions = state.filter(
    (question) => selectedCategory === "Toutes" || question.category === selectedCategory
  );

  return (
    <Accordion defaultActiveKey="0">
      {filteredQuestions.map((question, index) => (
        <Accordion.Item eventKey={index.toString()} key={question.id}>
          <Accordion.Header>
            {question.question} {question.isCorrect !== null && (
              <span style={{ marginLeft: "10px", color: question.isCorrect ? "green" : "red" }}>
                {question.isCorrect ? "Juste ✅" : "Faux ❌"}
              </span>
            )}
          </Accordion.Header>
          <Accordion.Body>
            <QuestionItem question={question} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default QuizAccordion;
