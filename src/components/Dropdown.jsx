import '../styles/Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className="dropdown-div" style={{top: props.showSelection.y + 50, left: props.showSelection.x + 50}}>
            <div className='dropdown-item-div'>Waldo</div>
            <div className='dropdown-item-div'>Odlaw</div>
            <div className='dropdown-item-div'>Wizard</div>
        </div>
    )
}

export default Dropdown;