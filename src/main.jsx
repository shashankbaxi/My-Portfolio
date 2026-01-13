import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* Always load page from top on refresh */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

/* Reveal animation for sections */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
