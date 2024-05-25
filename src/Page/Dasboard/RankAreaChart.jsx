// RankAreaChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const RankAreaChart = ({ data }) => {
    // Mengurutkan data berdasarkan nilai
    const sortedData = data.sort((a, b) => b.y - a.y);

    const categories = sortedData.map(item => item.x);
    const values = sortedData.map(item => item.y);

    const series = [{
        name: 'Rank',
        data: values
    }];

    const options = {
        chart: {
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 300,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            },
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: categories,
            labels: {
                rotate: -90
            }
        },
        yaxis: {
            title: {
                text: 'Rank'
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
        title: {
            text: 'Rank Area Chart',
            align: 'center',
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                fontFamily: 'sans-serif'
            }
        }
    };

    return (
        <Chart
            options={options}
            series={series}
            type="area"
            height="400"
        />
    );
};

export default RankAreaChart;
