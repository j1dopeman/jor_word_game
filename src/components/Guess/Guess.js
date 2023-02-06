import React from "react";

import { range } from "../../utils";
import { NUM_OF_CHARACTERS } from "../../constants"

function Guess({ word }) {


  return (
    <p className="guess">
      {range(NUM_OF_CHARACTERS).map((index) => {
        if (!word || !word[index])
          return <span key={index} className="cell" />
        const { status, letter } = word[index];
        return <span key={index} className={`cell ${status}`}>{letter && letter}</span>
      })}
    </p>);
}

export default Guess;
