import React from 'react';
// import firebase from './auth/firebaseConfig';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SignIn from './components/auth/SingIn';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <SignIn />
      </div>
    </BrowserRouter>
  );
}

export default App;
