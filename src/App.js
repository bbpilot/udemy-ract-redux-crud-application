import React, { Component } from 'react';


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTimesButton = () => {
    this.setState({ count: this.state.count * this.state.count })
  }
  handleResetButton = () => {
    this.setState({ count: 0 })
  }
  render() {
    return (
      <>
        <div>counter:{this.state.count}</div>
        <button onClick={this.handlePlusButton} >+1</button>
        <button onClick={this.handleMinusButton} >-1</button>
        <button onClick={this.handleTimesButton} >*1</button>
        <button onClick={this.handleResetButton} >reset</button>
      </>
    )
  }
}

export default App;
