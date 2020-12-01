import React from 'react';
import firebase from '../auth/firebaseConfig';

function AddNote() {
    function handleSubmit(e) {
        e.preventDefault();
        const { author, date, description } = e.target.elements;
        firebase.firestore().collection('notes').doc().set({ author: author.value, date: date.value, description: description.value });
        e.target.reset();
        description.setAttribute('style', '');
    }
    return (
        <div>
            <form className="col s4" id="addForm" onSubmit={handleSubmit}>
                <h3 className="grey-text text-darken-3 title">Add a note</h3>
                <div className="input-field">
                    <i className="material-icons prefix">person_outline</i>
                    <input type="text" id="author" required />
                    <label htmlFor="author">Author</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">today</i>
                    <input type="date" id="date" required />
                </div>
                <div className="input-field">
                    <i className="material-icons prefix">description</i>
                    <textarea id="description" className="materialize-textarea" required />
                    <label htmlFor="description">Description</label>
                </div>
                <div className="input-field">
                    <button className="btn green accent-4 lighent-1 z-depth-0">Add note</button>
                </div>
            </form>
        </div>
    );
};

export default AddNote;
