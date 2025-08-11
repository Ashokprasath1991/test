import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
    return (
        <div className="dataCard revenueCard barchart1 "style={{height:'200px',width:'500px'}}>
            <p className="fs1 text-dark">hello</p>
            <Bar
                data={{
                    labels: ["one", "two", "three","four"], // ✅ corrected to lowercase /* x axis */
                    datasets: [
                        {
                            label: "title",
                            data: [10, 20, 30,40],
                            backgroundColor: 'rgba(177, 10, 10, 0.92)',
                        },
                        {
                            label: "title 2",
                            data: [15, 25, 35,55],
                            backgroundColor: 'rgba(85, 14, 228, 0.6)',/* y axis */
                        },
                        {
                            label:"title 3",
                            data:[15,20,45,78],
                            backgroundColor:'orange',
                        }
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            enabled: true,
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChart;
