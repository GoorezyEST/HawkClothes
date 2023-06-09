import React from "react";
import "./FAQ.css";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={faq.open ? "open faq" : "faq"}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
}

export default FAQ;
