import React from 'react';
import RA_ASSIGNMENT from './RA_assignment';
import FACULTY_PROFILE from './Faculty_Profile'

function App() {
  return (
    <div className="App">
      <div>
        <h1>RAs Assignment</h1>
        
        <p>
          <RA_ASSIGNMENT RA_Name = "Aisha Batool" CoursesAssigned="['Data Structures and Algorithms', 'Object Oriented Analysis and Design']"/>
        </p>

        <p>
          <RA_ASSIGNMENT RA_Name = "Talha Amin" CoursesAssigned="['Database Systems', 'Artifical Intelligence']"/>
        </p>

        <p>
          <RA_ASSIGNMENT RA_Name = "Abdullah Zafar" CoursesAssigned="['Programming Fundamentals', 'CS Freshman Seminar']"/>
        </p>

        <p>
          <RA_ASSIGNMENT RA_Name = "Talha Amin" CoursesAssigned="['Programming Fundamentals', 'Algorithms']"/>
        </p>        
      </div>

      <div>
      <h1>Faculty Profile</h1>
      
      <FACULTY_PROFILE facultyName = "ABC" education="Bachelors"></FACULTY_PROFILE>
      <FACULTY_PROFILE facultyName = "DEF" education="Masters"></FACULTY_PROFILE>
      <FACULTY_PROFILE facultyName = "GHI" education="PhD"></FACULTY_PROFILE>
      </div>
    
    </div>
  );
}

export default App;
