import React, { useState } from "react";
import "./App.css";

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={toggleShow}>
        {question}
      </div>
      {show && (
        <div className="faq-item-body">
          <div className="faq-item-body-content">{answer}</div>
        </div>
      )}
    </div>
  );
};

const FaqAccordion = ({ data }) => {
  return (
    <div className="faq-accordion">
      <h2>Frequently Asked Question</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a front-end JavaScript library for building user interfaces or UI components."
  },
  {
    id: 2,
    question: "What is a component in React?",
    answer: "A component is a reusable piece of code that represents part of a user interface."
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe UI elements."
  },
  {
    id: 4,
    question: "How do you manage state in React?",
    answer: "State in React can be managed using the `useState` hook or libraries like Redux for complex applications."
  },
  {
    id: 5,
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight representation of the real DOM that React uses to optimize updates."
  },
 
];

function App() {
  return (
    <div className="app">
      <FaqAccordion data={data} />
    </div>
  );
}

export default App;
