import React, { Component } from "react";
import { useEffect } from 'react';


import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Auth, Hub } from 'aws-amplify'
function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

class App extends Component {
  
  render() {
    useEffect(() => {
      Hub.listen('auth', (data) => {
        const { payload } = data
        console.log('A new auth event has happened: ', data)
         if (payload.event === 'signIn') {
           console.log('a user has signed in!')
         }
         if (payload.event === 'signOut') {
           console.log('a user has signed out!')
         }
      })
    }, [])
    return (
      <div className="App">

                <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
 
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
