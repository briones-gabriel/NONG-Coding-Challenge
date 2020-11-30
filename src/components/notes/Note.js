import React from 'react';

function Note({ note }) {
    return (
        <div>
            <div className="card project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Created by {note.author} - {note.id}</span>
                    <p>{note.description}</p>
                    <p className="grey-text">{note.date}</p>
                </div>
            </div>
        </div>
    );
};

export default Note;
