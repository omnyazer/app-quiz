import { useQuiz } from "../hooks/useQuiz";
import { Button } from "react-bootstrap";

function QuestionItem({ question }) {
  const { dispatch } = useQuiz();

  const handleAnswer = (isCorrect) => {
    dispatch({ type: "VALIDATE_ANSWER", payload: { id: question.id, isCorrect } });
  };

  return (
    <div>
      <p><strong>Réponse :</strong> {question.answer}</p>
      <Button variant="success" onClick={() => handleAnswer(true)} disabled={question.validation !== null}>
        Juste
      </Button>
      <Button variant="danger" onClick={() => handleAnswer(false)} disabled={question.validation !== null}>
        Fausse
      </Button>
    </div>
  );
}

export default QuestionItem;
