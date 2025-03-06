import { useQuiz } from "../hooks/useQuiz";
import { Accordion } from "react-bootstrap";
import QuestionItem from "./QuestionItem";

function QuizAccordion({ selectedCategory }) {
  const { state } = useQuiz();

  // Filtrer les questions selon la catégorie sélectionnée
  const filteredQuestions = state.filter(
    (question) => selectedCategory === "Toutes" || question.category === selectedCategory
  );

  return (
    <Accordion defaultActiveKey="0">
      {filteredQuestions.map((question, index) => (
        <Accordion.Item eventKey={index.toString()} key={question.id}>
          <Accordion.Header>
            {question.question} 
            {typeof question.validation === "boolean" && (
              <span style={{ marginLeft: "10px", color: question.validation ? "green" : "red" }}>
                {question.validation ? "Juste ✅" : "Faux ❌"}
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
