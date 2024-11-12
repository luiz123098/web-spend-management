import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../ExpensesActivities/ExpensesActivities.css'; // Certifique-se de importar o arquivo CSS

const ExpensesActivitiesCard = () => {
  const [transactions, setTransactions] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    // Simulação de dados
    const mockData = [
      { location: 'Supermarket', amount: 50.25, date: '2024-05-20T12:00:00', card: 'Visa' },
      { location: 'Gas Station', amount: 35.00, date: '2024-05-20T14:30:00', card: 'MasterCard' },
      { location: 'Restaurant', amount: 80.75, date: '2024-05-21T18:45:00', card: 'Visa' },
      { location: 'Bookstore', amount: 23.15, date: '2024-05-21T10:15:00', card: 'Amex' },
      { location: 'Coffee Shop', amount: 12.50, date: '2024-05-22T08:30:00', card: 'Visa' },
      { location: 'Gym', amount: 45.00, date: '2024-05-22T19:00:00', card: 'MasterCard' },
      // Adicione mais dados simulados aqui se necessário
    ];

    setTransactions(mockData);
  }, []);

  const groupByDate = (transactions) => {
    return transactions.reduce((groups, transaction) => {
      const date = transaction.date.split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(transaction);
      return groups;
    }, {});
  };

  const filteredTransactions = filterDate
    ? transactions.filter(transaction => transaction.date.startsWith(filterDate))
    : transactions;

  const groupedTransactions = groupByDate(filteredTransactions);

  return (
    <div className='box'>
      <p className="has-text-warning fa-2x">Latest Activities</p>
      <div className="container">
        <div className="field">
          <label className="label">Filter by date</label>
          <div className="control">
            <input
              className="input"
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
        </div>
        <div className="custom-scrollbar">
          {Object.keys(groupedTransactions).map(date => (
            <div key={date}>
              <h2 className="title is-4">{date}</h2>
              <table className="table is-fullwidth is-striped">
                <thead>
                  <tr>
                    <th>Local</th>
                    <th>Quantidade</th>
                    <th>Cartão</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedTransactions[date].map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.location}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.card}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpensesActivitiesCard;
