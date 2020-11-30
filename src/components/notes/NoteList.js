import React from 'react';
import Note from './Note';

function NoteList() {
    const notes = [
        { id: 1, author: 'Gabriel', date: '25/10/20', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sed soluta laudantium laboriosam adipisci quas, non ex laborum corrupti nesciunt facilis." },
        { id: 2, author: 'Nataly', date: '24/10/20', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sed soluta laudantium laboriosam adipisci quas, non ex laborum corrupti nesciunt facilis." },
        { id: 3, author: 'Vida', date: '23/10/20', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sed soluta laudantium laboriosam adipisci quas, non ex laborum corrupti nesciunt facilis." },
        { id: 4, author: 'Sergio', date: '22/10/20', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sed soluta laudantium laboriosam adipisci quas, non ex laborum corrupti nesciunt facilis." },
    ];
    return (
        <div className="container">
            <h3 className="grey-text text-darken-3">Notes</h3>
            {notes.map(note => {
                return (
                    <Note note={note} key={note.id} />
                );
            })}
        </div>
    );
};

export default NoteList;
