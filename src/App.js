import React, {useState} from 'react';
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header"
import MainContent from './components/MainContent';
import ApiBtnDiv from "./components/ApiBtnDiv";
import TeamFooter from './components/TeamFooter';
import Greeting from "./components/Greeting";
import PokeDisplay from "./components/PokeDisplay";

function App() { 
  const [isRecruitingTeam, setRecruitingState] = useState(false);

  return (
    <div className="App">
      <Container>
          <Header>
            <ApiBtnDiv isRecruiting={isRecruitingTeam} />
          </Header>
        <MainContent isRecruiting={isRecruitingTeam}>
          { isRecruitingTeam ? <PokeDisplay /> : <Greeting />}
        </MainContent>
        <TeamFooter />
      </Container>
    </div>
  );
}

export default App;
