import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Selection from './components/Selection';
import StartGame from './components/StartGame';
import GameOver from './components/GameOver';

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgD5-5AO16kdGHyWMKfH-aTJvvyiQpmi4",
  authDomain: "wheres-waldo-fe518.firebaseapp.com",
  projectId: "wheres-waldo-fe518",
  storageBucket: "wheres-waldo-fe518.appspot.com",
  messagingSenderId: "628554283148",
  appId: "1:628554283148:web:eb7f1916d076daeeb7a3a9"
};

initializeApp(firebaseConfig);


const getCharacterData = async (characterName) => {
  const docRef = doc(getFirestore(), "correctLocation", characterName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

function App() {

  useEffect(() => {
    const populateCharacterData = async (characterName) => {
    const data = await getCharacterData(characterName);
      setCharacterData((prev) => {
        prev[characterName] = data;
        return prev;
      });
    }
    populateCharacterData("waldo");
    populateCharacterData("odlaw");
    populateCharacterData("wizard");
  }, []);

  const [characterData, setCharacterData] = useState({ waldo : {}, odlaw : {}, wizard : {}});

  const tableArr = [];
  let i = 1
  while(i <= 36){
    tableArr.push(i);
    i++;
  }

  const [startGameDisplay, setStartGameDisplay] = useState(false);
  const [showSelection, setShowSelection] = useState({show: false, x: 0, y: 0});
  const [tableSelection, setTableSelection] = useState({row: 0, col: 0});
  const [charactersArr, setCharactersArr] = useState([
    {name: "waldo", found: false}, 
    {name: "odlaw", found: false}, 
    {name: "wizard", found: false}]);

  const imageClickHandler = (e) => {
    setShowSelection({...showSelection,show: true, x: e.pageX - 32, y: e.pageY - 120})
  }

  const clickTableCell = (e) => {
    setTableSelection({row: +e.target.dataset.row, col: +e.target.dataset.col});
  }

  const checkCharacterLocation = (characterName, row, col) => {
    return (col >=characterData[characterName].col1 && col <= characterData[characterName].col2) && (row >=characterData[characterName].row1 &&  row <= characterData[characterName].row2)
  } 

  const checkCharacter = (character, row, col) => {
    if((character === "waldo") && checkCharacterLocation("waldo", row, col)){
      setCharactersArr((prev) => {
        prev[prev.map((item) => item.name).indexOf("waldo")].found = true;
        return prev;
      });
    }
    else if((character === "odlaw") && checkCharacterLocation("odlaw", row, col)){
      setCharactersArr((prev) => {
        prev[prev.map((item) => item.name).indexOf("odlaw")].found = true;
        return prev;
      });
    }
    else if((character === "wizard") && checkCharacterLocation("wizard", row, col)){
      setCharactersArr((prev) => {
        prev[prev.map((item) => item.name).indexOf("wizard")].found = true;
        return prev;
      });
    }
  }

  const hideCharacterIfFound = (characterName) => {
    if(charactersArr[(charactersArr.map((item) => item.name)).indexOf(characterName)].found){
      return 'found-character';
    }
    return '';
  }

  return (
    <div className="App">
      <div className='game-info-div'>
        <div className='character-list'>
          
          <div className={'character-div ' + hideCharacterIfFound("waldo")}>
            <div className='character-image-div'>
              <img src="./images/waldo.jpg" alt='waldo' />
            </div>
            <span className='character-name'>Waldo</span>
          </div>
          <div className={'character-div ' + hideCharacterIfFound("odlaw")}>
            <div className='character-image-div'>
              <img src="./images/odlaw.jpg" alt='odlaw' />
            </div>
            <span className='character-name'>Odlaw</span>
          </div>
          <div className={'character-div ' + hideCharacterIfFound("wizard")}>
            <div className='character-image-div'>
              <img src='./images/wizard.jpg' alt='wizard' />
            </div>
            <span className='character-name'>Wizard</span>
          </div>

        </div>
      </div>


      <div className='game-image-div' onClick={(e) => imageClickHandler(e)}>
        <img src='https://firebasestorage.googleapis.com/v0/b/wheres-waldo-fe518.appspot.com/o/level-1.jpg?alt=media&token=36d29993-7cbe-4403-ac87-250a4f6dcdac' />
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

      {!(charactersArr.filter((item) => item.found === false).length) && <GameOver />}
      {startGameDisplay && <StartGame setStartGameDisplay={setStartGameDisplay} />}
    </div>
  );
}

export default App;
