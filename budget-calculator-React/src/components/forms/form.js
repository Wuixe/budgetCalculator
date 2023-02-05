import React, { Component } from 'react';
import Income from "./income";
import FixedCharges from './fixedCharges';
import Budgets from './budget';
import Spendings from './spendings';

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
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    });
  };

 
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.data);
    this.changePage((this.state.currentPage + 1) % this.pages.length)
  };

  render() {
    const { currentPage, data } = this.state;
    const CurrentPage = this.pages[currentPage];
    const stateID = CurrentPage.id;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Enter {CurrentPage.name} :</p>
        <input
          type={CurrentPage.inputType}
          name={CurrentPage.name}
          value={data[stateID]}
          onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
      </form>

    )
  }
}

export default Form;