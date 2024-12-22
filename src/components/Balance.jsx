import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{total.toFixed(2)}</h1>
    </div>
  );
};

  
export default Balance;
