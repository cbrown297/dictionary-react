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
            <div>
              {definitions.example && (
                <div className="example">{definitions.example}</div>
              )}
              {definitions.synonyms.length > 0 && (
                <div>
                  <Synonyms synonyms={definitions.synonyms} />
                </div>
              )}
            </div>
          </div>
        );
      })}
      {props.meaning.synonyms.length > 0 && (
        <div>
          <br />
          <strong>Synonyms:</strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      )}
    </div>
  );
}