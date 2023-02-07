import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessBox from '../GuessBox';
import Guesses from '../Guesses';
import EndBanner from "../EndBanner"
import Keyboard from '../Keyboard';

import { checkGuess } from "../../game-helpers"

import { NUM_OF_GUESSES_ALLOWED, NUM_OF_CHARACTERS } from '../../constants'

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);

  const reset = () => {
    setHasWon(false);
    setGuesses([]);
    setAnswer(sample(WORDS))
  }

  const gameOver = (hasWon || guesses.length === NUM_OF_GUESSES_ALLOWED);
  let letterMap = {};

  for (let word of guesses) {
    for (let item of word) {
      if (item.status === 'correct')
        letterMap[item.letter] = item.status;
      if (item.status === 'misplaced' && letterMap[item.letter] !== 'correct')
        letterMap[item.letter] = item.status;
    }
  }

  return (
    <>
      {gameOver && <EndBanner hasWon={hasWon} answer={answer} restart={reset} />}
      <Guesses guessList={guesses} />
      <GuessBox disabled={gameOver} handleEntry={(guess) => {
        if (guess === answer)
          setHasWon(true);
        setGuesses([...guesses, checkGuess(guess.substring(0, NUM_OF_CHARACTERS), answer)])
      }
      } />
      <Keyboard letterMap={letterMap} />
    </>
  );
}

export default Game;
