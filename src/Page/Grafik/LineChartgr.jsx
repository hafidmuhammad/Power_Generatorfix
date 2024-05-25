import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ data }) => {
    const series = [{
        name: 'Kinerja Power Generator',
        data: data
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
            type: 'datetime'
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value.toFixed(2); // Sesuaikan sesuai kebutuhan
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
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
            type="line"
            height="400"
        />
    );
};

export default LineChart;
