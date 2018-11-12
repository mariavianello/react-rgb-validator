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
      <label>
        Results:
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
