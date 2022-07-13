import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Selection from './components/Selection';
import StartGame from './components/StartGame';

function App() {

  const tableArr = [];
  let i = 1
  while(i <= 36){
    tableArr.push(i);
    i++;
  }

  const [startGameDisplay, setStartGameDisplay] = useState(false);
  const [showSelection, setShowSelection] = useState({show: false, x: 56, y: 0});
  const [tableSelection, setTableSelection] = useState({row: 0, col: 0});

  const imageClickHandler = (e) => {
    setShowSelection({...showSelection,show: true, x: e.pageX - 32, y: e.pageY - 120})
  }

  const clickTableCell = (e) => {
    setTableSelection({row: +e.target.dataset.row, col: +e.target.dataset.col});
  }

  const checkCharacter = (character, row, col) => {
    if(character === "waldo"){
      if((col >=19 && col <= 20) && (row >=17 &&  row <= 19)){
        console.log("CORECNT WALDO");
      }
    }
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
        <table>
          {tableArr.map((i) => 
          <tr>
            {tableArr.map((j) => <td data-row={i} data-col={j} onClick={clickTableCell}></td>)}
          </tr>)
          }
        </table>
        {showSelection.show && <Dropdown showSelection={showSelection} setShowSelection={setShowSelection} 
        checkCharacter={checkCharacter} tableSelection={tableSelection} />}
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
