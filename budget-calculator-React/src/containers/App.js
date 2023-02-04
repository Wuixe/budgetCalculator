import React, { Component } from 'react';
import Intro from '../components/Intro';
import Form from '../components/form';
import Table from '../components/table';

class App extends Component {
  state = { currentPage: 0 };
  pages = [Intro, Form, Table];

  handleClick = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const CurrentPage = this.pages[this.state.currentPage];

    return (
      <div>
        <h1>Your Budget Calculator</h1>
        <button onClick={() => this.handleClick((this.state.currentPage - 1 + this.pages.length) % this.pages.length)}>
          Previous Page
        </button>
        <button onClick={() => this.handleClick(0)}>Home</button>
        <button onClick={() => this.handleClick(1)}>Reset</button>
        <button onClick={() => this.handleClick((this.state.currentPage + 1) % this.pages.length)}>Next Page</button>

        <CurrentPage />
      </div>
    );
  }
}

export default App;
