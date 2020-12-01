import React from 'react';
// import firebase from './auth/firebaseConfig';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SignIn from './components/auth/SingIn';
import Home from './components/Home';
import { AuthProvider } from './components/auth/Auth';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
