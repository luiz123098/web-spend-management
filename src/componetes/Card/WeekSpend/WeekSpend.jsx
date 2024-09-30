import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bulma/css/bulma.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeekSpendCard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulação de dados
    const mockData = [
      { amount: 50.25, date: '2024-01-20' },
      { amount: 35.00, date: '2024-01-21' },
      { amount: 80.75, date: '2024-02-14' },
      { amount: 23.15, date: '2024-02-15' },
      { amount: 12.50, date: '2024-03-03' },
      { amount: 45.00, date: '2024-03-10' },
      { amount: 75.00, date: '2024-04-05' },
      { amount: 60.00, date: '2024-04-15' },
      { amount: 90.00, date: '2024-05-01' },
      { amount: 100.00, date: '2024-05-12' },
    ];

    setTransactions(mockData);
  }, []);

  const getWeekNumber = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.toLocaleString('default', { month: 'long' });
    d.setUTCHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const weekNo = Math.ceil((((d - new Date(`${year}-01-01`)) / 86400000) + 1) / 7);
    return `${month} - Week ${weekNo}${year !== new Date().getFullYear() ? ', ' + year : ''}`;
  };

  const groupByWeek = (transactions) => {
    return transactions.reduce((groups, transaction) => {
      const week = getWeekNumber(transaction.date);
      if (!groups[week]) {
        groups[week] = 0;
      }
      groups[week] += transaction.amount;
      return groups;
    }, {});
  };

  const groupedTransactions = groupByWeek(transactions);
  const weeks = Object.keys(groupedTransactions);
  const amounts = Object.values(groupedTransactions);

  const data = {
    labels: weeks,
    datasets: [
      {
        label: 'Despesas Semanais',
        data: amounts,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Despesas Semanais',
      },
    },
  };

  return (
    <div className="section" style={{ height: '80vh', padding: '0' }}>
      <div className="container" style={{ height: '100%' }}>
        <div className="card" style={{ height: '95%' }}>
          <div className="card-content" style={{ height: '100%' }}>
            <div className="content" style={{ height: '100%' }}>
              <Bar data={data} options={options} style={{ height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekSpendCard;
