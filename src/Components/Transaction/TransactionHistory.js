import React from 'react';
import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';


const TransactionHistory = ({ transaction }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(PropTypes.object)
};