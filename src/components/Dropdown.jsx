import '../styles/Dropdown.css'

const Dropdown = (props) => {

    const {showSelection, setShowSelection, checkCharacter, tableSelection} = props;

    const clickDropdown = (e, item) => {
        e.stopPropagation();
        setShowSelection((prev) => { return {...prev, show: false}});
        checkCharacter(item, tableSelection.row, tableSelection.col);
    }

    return (
        <div className="dropdown-div" style={{top: props.showSelection.y + 50, left: props.showSelection.x + 50}}>
            <div className='dropdown-item-div' 
                onClick={(e) => clickDropdown(e, "waldo")}>
                Waldo
            </div>
            <div className='dropdown-item-div'
                onClick={(e) => clickDropdown(e, "odlaw")}>
                Odlaw
            </div>
            <div className='dropdown-item-div'
                onClick={(e) => clickDropdown(e, "wizard")}>
                Wizard
            </div>
        </div>
    )
}

export default Dropdown;