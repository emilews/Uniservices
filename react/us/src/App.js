import React, { Component } from 'react';
import Login from './Login';
import './App.css';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
