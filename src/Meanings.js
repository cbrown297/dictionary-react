import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meanings(props) {
  return ( 
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definitions, index) {
        return (
          <div key={index}>
            <div className="definition">{definitions.definition}</div>
            <div className="example">{definitions.example}</div>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}