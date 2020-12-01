import React from 'react';

function Note({ note, id, deleteNote }) {
    return (
        <div>
            <div className="card" >
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Created by {note.author}</span>
                    <p className="grey-text">{note.date}</p>
                    <p>{note.description}</p>
                    <div className="right-align">
                        <button className="btn-flat waves-effect waves-green accent-4" onClick={() => { deleteNote(id) }}>Delete note</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Note;
