import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../dashtwo/index.css';

  const options = {
      title: {
        text: '$ 100,000',
        align: 'left',
        verticalAlign: 'top'
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        borderWidth: 0,
        showInLegend: "false"
      },
      chart: {
        styledMode: false
      },
      xAxis: {
        categories: ['1 July', '8 July', '16 July', '24 July', '31 July'],
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value + "$";
          }
        }
      },
      tooltip: {
        borderRadius: 4,
        borderWidth: 3,
        boxShadow: '0px 0px 8px rgba(16, 30, 115, 0.12)'
      },
      plotOptions: {
        area: {
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [
        {
          name: '',
          type: "spline",
          data: [51000, 82000, 32000, 51000, 30000],
          color: "#336CFB",
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
      ]
    }


export default options;