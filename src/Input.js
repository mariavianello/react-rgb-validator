import React, { Component } from 'react';
import './App.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {input_string: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input_string: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Input String:
        <input
          type="text"
          placeholder="rgb or rgba string"
          value={this.state.input_string}
          onChange={this.handleChange}
        />
        </label>
      </form>
      <br/><br/>
      </div>
    );
  }
}
