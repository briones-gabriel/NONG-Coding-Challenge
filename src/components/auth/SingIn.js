import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import firebase from '../auth/firebaseConfig';
import { AuthContext } from '../auth/Auth';

function SingIn({ history }) {

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = e.target.elements;
        firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(() => {
            history.push('/');
        }).catch(err => {
            document.querySelector('.error').innerHTML = err.message;
        });
    };

    const { user } = useContext(AuthContext);

    if (user) {
        return <Redirect to="/" />
    }
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit} className="col s6 center push-s3">
                    <h3 className="grey-text text-darken-3">Sign In</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <div className="input-field">
                        <button className="btn green accent-4 lighent-1 z-depth-0">Login</button>
                        <p className="red-text error"></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withRouter(SingIn);
