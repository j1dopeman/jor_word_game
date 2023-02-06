import React from "react";

function EndBanner({ hasWon, restart }) {
  const ResetButton = () => <button type="button" onClick={restart}>Play Again</button>
  return (
    hasWon ?
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
        <ResetButton />
      </div>
      :
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
        <ResetButton />
      </div>
  );
}

export default EndBanner;
