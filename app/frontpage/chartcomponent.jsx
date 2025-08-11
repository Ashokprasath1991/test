import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const EmployeesInfoChart = () => {
  const chartRef = useRef(null);

  const chartData = {
    labels: ['0 Jan', '31 Jan', '22 Feb', '15 Mar', '05 Apr', '26 Apr', '17 May', '08 Jun', '29 Jun', '20 Jul'],
    datasets: [
      {
        label: 'Employees Info',
        data: [5, 10, 8, 15, 12, 10, 13, 11, 9, 10],
        fill: false,
        borderColor: '#ff6384', // will be replaced with gradient in useEffect
        tension: 0.4,
        pointBackgroundColor: '#ffc107', // yellow
        pointBorderColor: '#ffc107',
        pointRadius: 6,
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
    gradient.addColorStop(0, '#ff4e94');  // pink
    gradient.addColorStop(1, '#ffa500');  // orange

    chart.data.datasets[0].borderColor = gradient;
    chart.update();
  }, []);

  return (
    <div className="chart-wrapper p-1 border rounded" style={{ width: '90%', height: '120%' }}>

      <h5 className="inline mb-3">Employees Info</h5>

      <div className="chart_canvas p-1"style={{ width: '100%', height: '60%',  }}>
        <Line

          ref={chartRef}
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: { beginAtZero: true },
            },
          }}
        />
      </div>
    </div>
  );
};

export default EmployeesInfoChart;
