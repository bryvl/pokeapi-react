import React from 'react';
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header"
import MainContent from './components/MainContent';
import ApiBtnDiv from "./components/ApiBtnDiv";
import TeamFooter from './components/TeamFooter';

function App() { 
  let team = ["empty", "empty", "empty", "empty", "empty", "empty"];

  return (
    <div className="App">
      <Container>
        <Header></Header>
        <MainContent isRecruiting={true} />
        <TeamFooter team={team} />
      </Container>
    </div>
  );
}

export default App;
