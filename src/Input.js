import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  }

  render() {
    return (
      <div
      style={this.style()}>
        <label>
        Input String:
        <input
          type="text"
          placeholder="rgb or rgba string"
          value={this.props.value}
          // onChange={(e)=> this.props.onChange(e)}
          onChange={this.props.onChange}
          className="inputBox"
        />
        </label>
      <br/><br/>
      </div>
    );
  }
  style() {
    return {
      fontSize: '20px',
      height: '45px',
    }
  }
}
