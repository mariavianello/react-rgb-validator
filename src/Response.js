import React, { Component } from 'react';
import './App.css';

export default class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {result: ''};
  }

  render() {
    return (
      <label>
        Results:
        <div
          style={this.style()}
          className="Response">
        </div>
          <p className="Result">{this.state.result}
          </p>
      </label>
    );
  }
  style(){
    return {
      height: '50px',
      // backgroundColor: 'yellow',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: '2px',
      width: '100%',
      borderRadius: '5px',
      margin: '15px 15px',
    }
  }
}
