import React from "react";

const layout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

function Keyboard({ letterMap }) {
  console.log(letterMap);
  return (
    <div>
      {layout.map((row, index) =>
        <p className="guess" key={index}>
          {row.map((item) => <span key={item} className={`cell ${letterMap[item]}`}>{item}</span>)}
        </p>)}
    </div>
  );
}

export default Keyboard;
