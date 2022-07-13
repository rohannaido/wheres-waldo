import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Selection from './components/Selection';
import StartGame from './components/StartGame';
// import waldo from './images/waldo.jpg'
// import wal

function App() {

  const [startGameDisplay, setStartGameDisplay] = useState(false);
  const [showSelection, setShowSelection] = useState({show: false, x: 56, y: 0});

  const imageClickHandler = (e) => {
    // console.log(e);
    setShowSelection({...showSelection,show: true, x: e.pageX - 32, y: e.pageY - 120})
    console.log(e.pageX + " : " + e.pageY);
  }

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


      <div className='game-image-div' onClick={(e) => imageClickHandler(e)}>
        <img src='./images/level-1.jpg' />
        {showSelection.show && <Dropdown showSelection={showSelection}/>}
        {showSelection.show && <Selection showSelection={showSelection}/>}
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
