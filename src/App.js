import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  addToState = (value) => {
    this.setState({
      input:this.state.input + value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToState}>7</Button>
            <Button handleClick={this.addToState}>8</Button>
            <Button handleClick={this.addToState}>9</Button>
            <Button handleClick={this.addToState}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToState}>4</Button>
            <Button handleClick={this.addToState}>5</Button>
            <Button handleClick={this.addToState}>6</Button>
            <Button handleClick={this.addToState}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToState}>1</Button>
            <Button handleClick={this.addToState}>2</Button>
            <Button handleClick={this.addToState}>3</Button>
            <Button handleClick={this.addToState}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToState}>.</Button>
            <Button handleClick={this.addToState}>0</Button>
            <Button handleClick={this.addToState}>=</Button>
            <Button handleClick={this.addToState}>+</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ''})}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
