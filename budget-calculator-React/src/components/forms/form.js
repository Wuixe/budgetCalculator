import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData
    };
  }

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
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="income">income:</label>
          <input
            type="text"
            id="income"
            name="income"
            value={this.state.data.income}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="fixedCharges">fixedCharges:</label>
          <input
            type="text"
            id="fixedCharges"
            name="fixedCharges"
            value={this.state.data.fixedCharges}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="budgets">budgets:</label>
          <input
            type="text"
            id="budgets"
            name="budgets"
            value={this.state.data.budgets}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="spendings">spendings:</label>
          <input
            type="text"
            id="spendings"
            name="spendings"
            value={this.state.data.spendings}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;