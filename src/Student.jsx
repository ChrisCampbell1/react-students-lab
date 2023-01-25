import Score from "./Score";

const Student = ( {student} ) => {
  return (  
    <div>
      <h3>{student.name}</h3>
      <p>{student.bio}</p>
      <ul>
      {student.scores.map((score, idx) =>
        <Score key={idx} score={score}/>
      )}
      </ul>
      
    </div>
  )
}

export default Student;
