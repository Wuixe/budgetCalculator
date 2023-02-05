import React, { Component } from 'react';
import Intro from '../components/Intro';
import Form from '../components/forms/form';
import Table from '../components/table';
import DisplayData from '../components/displayData.js';
import ResetButton from '../components/resetButton';

class App extends Component {
  state = {
    currentPage: 0,
    data: {
      income: {},
      fixedCharges: {},
      budgets: {},
      spendings: {}
    }  
  };

  pages = [Intro, Form, Table];

  changePage = page => {
    this.setState({ currentPage: page });
  };

  setData = (updatedData) => {
    this.setState({ data: updatedData });
  };


  render() {
    const { currentPage, data } = this.state;
    const CurrentPage = this.pages[currentPage];

    return (
      <div>
        <h1>Your Budget Calculator</h1>
        <button
          onClick={() =>
            this.changePage
            ((currentPage - 1 + this.pages.length) % this.pages.length)}>Previous Page</button>
        <button onClick={() => this.changePage(0)}>Home</button>
        <ResetButton setData = {this.setData} setPage = {this.changePage}/>
        <button
          onClick={() =>
            this.changePage
            ((currentPage + 1) % this.pages.length)}>Next Page</button>
       <CurrentPage initialData= {data} onSubmit={this.setData}/>
       <p>{JSON.stringify(this.state.data)}</p>
       {/* <DisplayData data = {data}/> */}
      </div>
    );
  }
}

export default App;
