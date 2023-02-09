import React, { Component } from "react";

class AddImputButton extends Component {

constructor(props) {
    super(props);
    this.state = {
        inputName: ['input0'],
        inputState: 0,
        inputNumber : 0
    }
}

switchState = () => {
    if (this.state.inputState === 2) {
        this.setState(prevState => {
            return {
              inputNumber: prevState.inputNumber + 1,
              inputName: [...prevState.inputName, 'input' + (Number(prevState.inputNumber) + 1)],
              inputState : 0
            };
          }); 
    }
    else {
        this.setState({inputState: this.state.inputState + 1});
    }
    
}        

inputCycle = () => {
    const inputState = this.state.inputState;
    
    switch(inputState) {
        case 0:
            return (
                <div>
                  <button type="button" onClick={this.switchState}>next</button>
                  <p>case 0</p>
                  <p>{JSON.stringify(this.state)}</p>
                </div>
              ) 
               
        case 1:
            return (
                <div>
                <button type="button" onClick={this.switchState}>next</button>;
                <p>case 1</p>
                <p>{JSON.stringify(this.state)}</p>
                </div>
            ) 
        case 2:
            return (
                <div>
                <button type="button" onClick={this.switchState}>next</button>;
                <p>case 2</p>
                <p>{JSON.stringify(this.state)}</p>
                </div>
            ) 
        default:
            return (
                <div>
                <button type="button" onClick={this.switchState}>next</button>;
                <p>Invalid</p>
                <p>{JSON.stringify(this.state)}</p>
                </div>
            ) 
    }

}

render() {
    return (
      <div>
        {this.state.inputName.map(input => (
          <this.inputCycle key={input} />
        ))}
      </div>
    );
  }
  


}


export default AddImputButton;
