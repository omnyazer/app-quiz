import { Form } from "react-bootstrap";

function FilterQuiz({ onCategoryChange }) {
  return (
    <div className="filter-container">
      <Form.Label>Filtrer par catégorie</Form.Label>
      <Form.Select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="Toutes">Toutes</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="Histoire">Histoire</option>
      </Form.Select>
    </div>
  );
}

export default FilterQuiz;
