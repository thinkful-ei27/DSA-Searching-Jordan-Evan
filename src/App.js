import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    linearSearchCount: 0,
    binarySearchCount: 0,
    numbersArray: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53,
      55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56,
      44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87,
      28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27,
      97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13,
      17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
      49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
    ]
  }

  handleLinearSearch(e) {
    e.preventDefault();
    console.log(e)
    let count = this.linearSearch(e.target.value);
    this.setState({ linearSearchCount: count });
  }

  linearSearch(value) {
    const array = this.state.numbersArray;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) { return i + 1; }
    } return -1;
  };

  handelBinarySearch(e) {
    e.preventDefault();
    let count = this.binarySearch(e.target.value);
    this.setState({ binarySearchCount: count });
  }

  binarySearch(value, start, end, count = 1) {
    const array = this.state.numbersArray;
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    if (start > end) {
      return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    console.log(start, end);
    if (item == value) {
      return count;
    }
    else if (item < value) {
      return this.binarySearch(value, index + 1, end, count++);
    }
    else if (item > value) {
      return this.binarySearch(value, start, index - 1, count++);
    }
  };


  render() {
    return (
      <div className="App">
        <form>
          <input ref={input => (this.input = input)} placeholder="what number me findy?"></input>
          <button className="linear-search" type="submit" onClick={e => this.handleLinearSearch(e)}>Linear Search</button>
          <button className="binary-search" type="submit" onClick={e => this.handelBinarySearch(e)}>Binary Search</button>
        </form>
        <p>Linear Search Count = {this.state.linearSearchCount}</p>
        <p>Binary Search Count = {this.state.binarySearchCount}</p>
      </div>
    );
  }
}

export default App;
