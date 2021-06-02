import React from 'react';
import PropTypes from 'prop-types';
import transactionHistory from '../styles/TransactionHistory.module.css'

const TransactionHistory = ({items}) => (
<div className={transactionHistory.container}>
   <table className={transactionHistory.table}>
    <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
    </thead>
    <tbody>
            {items.map(({id, type, amount,currency }) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
    </tbody>
</table>
</div>)

TransactionHistory.defaultProps = {
    
};
 
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.number.isRequired, 
}

export default TransactionHistory;


