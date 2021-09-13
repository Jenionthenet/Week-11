
import './styles/App.css';
import AddSubtractCounter from './components/AddSubtractCounter';
import DisplayCounter from './components/DisplayCounter';
import Counter from './components/IncrementDecrementCounter'
import { connect } from 'react-redux'

function App(props) {
  return (
    <div id="appDiv">
      <h1 id="appTitle">App</h1>
      <div id="counterRow">
        <Counter />
        <h1>{props.ctr}</h1>
        <AddSubtractCounter />
      </div>
      <div id="displayDiv">
        <DisplayCounter />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
}


export default connect(mapStateToProps)(App)
