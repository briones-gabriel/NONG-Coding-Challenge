import React, { useState } from 'react';
import firebase from './firebaseConfig';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import SignIn from './components/SingIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/note/:id" component={FullNote} />
        <SignIn />
      </div>
    </BrowserRouter>
  );
}

export default App;
