import React from "react";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

function Note(){
    return(
        <div className="note">
            <h1>Note Title</h1>
            <p>Content of the Note</p>
        </div>

    );
}

export default Note;