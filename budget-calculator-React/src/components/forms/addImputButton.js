import React, { Component } from "react";

class AddImputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArray: [{ name: "", value: "" }],
      currentInput: 0,
      showInputs: false
    };
  }

  handleNameChange = (e, index) => {
    let inputArray = [...this.state.inputArray];
    inputArray[index].name = e.target.value;
    this.setState({ inputArray });
  };

  handleValueChange = (e, index) => {
    let inputArray = [...this.state.inputArray];
    inputArray[index].value = e.target.value;
    this.setState({ inputArray });
    this.props.handleChange(e);
    <p>{JSON.stringify(e.id)}</p>
  };

  addInput = () => {
    if (this.state.showInputs === false)
      {
        this.setState({showInputs: true})
      }
      else {
        this.setState({
          inputArray: [...this.state.inputArray, { name: "", value: "" }],
          currentInput: this.state.currentInput + 1
        });
      }
  };
  

  enterValue = (input, index) => {
    return (<div>
      <p>Enter Value</p>
      <input value={input.value} id={this.state.inputArray.name} onChange={e => this.handleValueChange(e, index)} />
      <br />
  </div>   
  )

  }

  enterName = (input, index) => {
    return (
      <div key={index}>
        <p>Enter Name</p>
        <input value={input.name} onChange={e => this.handleNameChange(e, index)} />
        <button type="button" onClick={(input, index) => this.enterValue(input, index)}>add</button> 
      </div>
    );
  };


  render() {
    return (
      <div>
        {this.state.showInputs ? this.state.inputArray.map((input, index) => this.enterName(input, index)) : null}
        <br />
        <button type="button" onClick={this.addInput}>
          Add Input
        </button>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}

export default AddImputButton;
