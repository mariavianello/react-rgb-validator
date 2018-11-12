import React, { Component } from 'react';
import './App.css';
import NetworkService from './services/network-services';
import {RgbaValidation} from './api/server';
import Button from './Button';
import DatabaseResults from './DatabaseResults';
import Input from './Input';
import Response from './Response';

 export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: '',
      isValid: undefined,
    };
  }

   _onReset = () => {
     this.setState({inputString: ''})
   }

   _handleInputChange = (event) => {
     event.preventDefault();
     const inputString = event.target.value;
     this.setState({
       inputString,
     });
   }

   _handleSubmit = async (event) => {
     alert('a rgb string was submitted: ' + this.state.inputString);
    // event.preventDefault();
    const networkResult = await NetworkService.request(RgbaValidation, {
      inputString: this.state.inputString,
   });
console.log(networkResult.data)
    if (networkResult.isSuccess) {
     this.setState({isValid: networkResult.data.result})
    }
     else {
      console.log(networkResult.error)
     }
   }

  render() {
    return (
      <div
      style={this.style()}>
        <h1>RGB & RGBA Validator</h1>
        <Input
          onChange={this._handleInputChange}
          value={this.state.inputString}
        />
        <Button
          onClick={this._handleSubmit}
        >
        Check
        </Button>
        <h2>Your Results</h2>
        <Response
        result={this.state.isValid}
        />
        <Button
        onClick={this._onReset}
        >
        Reset
        </Button>
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

