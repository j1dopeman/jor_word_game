import React from "react";

import { range } from "../../utils";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guesses({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => <Guess key={i} word={guessList[i]} />)}
    </div>);
}

export default Guesses;
