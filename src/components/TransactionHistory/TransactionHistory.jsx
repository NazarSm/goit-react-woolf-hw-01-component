import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
      <tr>
        <th className={css['uppercase']}>Type</th>
        <th className={css['uppercase']}>Amount</th>
        <th className={css['uppercase']}>Currency</th>
      </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={css['capitalize']}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
