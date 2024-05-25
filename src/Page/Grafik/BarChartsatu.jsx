// BarChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ data }) => {
    const series = [{
        data: data.map(item => item.y)
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
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            categories: data.map(item => item.x)
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Kinerja Power Generator',
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
            type="bar"
            height="400"
        />
    );
};

export default BarChart;
