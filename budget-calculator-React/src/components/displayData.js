import React from 'react';

const displayData = ({ data }) => {
  return (
    <div>
      <p>Your total income is: {data.income} $</p>
      <p>Your total fixed charges are: {data.fixedCharges} $</p>
      <p>Your budget is: {data.budgets} $</p>
      <p>Your total spendings are: {data.spendings} $</p>
    </div>
  );
};

export default displayData;
