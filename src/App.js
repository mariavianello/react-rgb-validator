import React, { Component } from 'react';
import './App.css';
import Button from './Button'
import DatabaseResults from './DatabaseResults'
import Input from './Input'
import Response from './Response'

 export default class App extends Component {
  render() {
    return (
      <div
      style={this.style()}>
      <h1>RGB & RGBA Validator</h1>
        <Input />
        <Button>Check</Button>
      <h2>Your Results</h2>
        <Button>Reset</Button>
        <Response />
      <h2>All Inputs and Responses</h2>
        <DatabaseResults />
      </div>
    );
  }
   style() {
     return {
       display: 'flex',
       justifyContent: 'space-around',
       // alignItems: 'center',
       flexDirection: 'column',
       // flexWrap: 'wrap',
       margin: '15px auto',

     }
   }
}

