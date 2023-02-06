import React, { Component } from 'react';
import Income from "./income";
import FixedCharges from './fixedCharges';
import Budgets from './budget';
import Spendings from './spendings';
import AddImputButton from './addImputButton';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      data: props.initialData
    };
  }

  pages = [Income,FixedCharges, Budgets, Spendings];

  changePage = page => {
    this.setState({ currentPage: page });
  };

  handleChange = (event) => {
   const stateID = this.pages[this.state.currentPage].id;
    const { name, value } = event.target;
    
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [stateID]: {
          ...prevState.data[stateID],
          [name]: value
        }
      }
    }));

  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.data);
    this.changePage((this.state.currentPage + 1) % this.pages.length)
  };

  render() {
    const { currentPage, data } = this.state;
    const CurrentPage = this.pages[currentPage];
    // const stateID = CurrentPage.id;
    // let placeholder = '';
    
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Enter {CurrentPage.name} :</p>
        <input
          type={CurrentPage.inputType}
          name='main'
          // value={placeholder}
          // value={data[stateID].main}
          onChange={this.handleChange}
          />
          <AddImputButton handleChange = {this.handleChange} /><br/>
          <button type="submit">Submit</button>
          <p>{JSON.stringify(this.state.data)}</p>
      </form>

    )
  }
}

export default Form;