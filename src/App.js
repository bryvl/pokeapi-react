import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header"
import MainContent from './components/MainContent';
import ApiBtnDiv from "./components/ApiBtnDiv";
import TeamFooter from './components/TeamFooter';

function App() { 
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <MainContent isRecruiting={false} />
        <ApiBtnDiv />
        <TeamFooter />
      </Container>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
