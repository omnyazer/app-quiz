import { useState } from "react";
import FilterQuiz from "./components/FilterQuiz"; 
import QuizAccordion from "./components/QuizAccordion"; 

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  return (
    <div className="app-container">
      <h1>Quiz Interactif</h1>
      <FilterQuiz onCategoryChange={setSelectedCategory} />
      <QuizAccordion selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
