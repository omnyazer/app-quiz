import { useQuiz } from "../hooks/useQuiz";
import { Accordion } from "react-bootstrap";
import QuestionItem from "./QuestionItem";

function QuizAccordion({ selectedCategory }) {
  const { state } = useQuiz();

  console.log("State dans QuizAccordion :", state); 

  const filteredQuestions = state.filter(
    (question) => selectedCategory === "Toutes" || question.category === selectedCategory
  );

  return (
    <Accordion defaultActiveKey="0">
      {filteredQuestions.map((question, index) => (
        <Accordion.Item eventKey={index.toString()} key={question.id}>
          <Accordion.Header>
            {question.question}
            {question.validation !== null ? (
              <span style={{ marginLeft: "10px", color: question.validation ? "green" : "red" }}>
                {question.validation ? "Juste ✅" : "Faux ❌"}
              </span>
            ) : null}
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
