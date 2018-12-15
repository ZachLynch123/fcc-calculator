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

  concatonateState = (value) => {
    this.setState({
      input:this.state.input + value
    });
  }

  handleEqual = () => {
    try{
      this.setState({
        // eslint-disable-next-line
        input: eval(this.state.input)
      })
    }catch(e){
      this.setState({
        input: 'ERR'
      })
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.concatonateState}>7</Button>
            <Button handleClick={this.concatonateState}>8</Button>
            <Button handleClick={this.concatonateState}>9</Button>
            <Button handleClick={this.concatonateState}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatonateState}>4</Button>
            <Button handleClick={this.concatonateState}>5</Button>
            <Button handleClick={this.concatonateState}>6</Button>
            <Button handleClick={this.concatonateState}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatonateState}>1</Button>
            <Button handleClick={this.concatonateState}>2</Button>
            <Button handleClick={this.concatonateState}>3</Button>
            <Button handleClick={this.concatonateState}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatonateState}>.</Button>
            <Button handleClick={this.concatonateState}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.concatonateState}>+</Button>
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
