import React from 'react';
import NoteList from './notes/NoteList';
import AddNote from './notes/AddNote';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <AddNote />
                <div className="col s8">
                    <NoteList />
                </div>
            </div>
        </div>
    );
};

export default Home;
