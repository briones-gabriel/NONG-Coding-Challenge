import React from 'react'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <form>
                        <h5 className="grey-text text-darken-3">Add a note</h5>
                        <div className="input-field">
                            <label htmlFor="author">Author</label>
                            <input type="text" id="author" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="description">description</label>
                            <input type="text" id="description" />
                        </div>
                        <div className="input-field">
                            <button className="btn blue lighent-1 z-depth-0">Add note</button>
                        </div>
                    </form>
                </div>
                <div className="col s12 m6">

                </div>
            </div>
        </div>
    );
};

export default Home;
