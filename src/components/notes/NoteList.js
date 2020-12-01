import React, { useState, useEffect } from 'react';
import firebase from '../auth/firebaseConfig';
import Note from './Note';

function NoteList() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    const db = firebase.firestore().collection('notes');

    function getNotes() {
        setLoading(true);
        db.orderBy('date', 'desc').onSnapshot((snapshot) => {
            const notes = [];
            snapshot.forEach((doc) => {
                notes.push(doc);
            });
            setNotes(notes);
            setLoading(false);
        });
    };

    function deleteNote(id) {
        db.doc(id).delete().catch(err => {
            console.log(err.message);
        })
    }

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <div></div>;
    }
    return (
        <div className="container">
            <h3 className="grey-text text-darken-3">Notes</h3>
            {notes.length ? notes.map(note => {
                return (
                    <Note note={note.data()} key={note.id} deleteNote={deleteNote} id={note.id} />
                );
            }) : <h5 className="grey-text">There are no notes.</h5>}
        </div>
    );
};

export default NoteList;
