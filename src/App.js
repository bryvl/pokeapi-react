import React, { useState } from 'react';
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header"
import MainContent from './components/MainContent';
import ApiBtnDiv from "./components/ApiBtnDiv";
import ApiBtn from "./components/ApiBtn"
import TeamFooter from './components/TeamFooter';
import Greeting from "./components/Greeting";
import PokeDisplay from "./components/PokeDisplay";

function App() { 
  const [isRecruitingTeam, setRecruitState] = useState(false);
  // const switchPage = React.useCallback(() => setRecruitState(true), [setRecruitState]);

  let apiPokemon = {
    name: "Terrakion",
    id: "000",
    sprite: "../../../terrakion_sprite.png",
    type: ["water", "flying"],
    stats: {
        hp: 100,
        attack: 100,
        defense: 100,
        specialAtk: 100,
        specialDef: 100,
        speed: 100
    },
    description: "This is an example description for the default Pokemon object. Just filler content here!"
}
function handleClick(e) {
  e.preventDefault();
  if(isRecruitingTeam === false) {
    setRecruitState(true);
    console.log("In this if statement, we're putting the API call to grab the Poke's");  
  } 
  
}

  return (
    <div className="App">
      <Container>
          <Header>
            <ApiBtnDiv>
              <ApiBtn handleBtnClick={handleClick}/>
            </ApiBtnDiv>
          </Header>
        <MainContent isRecruiting={isRecruitingTeam}>
          { isRecruitingTeam ? <PokeDisplay pokemon={apiPokemon}/> : <Greeting />}
        </MainContent>
        <TeamFooter />
      </Container>
    </div>
  );
}

export default App;
