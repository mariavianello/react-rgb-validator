import React, { Component } from 'react';
import './App.css';

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }
// https://codepen.io/alligatorio/pen/gxvdxo
  render() {
    return (
      <div>
      <button
      style={this.style()}
      onMouseDown={() => this.setState({isActive: true})}
      onMouseUp={() => this.setState({isActice: false})}
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
      backgroundColor: this.state.isActive ? 'black' : 'green',
      color: 'white',
      borderRadius: '5px',
      height: '20px',
      cursor: 'pointer',
    }
  }
}

