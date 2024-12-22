import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction, addTransaction} = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>₹{Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
