import { Button } from "react-bootstrap";
import { useQuiz } from "../hooks/useQuiz";

function QuestionItem({ question }) {
  const { dispatch } = useQuiz(); 


  const handleAnswer = (isCorrect) => {
    dispatch({ type: "VALIDATE_ANSWER", payload: { id: question.id, isCorrect } });
  };

  return (
    <div>
      <p><strong>Réponse :</strong> {question.answer}</p>
      <Button variant="success" onClick={() => handleAnswer(true)} disabled={question.isCorrect !== null}>
  Juste
</Button>
<Button variant="danger" onClick={() => handleAnswer(false)} disabled={question.isCorrect !== null} style={{ marginLeft: "10px" }}>
  Fausse
</Button>

    </div>
  );
}

export default QuestionItem;
