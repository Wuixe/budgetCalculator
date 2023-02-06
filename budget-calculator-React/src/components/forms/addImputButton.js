import React, { Component } from "react";

class AddImputButton extends Component {

constructor(props) {
    super(props);
    this.state = {
        inputName: '',
        inputState: 0,
    }
}

switchState = () => this.setState({inputState: this.state.inputState + 1});
            

render() {

    const inputState = this.state.inputState;
    
    switch(inputState) {
        case 0:
            return (
                <div>
                <button type="button" onClick={this.switchState}>next</button>;
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


}


export default AddImputButton;
