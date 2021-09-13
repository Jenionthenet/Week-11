import { connect } from 'react-redux';
import '../styles/IncrementDecrementCounter.css'


function Counter(props) {



    const handleIncrement = () => {
        props.onIncrement()
    }

    const handlDecrement = () => {
        props.onDecrement()
    }

    return (
        <div id="addSubtractTitleDiv">
            <h2 id="incDecTitle">IncrementDecrementCounter</h2>
            <div id="buttonDiv">
            <button className="addSubtractBtns" onClick={handleIncrement}>Increment</button>
            <button className="addSubtractBtns" onClick={handlDecrement}>Decrement</button>
            </div>
        </div>
    );
}



const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    
    }
}

export default connect(null,mapDispatchToProps)(Counter)