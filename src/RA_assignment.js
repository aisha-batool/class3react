import React from 'react'

function RA_ASSIGNMENT(props)
{
    var lstCourses = props.CoursesAssigned
    lstCourses = lstCourses.replace(/'/g, '"');
    lstCourses = JSON.parse(lstCourses);

    const coursesLst = lstCourses.map((course)=>{ 
        return <li>{course}</li>; 
    });

    return (
        <div>
            <b>{props.RA_Name}</b> will be assisting in:
            <ul>
                {coursesLst}
            </ul> 
        </div>
    );
}

export default RA_ASSIGNMENT