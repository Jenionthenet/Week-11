import { connect } from 'react-redux'
import { useState } from 'react'
import '../styles/AddSubtractCounter.css'

function AddSubtractCounter(props) {

    const [counter, setCounter] = useState('')

    const handleOnChange = (e) => {
        const count = e.target.value
        setCounter(count)
    }

    const handleAddCounter = () => {
        props.onAddCounter(parseInt(counter))
        setCounter('')
    }

    const handleSubtractCounter = () => {
        props.onSubtractCounter(parseInt(counter))
        setCounter('')
    }


    return (
        <div id="addSubtractTitleDiv">
            <h2 id="addSubtractTitle">AddSubtractCounter</h2>
            <input id = "inputBox" type="text" value={counter} onChange={handleOnChange} />
            <div id="buttonDiv">
                <button className="addSubtractBtns" onClick={handleAddCounter}>Add</button>
                <button className="addSubtractBtns" onClick={handleSubtractCounter}>Subtract</button>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCounter: (value) => dispatch({ type: 'ON_ADD_COUNTER', payload: value }),
        onSubtractCounter: (value) => dispatch({ type: 'ON_SUBTRACT_COUNTER', payload: value })
    }
}



export default connect(null, mapDispatchToProps)(AddSubtractCounter)