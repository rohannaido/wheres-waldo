import '../styles/Selection.css'

const Selection = (props) => {
    return (
        <div className="selection-div" style={{top: props.showSelection.y, left: props.showSelection.x}} >

        </div>
    )
}

export default Selection;