import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return ( 
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definitions, index) {
        return (
          <div key={index}>
            <div><strong>Definition:</strong>{definitions.definition}</div>
            <div>
              <strong>Example:</strong>
              <em>{definitions.example}</em>
            </div>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}