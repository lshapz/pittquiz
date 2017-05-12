import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/quiz'
import Question from './components/question'


class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>Welcome to the Pitt Quiz</h1>
      <div>
        <Quiz />
      </div>
      </div>
    );
  }
}

export default App;
