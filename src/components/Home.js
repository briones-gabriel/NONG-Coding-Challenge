import React from 'react';
import NoteList from './notes/NoteList';
import AddNote from './notes/AddNote';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m4">
                    <AddNote />
                </div>
                <div className="col s12 m8">
                    <NoteList />
                </div>
            </div>
        </div>
    );
};

export default Home;
