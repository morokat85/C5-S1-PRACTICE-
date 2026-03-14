import React, {useState} from "react";

export default function App() {
  const [score, setScore] = useState(1);
  
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = score * 10 + '%';

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if ( score <= 4) {
      scoreColor = `red`;
    }
    else if (score >= 5 && score<= 6) {
      scoreColor = `#f3bc47`;
    }
    else if (score >= 7 && score <= 10) {
      scoreColor = `green`;
    }
    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };
  
  return (
    <>
      <button OnClick={getScoreBarStyle}></button>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score}
          onChange={(s) => setScore(Number(s.target.value)) }
        ></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
