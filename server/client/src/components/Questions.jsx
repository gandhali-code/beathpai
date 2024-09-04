import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Questions.css";
import Sidebar from "./Sidebar";

function Questions() {
  const [currQs, setQs] = useState(0);
  const [answers, setAnswers] = useState(Array(42).fill(null));
  const [principleIndex, setPrincipleIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const principles = [
    "Principle 1: Responsibility",
    "Principle 2: Training",
    "Principle 3: Line of Separation",
    "Principle 4: Perimeter Buffer Area (PBA)",
    "Principle 5: Personnel",
    "Principle 6: Wild Birds, Rodents and Insects",
    "Principle 7: Equipment and Vehicles",
    "Principle 8: Mortality Disposal",
    "Principle 9: Manure and Litter Management",
    "Principle 10: Replacement Poultry",
    "Principle 11: Water Supplies",
    "Principle 12: Feed and Replacement Litter",
    "Principle 13: Reporting of Elevated Morbidity and Mortality",
    "Principle 14: Auditing"
  ];

  useEffect(() => {
    fetch("http://localhost:8000/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "All your history will be lost. Leave page?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleOptionChange = (index, choice) => {
    const currentPrinciple = principles[principleIndex];
  
    setAnswers((prev) => {
      const newAnswers = [...prev];
  
      // Update the current question's answer
      newAnswers[currQs + index] = choice;
  
     
     
  
      return newAnswers;
    });
  };
  

  const handleNext = () => {
    if (currQs < questions.length - 3) {
      setQs(currQs + 3);
      setPrincipleIndex(principleIndex + 1);
    } else {
      navigate('/results', { state: { answers, questions } });
    }
  };

  const handlePrevious = () => {
    if (currQs > 0) {
      setQs(currQs - 3);
      setPrincipleIndex(principleIndex - 1);
    }
  };

  const allQuestionsAnswered = () => {
    return answers.slice(currQs, currQs + 3).every(answer => answer !== null);
  };
  return (
    <div className="questions-container">
      <Sidebar activeIndex={principleIndex} />
      <div className="content">
        <div className="header">
          {principles.length > 0 && <h2>{principles[principleIndex]}</h2>}
        </div>
        {questions.length > 0 ? (
          questions.slice(currQs, currQs + 3).map((question, index) => (
            <div className="question-div" key={index}>
              <p>{question.Questions}</p>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name={`question-${currQs + index}`}
                    value="Yes"
                    checked={answers[currQs + index] === "Yes"}
                    onChange={() => handleOptionChange(index, "Yes")}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name={`question-${currQs + index}`}
                    value="No"
                    checked={answers[currQs + index] === "No"}
                    onChange={() => handleOptionChange(index, "No")}
                  />
                  No
                </label>
              </div>
            </div>
          ))
        ) : (
          <p>Loading questions...</p> // Fallback content if no questions are loaded yet
        )}
        <div className="button-container">
          <button
            className="previous-button"
            onClick={handlePrevious}
            disabled={currQs === 0}
          >
            Previous
          </button>
          <button
            className="next-button"
            onClick={handleNext}
            disabled={!allQuestionsAnswered()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Questions;


