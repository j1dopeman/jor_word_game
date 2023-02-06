import React from "react";

function GuessBox({ disabled, handleEntry }) {
  const [text, setText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEntry(text);
    setText('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={disabled} id="guess-input" type="text" value={text} onChange={(e) => setText(e.target.value.toUpperCase())} />
    </form>
  );
}

export default GuessBox;
