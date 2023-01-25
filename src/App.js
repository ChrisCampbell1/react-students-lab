import { useState } from 'react';
import { studentsList } from './data';
import './App.css';
import Student from './Student';

function App() {
  const [students, setStudents] = useState(studentsList)
  
  return (
      <div className='container'>
        {students.map((student, idx) =>
        <Student key={idx} student={student}/>
          )}
      </div>
  );
}

export default App;
