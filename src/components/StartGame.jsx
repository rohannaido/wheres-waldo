import '../styles/StartGame.css'

const StartGame = (props) => {
    return (
        <div className="start-game-div">
            <div className='start-game-items-div'>
                <h1 className='start-game-text'>Find Waldo and his friends.</h1>
                <button className='start-game-btn' onClick={() => props.setStartGameDisplay(false)}>Start Game</button>
            </div>
        </div>
    )
}

export default StartGame;