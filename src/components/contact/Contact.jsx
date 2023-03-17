import React, { useState } from "react";
import "./Contact.css";
import Nav from "../navbar/Nav";
import FAQ from "../faq_item/FAQ";

function Contact() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Hawk Clothes?",
      answer:
        "Hawk Clothes is an online clothing sales entrepreneurship. We offer to you a fresh and sophisticated style at the same time.",
      open: false,
    },
    {
      question: "How do I buy here?",
      answer:
        "Currently, to buy any of our products you can contact us at WhatsApp (555) 123-4567 or come to our store at 1234 Main Street, Anytown",
      open: false,
    },
    {
      question: "Can I order products online?",
      answer:
        "Only if you are from the United States. For this you must contact us through our WhatsApp (555) 123-4567 in order to coordinate the payment method and estimated shipping time based on where you reside.",
      open: false,
    },
    {
      question: "Do you offer discounts?",
      answer:
        "That's right, normally if you are already a regular customer of ours there will be discounts on your purchases. Also if you buy more than one item in a purchase the price will be reduced.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className="faq_section">
      <Nav />
      <div className="faq_content">
        {faqs.map((item, i) => {
          return <FAQ faq={item} key={i} index={i} toggleFAQ={toggleFAQ} />;
        })}
      </div>
    </section>
  );
}

export default Contact;
