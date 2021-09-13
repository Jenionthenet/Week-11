import { connect } from 'react-redux'

function DisplayCounter(props) {

    return (
        <div id="addSubtractTitleDiv">
            <h1>DisplayCounter</h1>
            <h1>{props.ctr}</h1>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)