import React from 'react';

function Note({ note }) {
    return (
        <div>
            <div className="card z-depth-0 project-summary" key={note.id}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{note.description}</span>
                    <p>Created by {note.author}</p>
                    <p className="grey-text">{note.date}</p>
                </div>
            </div>
        </div>
    );
};

export default Note;
