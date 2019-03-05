import React, { Component } from 'react';
import TopNav from './TopNav';
import './App.css';
import Footer from './Footer'
import { LoginForm } from 'react-form-login';

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm
          onSubmit={(username, password, isRemember) => {
            // Sending AJAX request ...
            console.log(username, password, isRemember);
          }}
        />

        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
