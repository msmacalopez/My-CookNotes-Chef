import ReactMarkdown from "react-markdown";
import React from "react";

const CookNotes = (props) => {
  return (
    <section className="formatting-recipe" aria-live="polite">
      <h2>CookNotes Recommends: </h2>
      <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
    </section>
  );
};

export default CookNotes;
