import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';

export default class Response extends Component {
  static propTypes = {
    result: PropTypes.bool,
  }

  renderResult() {
    if (this.props.result === undefined) {
      return ''
    }
    else {
      return this.props.result.toString()
    }

  }

  render() {
    return (
      <label >
        <p className="invisible">Results:</p>
        <div
          style={this.style()}
          className="Response">
          <p className="Result">{this.renderResult()}
          </p>
        </div>
      </label>
    );
  }
  style(){
    return {
      display: 'flex',
      justifyContent: 'center',
      height: '50px',
      margin: 'auto',
      borderStyle: 'solid',
      borderColor: '#ff007f',
      borderWidth: '3px',
      backgroundColor: '#f2f2f2',
      color: '#7700b2',
      width: '75%',
      borderRadius: '5px',
      fontSize: '25px',
    }
  }
}
