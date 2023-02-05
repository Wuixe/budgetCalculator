import React, {Component} from "react";

class resetButton extends Component {
    
        data = {
          income: {},
          fixedCharges: {},
          budgets: {},
          spendings: {}
          };  

      handleClick = (event) => {
        event.preventDefault();
        this.props.setData(this.data);
        this.props.setPage(1)
      };

      render() {
        return (<button type="submit" onClick={this.handleClick}>Reset</button>)
      }


}

export default resetButton;