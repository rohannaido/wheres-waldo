import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import StartGame from './components/StartGame';
// import waldo from './images/waldo.jpg'
// import wal

function App() {

  const [startGameDisplay, setStartGameDisplay] = useState(true);

  return (
    <div className="App">
      <div className='game-info-div'>
        <div className='character-list'>
          
          <div className='character-div'>
            <div className='character-image-div'>
              <img src="./images/waldo.jpg" alt='waldo' />
            </div>
            <span className='character-name'>Waldo</span>
          </div>
          <div className='character-div'>
            <div className='character-image-div'>
              <img src="./images/odlaw.jpg" alt='waldo' />
            </div>
            <span className='character-name'>Odlaw</span>
          </div>
          <div className='character-div'>
            <div className='character-image-div'>
              <img src='./images/wizard.jpg' alt='waldo' />
            </div>
            <span className='character-name'>Wizard</span>
          </div>

        </div>
      </div>

      <div className='game-image-div'>
        <img src='./images/level-1.jpg' />
      </div>
      <footer>
        Copyright © 2022 rohannaido 
        <a>
          <i className='fa-brands fa-github'></i>
        </a>
      </footer>

      {startGameDisplay && <StartGame setStartGameDisplay={setStartGameDisplay} />}
    </div>
  );
}

export default App;
