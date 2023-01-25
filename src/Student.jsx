import { useState } from "react";
import Score from "./Score";

const Student = ( {student} ) => {
  const [showScores, setShowScores] = useState(false)

  function handleShowScores() {
    setShowScores(!showScores)
  }
  
  return (  
    <div className="studentCard">
      <h3>{student.name}</h3>
      <p>{student.bio}</p>
      <button onClick={handleShowScores}>
        {showScores ? "Hide Scores" : "Show Scores"}
      </button>
      {showScores && <ul>
      {student.scores.map((score, idx) =>
        <Score key={idx} score={score}/>
      )}
      </ul>}

      
    </div>
  )
}

export default Student;
