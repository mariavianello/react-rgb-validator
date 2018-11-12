import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: () =>{},
  }

  render() {
    return (
      <div>
      <button
      onClick = {()=> this.props.onClick()}
      style={this.style()}
      >
      {this.props.children}
      </button>
      </div>
    );
  }
  style() {
    return {
      margin: '0 auto',
      display: 'inline-flex',
      padding: '1.5vw, 2.5vw',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '5px',
      height: '20px',
      cursor: 'pointer',
    }
  }
}

