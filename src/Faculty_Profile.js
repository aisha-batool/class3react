import React from 'react'

function FACULTY_PROFILE(props)
{
    var position = ""
    if (props.education === "Bachelors")
    {
        position = "Instructor"
    }
    else if (props.education === "Masters")
    {
        position = "Lecturer"
    }
    else if (props.education === "PhD")
    {
        position = "Professor"
    }

    return (
        <div>
            <b>{props.facultyName}</b> is hired for a position of <i>{position}</i>
        </div>
    );
}

export default FACULTY_PROFILE