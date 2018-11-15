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
      textAlign: 'center',
      display: 'flex',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      // marginLeft: 'auto',
      // marginRight: 'auto',
      marginTop: '15px',
      width: '75%',
      backgroundColor: 'rgb(210,240,100)',
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: '3px',
      color: 'black',
      fontFamily: 'Josefin Sans, sans-serif',
      height: '35px',
      fontSize: '25px',
      borderRadius: '5px',
      cursor: 'pointer',
    }
  }
}

