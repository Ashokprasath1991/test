// DoughnutChart.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Votes',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(248, 27, 75, 0.6)',
          'rgba(4, 147, 241, 0.6)',
          'rgba(248, 182, 14, 0.6)',
        ],
        borderColor: [
          'rgba(252, 15, 66, 1)',
          'rgba(11, 154, 250, 1)',
          'rgba(250, 183, 14, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      {/* <h3>Doughnut Chart</h3> */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
