import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    };
  }

  handleChange(val) {
    this.setState({
      userInput: val,
    });
  }

  assignEvenAndOdds(userInput) {
    let evenArr = [];
    let oddArr = [];

    userInput.split(',').forEach((item) => {
      item % 2 === 0 ? evenArr.push(item) : oddArr.push(item);
    });

    this.setState({
      evenArray: evenArr,
      oddArray: oddArr,
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even And Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.assignEvenAndOdds(this.state.userInput)}
        >
          Split
        </button>
        <span className="resultsBox" value={this.state.evenArray}>
          ...
        </span>
        <span className="resultsBox" value={this.state.oddArray}>
          ...
        </span>
      </div>
    );
  }
}
export default EvenAndOdd;
